import losswise
import torch


class ModularizedFunction(torch.nn.Module):
    """
    A Module which calls the specified function in place of the forward pass.
    Useful when your existing loss is functional and you need it to be a Module.
    """
    def __init__(self, forward_op):
        super().__init__()
        self.forward_op = forward_op

    def forward(self, *args, **kwargs):
        return self.forward_op(*args, **kwargs)


class CriterionParallel(torch.nn.Module):
    def __init__(self, criterion):
        super().__init__()
        if not isinstance(criterion, torch.nn.Module):
            criterion = ModularizedFunction(criterion)
        self.criterion = torch.nn.DataParallel(criterion)

    def forward(self, *args, **kwargs):
        """
        Note the .mean() here, which is required since DataParallel 
        gathers any scalar outputs of forward() into a vector with 
        one item per GPU (See DataParallel docs).
        """
        return self.criterion(*args, **kwargs).mean()

class AverageMeter(object):
    """Computes and stores the average and current value"""

    def __init__(self):
        self.reset()

    def reset(self):
        self.val = 0
        self.avg = 0
        self.sum = 0
        self.count = 0

    def update(self, val, n=1):
        self.val = val
        self.sum += val * n
        self.count += n
        self.avg = self.sum / self.count


class Metric(object):
    def __init__(self):
        self.EPE = AverageMeter()
        self.px1 = AverageMeter()
        self.px2 = AverageMeter()
        self.px3 = AverageMeter()
        self.px5 = AverageMeter()
        self.DELTA = AverageMeter()
        self.DELTASQ = AverageMeter()
        self.DELTACU = AverageMeter()
        self.losses = AverageMeter()

    def update(self, loss, EPE, px1, px2, px3, px5, delta, delta_sq, delta_cu):
        if loss:
            self.losses.update(loss)
        self.EPE.update(EPE)
        self.px1.update(px1)
        self.px2.update(px2)
        self.px3.update(px3)
        self.px5.update(px5)
        self.DELTA.update(delta)
        self.DELTASQ.update(delta_sq)
        self.DELTACU.update(delta_cu)

    def get_info(self):
        return [self.losses.avg, self.EPE.avg, self.px1.avg, self.px2.avg, self.px3.avg, self.px5.avg, self.DELTA.avg,
                self.DELTASQ.avg, self.DELTACU.avg]

    def calculate(self, disp, predict, loss=None):
        mask = (disp > 0) * (disp < 192)

        disp = disp[mask]
        predict = predict[mask]

        abs_error = torch.abs(disp - predict)
        total_num = mask.float().sum().cpu().data

        EPE = abs_error.float().mean().cpu().data
        px1 = torch.sum(torch.gt(abs_error, 1).float()).cpu().data / total_num * 100
        px2 = torch.sum(torch.gt(abs_error, 2).float()).cpu().data / total_num * 100
        px3 = torch.sum(torch.gt(abs_error, 3).float()).cpu().data / total_num * 100
        px5 = torch.sum(torch.gt(abs_error, 5).float()).cpu().data / total_num * 100
        delta = (torch.max(predict / disp, disp / predict) < 1.25).float().mean().cpu().data
        delta_sq = (torch.max(predict / disp,
                              disp / predict) < 1.25 ** 2).float().mean().cpu().data
        delta_cu = (torch.max(predict / disp,
                              disp / predict) < 1.25 ** 3).float().mean().cpu().data
        self.update(loss, EPE, px1, px2, px3, px5, delta, delta_sq, delta_cu)

    def tensorboard(self, writer, epoch, token='train'):
        writer.add_scalar(token + '/EPE', self.EPE.avg, epoch)
        writer.add_scalar(token + '/1px', self.px1.avg, epoch)
        writer.add_scalar(token + '/2px', self.px2.avg, epoch)
        writer.add_scalar(token + '/3px', self.px3.avg, epoch)
        writer.add_scalar(token + '/5px', self.px5.avg, epoch)
        writer.add_scalar(token + '/DELTA', self.DELTA.avg, epoch)
        writer.add_scalar(token + '/DELTASQ', self.DELTASQ.avg, epoch)
        writer.add_scalar(token + '/DELTACU', self.DELTACU.avg, epoch)

    def print(self, iter, token):
        string = '{}:{}\tL {:.3f} EPE {:.3f} 1px {:.3f} 2px {:.3f} 3px {:.3f} 5px {:.3f} DEL {:.3f} DELQ {:.3f} DELC {:.3f}'.format(token, iter, *self.get_info())
        return string



class LossWise(object):
    def __init__(self, key=None, tag=None, epochs=300):
        self.key = key
        print(self.key)
        if len(self.key)>0:
            losswise.set_api_key(self.key)
            session = losswise.Session(tag=tag, max_iter=epochs)
            self.error = session.graph('Error', kind='min', display_interval=1)
            self.loss = session.graph('Loss', kind='min', display_interval=1)
            self.delta = session.graph('Delta', kind='min', display_interval=1)
            self.session=session

    def update(self, info, epoch, tag='Train'):
        if len(self.key)>0:
            self.loss.append(epoch, {tag+'/loss':info[0]})
            self.error.append(epoch, {tag+'/EPE':info[1], tag+'/1px':info[2],
                                      tag+'/2px':info[3], tag+'/3px':info[4],
                                      tag+'/5px':info[5]})
            self.delta.append(epoch, {tag+'/1.25':info[6],tag+'/1.25^2':info[7],
                                      tag+'/1.25^3':info[8]})

    def done(self):
        self.session.done()

class LossWise1(object):
    def __init__(self, key=None, tag=None, epochs=300):
        self.key = key
        print(self.key)
        if len(self.key)>0:
            losswise.set_api_key(self.key)
            session = losswise.Session(tag=tag, max_iter=epochs)
            self.error = session.graph('Error', kind='min', display_interval=1)
            self.loss_total = session.graph('Loss', kind='min', display_interval=1)
            self.delta = session.graph('Delta', kind='min', display_interval=1)
            self.session=session

    def update(self, info, epoch, tag='Train'):
        if len(self.key)>0:
            self.loss_total.append(epoch, {tag+'/loss_gt':info[0], tag+'/loss_pseudo':info[1], tag+'/loss_total':info[2]})
            self.error.append(epoch, {tag+'/EPE':info[3], tag+'/1px':info[4],
                                      tag+'/2px':info[5], tag+'/3px':info[6],
                                      tag+'/5px':info[7]})
            self.delta.append(epoch, {tag+'/1.25':info[8],tag+'/1.25^2':info[9],
                                      tag+'/1.25^3':info[10]})

    def done(self):
        self.session.done()

class Metric1(object):
    def __init__(self):
        self.RMSELIs = AverageMeter()
        self.RMSELGs = AverageMeter()
        self.ABSRs = AverageMeter()
        self.SQRs = AverageMeter()
        self.DELTA = AverageMeter()
        self.DELTASQ = AverageMeter()
        self.DELTACU = AverageMeter()
        self.losses_gt = AverageMeter()
        self.losses_pseudo = AverageMeter()
        self.losses_total = AverageMeter()

    def update(self, loss_gt, loss_pseudo, loss_total, RMSE_Linear, RMSE_Log, abs_relative, sq_relative, delta, delta_sq, delta_cu):
        self.losses_gt.update(loss_gt)
        self.losses_pseudo.update(loss_pseudo)
        self.losses_total.update(loss_total)
        self.RMSELIs.update(RMSE_Linear)
        self.RMSELGs.update(RMSE_Log)
        self.ABSRs.update(abs_relative)
        self.SQRs.update(sq_relative)
        self.DELTA.update(delta)
        self.DELTASQ.update(delta_sq)
        self.DELTACU.update(delta_cu)

    def get_info(self):
        return [self.losses_gt.avg, self.losses_pseudo.avg, self.losses_total.avg, self.RMSELIs.avg, self.RMSELGs.avg, self.ABSRs.avg, self.SQRs.avg, self.DELTA.avg,
                self.DELTASQ.avg, self.DELTACU.avg]

    def calculate(self, depth, predict, loss_gt=0, loss_psuedo=0, loss_total=0):
        # only consider 1~80 meters
        mask = (depth >= 1) * (depth <= 80)
        RMSE_Linear = ((((predict[mask] - depth[mask]) ** 2).mean()) ** 0.5).cpu().data
        RMSE_Log = ((((torch.log(predict[mask]) - torch.log(depth[mask])) ** 2).mean()) ** 0.5).cpu().data
        abs_relative = (torch.abs(predict[mask] - depth[mask]) / depth[mask]).mean().cpu().data
        sq_relative = ((predict[mask] - depth[mask]) ** 2 / depth[mask]).mean().cpu().data
        delta = (torch.max(predict[mask] / depth[mask], depth[mask] / predict[mask]) < 1.25).float().mean().cpu().data
        delta_sq = (torch.max(predict[mask] / depth[mask],
                              depth[mask] / predict[mask]) < 1.25 ** 2).float().mean().cpu().data
        delta_cu = (torch.max(predict[mask] / depth[mask],
                              depth[mask] / predict[mask]) < 1.25 ** 3).float().mean().cpu().data
        self.update(loss_gt, loss_psuedo, loss_total, RMSE_Linear, RMSE_Log, abs_relative, sq_relative, delta, delta_sq, delta_cu)

    def tensorboard(self, writer, epoch, token='train'):
        writer.add_scalar(token + '/RMSELIs', self.RMSELIs.avg, epoch)
        writer.add_scalar(token + '/RMSELGs', self.RMSELGs.avg, epoch)
        writer.add_scalar(token + '/ABSRs', self.ABSRs.avg, epoch)
        writer.add_scalar(token + '/SQRs', self.SQRs.avg, epoch)
        writer.add_scalar(token + '/DELTA', self.DELTA.avg, epoch)
        writer.add_scalar(token + '/DELTASQ', self.DELTASQ.avg, epoch)
        writer.add_scalar(token + '/DELTACU', self.DELTACU.avg, epoch)

    def print(self, iter, token):
        string = '{}:{}\tL {:.3f} {:.3f} {:.3f} RLI {:.3f} RLO {:.3f} ABS {:.3f} SQ {:.3f} DEL {:.3f} DELQ {:.3f} DELC {:.3f}'.format(token, iter, *self.get_info())
        return string
