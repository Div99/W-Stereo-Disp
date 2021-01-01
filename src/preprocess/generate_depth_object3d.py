import argparse
import os

import numpy as np
from PIL import Image
import kitti_util

import sys
sys.path.append('../')
import object3d_utils.kitti_utils as od_utils


def generate_rect_from_velo(pc_velo, height, width, calib):
    pts_2d = calib.project_velo_to_image(pc_velo)
    fov_inds = (pts_2d[:, 0] < width - 1) & (pts_2d[:, 0] >= 0) & \
               (pts_2d[:, 1] < height - 1) & (pts_2d[:, 1] >= 0)
    fov_inds = fov_inds & (pc_velo[:, 0] > 2)
    imgfov_pc_velo = pc_velo[fov_inds, :]
    imgfov_pts_2d = pts_2d[fov_inds, :]
    imgfov_pc_rect = calib.project_velo_to_rect(imgfov_pc_velo)
    return imgfov_pc_rect, imgfov_pts_2d


def object3d_loader(path):
    return od_utils.get_objects_from_label(path)


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


def generate_labels_from_velo(pc_velo, gt_boxes3d, height, width, calib):
    imgfov_pc_rect, imgfov_pts_2d = generate_rect_from_velo(
        pc_velo, height, width, calib)
    cls_label, reg_label = generate_rpn_training_labels(
        imgfov_pc_rect, gt_boxes3d)

    assert len(cls_label) == len(reg_label) == len(imgfov_pc_rect)

    depth_map = np.zeros((height, width)) - 1
    cls_map = np.zeros((height, width)) - 1
    reg_map = np.zeros((height, width, 7)) - 1

    imgfov_pts_2d = np.round(imgfov_pts_2d).astype(int)
    for i in range(imgfov_pts_2d.shape[0]):
        depth = imgfov_pc_rect[i, 2]

        depth_map[int(imgfov_pts_2d[i, 1]), int(imgfov_pts_2d[i, 0])] = depth

        cls_map[int(imgfov_pts_2d[i, 1]), int(
            imgfov_pts_2d[i, 0])] = cls_label[i]

        reg_map[int(imgfov_pts_2d[i, 1]), int(
            imgfov_pts_2d[i, 0])] = reg_label[i]

    baseline = 0.54

    # disp_map = (calib.f_u * baseline) / depth_map
    return np.dstack([depth_map, cls_map, reg_map])


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


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate Labelled Depth map. Has shape (H, W, C) with channels (depth, class, dx, dy, dz, ry, h, w, l).' \
        'class can be [-1, 0, 1] denoting invalid, background and foreground')
    parser.add_argument('--data_path', type=str,
                        default='~/Kitti/object/training/')
    parser.add_argument('--split_file', type=str,
                        default='~/Kitti/object/train.txt')
    parser.add_argument('--velodyne', type=str, default=None)
    parser.add_argument('--save_dir', type=str, default=None)
    parser.add_argument('--classes', type=str, default='Car', description='The type of object to be treated as foreground. By default, only Cars.')

    args = parser.parse_args()

    assert os.path.isdir(args.data_path)
    if args.velodyne:
        lidar_dir = args.velodyne
    else:
        lidar_dir = args.data_path + '/velodyne/'
    calib_dir = args.data_path + '/calib/'
    image_dir = args.data_path + '/image_2/'
    label_dir = args.data_path + '/label_2/'
    if args.save_dir:
        depth_dir = args.save_dir
    else:
        depth_dir = args.data_path + '/depth_map/'

    assert os.path.isdir(lidar_dir)
    assert os.path.isdir(calib_dir)
    assert os.path.isdir(image_dir)
    assert os.path.isdir(label_dir)

    if not os.path.isdir(depth_dir):
        os.makedirs(depth_dir)

    lidar_files = [x for x in os.listdir(lidar_dir) if x[-3:] == 'bin']
    lidar_files = sorted(lidar_files)

    assert os.path.isfile(args.split_file)
    with open(args.split_file, 'r') as f:
        file_names = [x.strip() for x in f.readlines()]

    classes = arg.classes

    for fn in lidar_files:
        predix = fn[:-4]
        if predix not in file_names:
            continue
        calib_file = '{}/{}.txt'.format(calib_dir, predix)
        calib = kitti_util.Calibration(calib_file)
        # load point cloud
        lidar = np.fromfile(lidar_dir + '/' + fn,
                            dtype=np.float32).reshape((-1, 4))[:, :3]
        # load 3d objects
        label_file = '{}/{}.txt'.format(label_dir, predix)
        object_3d = object3d_loader(label_file)
        gt_obj_list = filtrate_objects(object_3d, classes)
        gt_boxes3d = od_utils.objs_to_boxes3d(gt_obj_list)

        image_file = '{}/{}.png'.format(image_dir, predix)
        image = Image.open(image_file).convert('RGB')
        image = np.array(image)
        height, width = image.shape[:2]
        labelled_depth_map = generate_labels_from_velo(
            lidar, gt_boxes3d, height, width, calib)
        np.save(depth_dir + '/' + predix, labelled_depth_map)
        print('Finish Depth {}'.format(predix))
