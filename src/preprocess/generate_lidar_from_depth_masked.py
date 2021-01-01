import argparse
import os

import numpy as np
import scipy.misc as ssc

import kitti_util


def project_depth_to_lidar(calib, depth, objects, max_high):
    rows, cols = depth.shape
    c, r = np.meshgrid(np.arange(cols), np.arange(rows))
    points = np.stack([c, r, depth])
    points = points.reshape((3, -1))
    points = points.T
    points = filter_velo_with_boxes(points, objects, calib)
    cloud = calib.project_image_to_velo(points)
    valid = (cloud[:, 0] >= 0) & (cloud[:, 2] < max_high)
    return cloud


def filter_velo_with_boxes(points, objects, calib):
    ''' Show image with 2D bounding boxes '''
    mask = np.zeros(points.shape[0], dtype=bool)

    for obj in objects:
        if obj.type == 'Car' or obj.type == 'Van':
            fov_inds = (points[:,0] < obj.xmax) & (points[:,0] > obj.xmin) & \
                (points[:,1] < obj.ymax) & (points[:,1] > obj.ymin)
            mask = mask | fov_inds

    return points[mask, :]

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Generate Libar')
    parser.add_argument('--calib_dir', type=str,
                        default='/scratch/datasets/KITTI/object/training/calib')
    parser.add_argument('--label_dir', type=str,
                        default='/scratch/datasets/KITTI/object/training/label_2')
    parser.add_argument('--depth_dir', type=str,
                        default='/scratch/datasets/KITTI/object/training/depth_map')
    parser.add_argument('--save_dir', type=str,
                        default='~/Kitti/object/training/predicted_velodyne')
    parser.add_argument('--max_high', type=int, default=1)
    args = parser.parse_args()

    assert os.path.isdir(args.depth_dir)
    assert os.path.isdir(args.calib_dir)
    assert os.path.isdir(args.label_dir)

    if not os.path.isdir(args.save_dir):
        os.makedirs(args.save_dir)

    depths = [x for x in os.listdir(args.depth_dir) if x[-3:] == 'npy'  and 'std' not in x]
    depths = sorted(depths)

    for fn in depths:
        predix = fn[:-4]
        calib_file = '{}/{}.txt'.format(args.calib_dir, predix)
        label_file = '{}/{}.txt'.format(args.label_dir, predix)

        calib = kitti_util.Calibration(calib_file)
        objects = kitti_util.read_label(label_file)
        depth_map = np.load(args.depth_dir + '/' + fn)
        lidar = project_depth_to_lidar(calib, depth_map, objects, args.max_high)
        # pad 1 in the indensity dimension
        lidar = np.concatenate([lidar, np.ones((lidar.shape[0], 1))], 1)
        lidar = lidar.astype(np.float32)
        lidar.tofile('{}/{}.bin'.format(args.save_dir, predix))
        print('Finish Depth {}'.format(predix))
