import argparse
import os
import shutil
import time

import configargparse
import numpy as np
import losswise
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.nn.parallel
import torch.optim as optim
import torch.utils.data
from tensorboardX import SummaryWriter
from torch.optim.lr_scheduler import MultiStepLR, StepLR
from tqdm import tqdm

import disp_models
import disp_utils_func as utils_func
import logger
from disp_dataloader import KITTILoader3D, KITTILoader_dataset3d, SceneFlowLoader, listflowfile

parser = configargparse.ArgParser(description="PSMNet")
parser.add("-c", "--config", required=True, is_config_file=True, help="config file")

parser.add_argument("--save_path", type=str, default="", help="path to save the log and checkpoint")
# network
parser.add_argument(
    "--data_type",
    default="depth",
    choices=["disparity", "depth"],
    help="the network can predict either disparity or depth",
)
parser.add_argument("--arch", default="stackhourglass", help="select model")
parser.add_argument("--maxdisp", type=int, default=192, help="maxium disparity")
parser.add_argument(
    "--down", type=int, default=1, help="reduce x times resolution for the grids"
)
parser.add_argument(
    "--maxdepth",
    type=int,
    default=80,
    help="the range of the depth cost volume is from 1 to maxdepth",
)
# dataset
parser.add_argument(
    "--kitti2015", action="store_true", help="If false, use 3d kitti. If true, use stereo 2015"
)
parser.add_argument(
    "--dataset",
    default="kitti",
    choices=["sceneflow", "kitti"],
    help="root folder contains the left and right images and ground truth",
)
parser.add_argument(
    "--datapath", default="", help="root folder contains the left and right images and ground truth"
)
parser.add_argument(
    "--split_train", default="Kitti/object/train.txt", help="data splitting file for training"
)
parser.add_argument(
    "--split_val", default="Kitti/object/subval.txt", help="data splitting file for training"
)
parser.add_argument("--epochs", type=int, default=300, help="number of epochs to train")
parser.add_argument("--btrain", type=int, default=12, help="batch size for training")
parser.add_argument("--bval", type=int, default=4, help="batch size for validation")
# learning rate
parser.add_argument("--lr", type=float, default=0.001)
parser.add_argument(
    "--lr_stepsize", nargs="+", type=int, default=[100, 200], help="learning rate decay step size"
)
parser.add_argument("--lr_gamma", default=0.1, type=float, help="gamma for learning rate decay")
# resume
parser.add_argument("--resume", default=None, help="load model")
parser.add_argument("--pretrain", default=None, help="load model")
parser.add_argument("--start_epoch", type=int, default=0, help="start epoch")
# evaluate
parser.add_argument("--evaluate", action="store_true", help="do evaluation")
parser.add_argument("--calib_value", type=float, default=1017, help="do evaluation")
parser.add_argument("--depth_wise_loss", action="store_true", help="do evaluation")
parser.add_argument("--api_key", type=str, default="", help="do evaluation")
parser.add_argument("--losswise_tag", type=str, default="", help="do evaluation")
parser.add_argument("--dynamic_bs", action="store_true", help="do evaluation")
parser.add_argument("--eval_interval", type=int, default=50, help="evaluate model every n epochs")
parser.add_argument("--checkpoint_interval", type=int, default=-1)
parser.add_argument('--generate_depth_map', action='store_true',
                    help='if true, generate depth maps and save the in save_path/depth_maps/{data_tag}/')
parser.add_argument('--data_list', default=None,
                    help='generate depth maps for all the data in this list')
parser.add_argument('--data_tag', default=None,
                    help='the suffix of the depth maps folder')
args = parser.parse_args()
best_EPE = 1e10


use_losswise = False
if args.api_key:
    use_losswise = True


def interpolate_value_disp(x, indices, maxdisp=args.maxdisp):
    """
    bilinear interpolate tensor x at sampled indices
    x: [B, D, H, W] (features)
    indices: [B, H, W] sampled indices (0-indexed)
    """

    # B,D,H,W to B,H,W,D
    x = x.permute(0, 2, 3, 1)
    indices = torch.unsqueeze(indices, -1)

    indices = torch.clamp(indices, 0, maxdisp - 1)
    idx0 = torch.floor(indices).long()
    idx1 = torch.min(idx0 + 1, (maxdisp - 1) * torch.ones_like(idx0))
    idx0 = torch.max(idx1 - 1, torch.zeros_like(idx0))

    y0 = torch.gather(x, -1, idx0)
    y1 = torch.gather(x, -1, idx1)

    lmbda = indices - idx0.float()
    output = (1 - lmbda) * y0 + (lmbda) * y1

    output = torch.squeeze(output, -1)
    return output


def W1_loss(prob, target, off, mask, epoch, reduction="mean"):
    # B,D,H,W to B,H,W,D
    off = off.permute(0, 2, 3, 1)
    prob = prob.permute(0, 2, 3, 1)

    grid = torch.arange(0, args.maxdisp // args.down, device="cuda", requires_grad=False).float()[
        None, None, None, :
    ]
    depth = (grid + off) * args.down
    target = target.unsqueeze(3)
    out = torch.abs(depth[mask] - target[mask])
    loss = torch.sum(prob[mask] * out, 1)

    if reduction == "none":
        return loss
    elif reduction == "mean":
        return loss.mean()


def main():
    global best_EPE
    if use_losswise:
        lw = utils_func.LossWise(args.api_key, args.losswise_tag, args.epochs - 1)
    # set logger
    log = logger.setup_logger(os.path.join(args.save_path, "training.log"))
    for key, value in sorted(vars(args).items()):
        log.info(str(key) + ": " + str(value))

    # set tensorboard
    writer = SummaryWriter(args.save_path + "/tensorboardx")

    # Data Loader
    if args.dataset == "kitti":
        train_data, val_data = KITTILoader3D.dataloader(
            args.datapath, args.split_train, args.split_val, kitti2015=args.kitti2015
        )
        TrainImgLoader = torch.utils.data.DataLoader(
            KITTILoader_dataset3d.myImageFloder(
                train_data, True, kitti2015=args.kitti2015, dynamic_bs=args.dynamic_bs
            ),
            batch_size=args.btrain,
            shuffle=True,
            num_workers=16,
            drop_last=False,
            pin_memory=True,
        )
        TestImgLoader = torch.utils.data.DataLoader(
            KITTILoader_dataset3d.myImageFloder(
                val_data, False, kitti2015=args.kitti2015, dynamic_bs=args.dynamic_bs
            ),
            batch_size=args.bval,
            shuffle=False,
            num_workers=16,
            drop_last=False,
            pin_memory=True,
        )
    else:
        train_data, val_data = listflowfile.dataloader(args.datapath)
        TrainImgLoader = torch.utils.data.DataLoader(
            SceneFlowLoader.myImageFloder(train_data, True, calib=args.calib_value),
            batch_size=args.btrain,
            shuffle=True,
            num_workers=8,
            drop_last=False,
        )
        TestImgLoader = torch.utils.data.DataLoader(
            SceneFlowLoader.myImageFloder(val_data, False, calib=args.calib_value),
            batch_size=args.bval,
            shuffle=False,
            num_workers=8,
            drop_last=False,
        )

    # Load Model
    if args.data_type == "disparity":
        model = disp_models.__dict__[args.arch](maxdisp=args.maxdisp, down=args.down)
    else:
        log.info("Model is not implemented")
        assert False

    # Number of parameters
    log.info(
        "Number of model parameters: {}".format(
            sum([p.data.nelement() for p in model.parameters()])
        )
    )
    model = nn.DataParallel(model).cuda()
    torch.backends.cudnn.benchmark = True

    # Optimizer
    optimizer = optim.Adam(model.parameters(), lr=args.lr, betas=(0.9, 0.999))
    scheduler = MultiStepLR(optimizer, milestones=args.lr_stepsize, gamma=args.lr_gamma)

    if args.pretrain:
        if os.path.isfile(args.pretrain):
            log.info("=> loading pretrain '{}'".format(args.pretrain))
            checkpoint = torch.load(args.pretrain)
            model.load_state_dict(checkpoint["state_dict"])
        else:
            log.info("[Attention]: Do not find checkpoint {}".format(args.pretrain))

    if args.resume:
        if os.path.isfile(args.resume):
            log.info("=> loading checkpoint '{}'".format(args.resume))
            checkpoint = torch.load(args.resume)
            model.load_state_dict(checkpoint["state_dict"])
            args.start_epoch = checkpoint["epoch"]
            optimizer.load_state_dict(checkpoint["optimizer"])
            best_RMSE = checkpoint["best_EPE"]
            scheduler.load_state_dict(checkpoint["scheduler"])
            log.info(
                "=> loaded checkpoint '{}' (epoch {})".format(args.resume, checkpoint["epoch"])
            )
        else:
            log.info("[Attention]: Do not find checkpoint {}".format(args.resume))

    if args.generate_depth_map:
        os.makedirs(args.save_path + '/depth_maps/' + args.data_tag, exist_ok=True)

        tqdm_eval_loader = tqdm(TestImgLoader, total=len(TestImgLoader))
        for batch_idx, (imgL_crop, imgR_crop, calib, H, W, filename) in enumerate(tqdm_eval_loader):
            pred_disp = inference(imgL_crop, imgR_crop, calib, model)
            for idx, name in enumerate(filename):
                np.save(args.save_path + '/depth_maps/' + args.data_tag +
                        '/' + name, pred_disp[idx][-H[idx]:, :W[idx]])
        import sys
        sys.exit()

    # evaluation
    if args.evaluate:
        evaluate_metric = utils_func.Metric()
        ## training ##
        for batch_idx, (imgL_crop, imgR_crop, disp_crop_L, calib) in enumerate(TestImgLoader):
            start_time = time.time()
            test(imgL_crop, imgR_crop, disp_crop_L, calib, evaluate_metric, optimizer, model)

            log.info(
                evaluate_metric.print(batch_idx, "EVALUATE")
                + " Time:{:.3f}".format(time.time() - start_time)
            )
        import sys

        sys.exit()

    for epoch in range(args.start_epoch, args.epochs):
        scheduler.step()

        ## training ##
        train_metric = utils_func.Metric()
        tqdm_train_loader = tqdm(TrainImgLoader, total=len(TrainImgLoader))
        for batch_idx, (imgL_crop, imgR_crop, disp_crop_L, calib) in enumerate(tqdm_train_loader):
            # start_time = time.time()
            train(imgL_crop, imgR_crop, disp_crop_L, calib, train_metric, optimizer, model, epoch)
            # log.info(train_metric.print(batch_idx, 'TRAIN') + ' Time:{:.3f}'.format(time.time() - start_time))
        log.info(train_metric.print(0, "TRAIN Epoch" + str(epoch)))
        train_metric.tensorboard(writer, epoch, token="TRAIN")
        if use_losswise:
            lw.update(train_metric.get_info(), epoch, "Train")

        ## testing ##
        is_best = False
        if epoch == 0 or ((epoch + 1) % args.eval_interval) == 0:
            test_metric = utils_func.Metric()
            tqdm_test_loader = tqdm(TestImgLoader, total=len(TestImgLoader))
            for batch_idx, (imgL_crop, imgR_crop, disp_crop_L, calib) in enumerate(
                tqdm_test_loader
            ):
                # start_time = time.time()
                test(imgL_crop, imgR_crop, disp_crop_L, calib, test_metric, optimizer, model)
                # log.info(test_metric.print(batch_idx, 'TEST') + ' Time:{:.3f}'.format(time.time() - start_time))
            log.info(test_metric.print(0, "TEST Epoch" + str(epoch)))
            test_metric.tensorboard(writer, epoch, token="TEST")
            if use_losswise:
                lw.update(test_metric.get_info(), epoch, "Test")

            # SAVE
            is_best = test_metric.EPE.avg < best_EPE
            best_EPE = min(test_metric.EPE.avg, best_EPE)
        save_checkpoint(
            {
                "epoch": epoch + 1,
                "arch": args.arch,
                "state_dict": model.state_dict(),
                "best_EPE": best_EPE,
                "scheduler": scheduler.state_dict(),
                "optimizer": optimizer.state_dict(),
            },
            is_best,
            epoch,
            folder=args.save_path,
        )

    if use_losswise:
        lw.done()


def save_checkpoint(state, is_best, epoch, filename="checkpoint.pth.tar", folder="result/default"):
    torch.save(state, folder + "/" + filename)
    if is_best:
        shutil.copyfile(folder + "/" + filename, folder + "/model_best.pth.tar")
    if args.checkpoint_interval > 0 and (epoch + 1) % args.checkpoint_interval == 0:
        shutil.copyfile(
            folder + "/" + filename, folder + "/checkpoint_{}.pth.tar".format(epoch + 1)
        )


def train(imgL, imgR, disp, calib, metric_log, optimizer, model, epoch):
    model.train()
    calib = calib.float()

    imgL, imgR, disp, calib = imgL.cuda(), imgR.cuda(), disp.cuda(), calib.cuda()

    # ---------
    mask = (disp > 0) * (disp < args.maxdisp)
    mask.detach_()
    # ----

    optimizer.zero_grad()

    if "stackhourglass_volume" in args.arch:
        output1, output2, output3, off1, off2, off3 = model(imgL, imgR, calib)
        CustomLoss = utils_func.CriterionParallel(W1_loss)

        loss = (
            0.5 * CustomLoss(output1, disp, off1, mask, epoch, reduction="mean")
            + 0.7 * CustomLoss(output2, disp, off2, mask, epoch, reduction="mean")
            + CustomLoss(output3, disp, off3, mask, epoch, reduction="mean")
        )
    elif "stackhourglass" in args.arch:
        output1, output2, output3 = model(imgL, imgR, calib)
        output1 = torch.squeeze(output1, 1)
        output2 = torch.squeeze(output2, 1)
        output3 = torch.squeeze(output3, 1)

        loss = (
            0.5 * F.smooth_l1_loss(output1[mask], disp[mask], size_average=True)
            + 0.7 * F.smooth_l1_loss(output2[mask], disp[mask], size_average=True)
            + F.smooth_l1_loss(output3[mask], disp[mask], size_average=True)
        )
    elif args.arch == "basic":
        output3 = model(imgL, imgR, calib)
        output3 = torch.squeeze(output3, 1)
        loss = F.smooth_l1_loss(output3[mask], disp[mask], size_average=True)
    else:
        assert False

    if "stackhourglass_volume" in args.arch:
        with torch.no_grad():
            _, pred3_out = torch.max(output3, 1)
            pred3_out = pred3_out.float()
            off3_out = interpolate_value_disp(off3, pred3_out, maxdisp=args.maxdisp // args.down)
            pred = (pred3_out + off3_out) * args.down

    metric_log.calculate(disp, pred, loss=loss.item())
    loss.backward()
    # a = time.time()
    # with torch.autograd.profiler.profile(use_cuda=True) as prof:
    optimizer.step()
    # print(prof)
    # torch.cuda.synchronize()
    # b = time.time()
    # print('back {:.02e}s'.format(b - a))


def inference(imgL, imgR, calib, model):
    model.eval()
    imgL, imgR, calib = imgL.cuda(), imgR.cuda(), calib.float().cuda()

    with torch.no_grad():
        output = model(imgL, imgR, calib)
    if args.data_type == 'disparity':
        output = disp2depth(output, calib)
    pred_disp = output.data.cpu().numpy()

    return pred_disp


def test(imgL, imgR, disp, calib, metric_log, optimizer, model):
    model.eval()
    calib = calib.float()
    imgL, imgR, calib, disp = imgL.cuda(), imgR.cuda(), calib.cuda(), disp.cuda()

    mask = (disp > 0) * (disp < args.maxdisp)
    mask.detach_()
    with torch.no_grad():
        output3 = model(imgL, imgR, calib)

        if args.dataset == "sceneflow":
            output3 = torch.squeeze(output3, 1)[:, 4:, :]
        else:
            output3 = torch.squeeze(output3, 1)

        loss = F.smooth_l1_loss(output3[mask], disp[mask], size_average=True)

        # computing 3-px error#
        metric_log.calculate(disp, output3, loss=loss.item())

    torch.cuda.empty_cache()
    return


def disp2depth(disp, calib):
    depth = calib[:, None, None] / disp.clamp(min=1e-8)
    return depth


if __name__ == "__main__":
    main()
