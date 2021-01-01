import random

import numpy as np
import torch
import torch.utils.data as data
import torchvision.transforms as transforms
from PIL import Image
import object3d_utils.kitti_utils as od_utils

IMG_EXTENSIONS = [
    '.jpg', '.JPG', '.jpeg', '.JPEG',
    '.png', '.PNG', '.ppm', '.PPM', '.bmp', '.BMP',
]


def is_image_file(filename):
    return any(filename.endswith(extension) for extension in IMG_EXTENSIONS)


def default_loader(path):
    return Image.open(path).convert('RGB')


def disparity_loader(path):
    return np.load(path).astype(np.float32)


def object3d_loader(path):
    return od_utils.get_objects_from_label(path)


def read_calib_file(filepath):
    data = {}
    with open(filepath, 'r') as f:
        for line in f.readlines():
            line = line.rstrip()
            if len(line) == 0:
                continue
            key, value = line.split(':', 1)
            try:
                data[key] = np.array([float(x) for x in value.split()])
            except ValueError:
                pass

    return data


def kitti2015_disparity_loader(filepath, calib):
    disp = np.array(Image.open(filepath))/256.
    depth = np.zeros_like(disp)
    mask = disp > 0
    depth[mask] = calib / disp[mask]
    return depth


def dynamic_baseline(calib_info):
    P3 = np.reshape(calib_info['P3'], [3, 4])
    P = np.reshape(calib_info['P2'], [3, 4])
    baseline = P3[0, 3]/(-P3[0, 0]) - P[0, 3]/(-P[0, 0])
    return baseline


def generate_rpn_training_labels(pts_rect, gt_boxes3d):
    """Generates Classification + Regression labels for each point
        Input:  pts_rect: Points in rectified coords [N, 3]
                gt_boxes_3d: 3D groud-truth boxes

        Output: cls_label: Binary labels indicating foreground, shape [N, 1]
                reg_label: Regression target labels. shape [N, 7]
                           (Format: dx, dy, dz, ry, h, w, l)

    """
    cls_label = np.zeros((pts_rect.shape[0]), dtype=np.int32)
    # dx, dy, dz, ry, h, w, l
    reg_label = np.zeros((pts_rect.shape[0], 7), dtype=np.float32)
    gt_corners = od_utils.boxes3d_to_corners3d(gt_boxes3d, rotate=True)
    extend_gt_boxes3d = od_utils.enlarge_box3d(
        gt_boxes3d, extra_width=0.2)
    extend_gt_corners = od_utils.boxes3d_to_corners3d(
        extend_gt_boxes3d, rotate=True)
    for k in range(gt_boxes3d.shape[0]):
        box_corners = gt_corners[k]
        fg_pt_flag = od_utils.in_hull(pts_rect, box_corners)
        fg_pts_rect = pts_rect[fg_pt_flag]
        cls_label[fg_pt_flag] = 1

        # enlarge the bbox3d, ignore nearby points
        extend_box_corners = extend_gt_corners[k]
        fg_enlarge_flag = od_utils.in_hull(pts_rect, extend_box_corners)
        ignore_flag = np.logical_xor(fg_pt_flag, fg_enlarge_flag)
        cls_label[ignore_flag] = -1

        # pixel offset of object center
        center3d = gt_boxes3d[k][0:3].copy()  # (x, y, z)
        center3d[1] -= gt_boxes3d[k][3] / 2
        # Now y is the true center of 3d box
        reg_label[fg_pt_flag, 0:3] = center3d - fg_pts_rect

        # size and angle encoding
        reg_label[fg_pt_flag, 3] = gt_boxes3d[k][3]  # h
        reg_label[fg_pt_flag, 4] = gt_boxes3d[k][4]  # w
        reg_label[fg_pt_flag, 5] = gt_boxes3d[k][5]  # l
        reg_label[fg_pt_flag, 6] = gt_boxes3d[k][6]  # ry

    return cls_label, reg_label


def filtrate_objects(obj_list, classes='Car', training=True):
    """
    Discard objects which are not in self.classes (or its similar classes)
    :param obj_list: list
    :return: list
    """
    if classes == 'Car':
        classes = ('Background', 'Car')
    elif classes == 'People':
        classes = ('Background', 'Pedestrian', 'Cyclist')
    elif classes == 'Pedestrian':
        self.classes = ('Background', 'Pedestrian')
    elif classes == 'Cyclist':
        classes = ('Background', 'Cyclist')
    else:
        assert False, "Invalid classes: %s" % classes

    type_whitelist = classes
    if training:
        type_whitelist = list(classes)
        if 'Car' in classes:
            type_whitelist.append('Van')
        if 'Pedestrian' in classes:  # or 'Cyclist' in classes:
            type_whitelist.append('Person_sitting')

    valid_obj_list = []
    for obj in obj_list:
        if obj.cls_type not in type_whitelist:
            continue
        # Maybe should also remove heavily truncated objects

        valid_obj_list.append(obj)
    return valid_obj_list


class myImageFloder(data.Dataset):
    def __init__(self, data, training, kitti2015=False, dynamic_bs=False, loader=default_loader, dploader=disparity_loader):
        left, right, lidar, object3d, left_calib = data
        self.left = left
        self.dynamic_bs = dynamic_bs
        self.right = right
        self.lidar = lidar
        self.object_3d = object3d
        self.calib = left_calib
        self.loader = loader
        self.kitti2015 = kitti2015
        self.dploader = dploader
        self.training = training
        normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                         std=[0.229, 0.224, 0.225])
        self.transform = transforms.Compose([
            transforms.ToTensor(),
            normalize
        ])

    def __getitem__(self, index):
        left = self.left[index]
        right = self.right[index]
        lidar = self.lidar[index]
        object_3d = self.object_3d[index]
        calib_info = read_calib_file(self.calib[index])

        gt_obj_list = filtrate_objects(object_3d)
        gt_boxes3d = od_utils.objs_to_boxes3d(gt_obj_list)

        if self.dynamic_bs:
            calib = np.reshape(calib_info['P2'], [3, 4])[
                0, 0] * dynamic_baseline(calib_info)
        else:
            calib = np.reshape(calib_info['P2'], [3, 4])[0, 0] * 0.54

        left_img = self.loader(left)
        right_img = self.loader(right)
        if self.kitti2015:
            dataL = kitti2015_disparity_loader(depth, calib)
        else:
            dataL = self.dploader(depth)

        if self.training:
            w, h = left_img.size
            th, tw = 256, 512

            x1 = random.randint(0, w - tw)
            y1 = random.randint(0, h - th)

            left_img = left_img.crop((x1, y1, x1 + tw, y1 + th))
            right_img = right_img.crop((x1, y1, x1 + tw, y1 + th))

            dataL = dataL[y1:y1 + th, x1:x1 + tw]

            left_img = self.transform(left_img)
            right_img = self.transform(right_img)

        else:
            w, h = left_img.size

            # left_img = left_img.crop((w - 1232, h - 368, w, h))
            # right_img = right_img.crop((w - 1232, h - 368, w, h))
            left_img = left_img.crop((w - 1200, h - 352, w, h))
            right_img = right_img.crop((w - 1200, h - 352, w, h))
            w1, h1 = left_img.size

            # dataL1 = dataL[h - 368:h, w - 1232:w]
            dataL = dataL[h - 352:h, w - 1200:w]

            left_img = self.transform(left_img)
            right_img = self.transform(right_img)

        pts_rect = dataL.reshape(-1)
        rpn_cls_label, rpn_reg_label = generate_rpn_training_labels(
            pts_rect, gt_boxes3d)

        dataL = torch.from_numpy(dataL).float()
        return left_img.float(), right_img.float(), dataL.float(), calib.item()

    def __len__(self):
        return len(self.left)
