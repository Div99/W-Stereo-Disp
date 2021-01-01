import argparse
import os

import numpy as np
import scipy.misc as ssc

import kitti_util


def project_disp_to_depth(calib, depth, std, max_high):
    rows, cols = depth.shape
    c, r = np.meshgrid(np.arange(cols), np.arange(rows))
    points = np.stack([c, r, depth])
    points = points.reshape((3, -1))
    points = points.T
    cloud = calib.project_image_to_velo(points)
    std = std.reshape((1,-1))
    cloud = np.concatenate((cloud, std), axis=1)
    valid = (cloud[:, 0] >= 0) & (cloud[:, 2] < max_high)
    return cloud[valid]


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Generate Libar')
    parser.add_argument('--calib_dir', type=str,
                        default='~/Kitti/object/training/calib')
    parser.add_argument('--depth_dir', type=str,
                        default='~/Kitti/object/training/predicted_disparity')
    parser.add_argument('--save_dir', type=str,
                        default='~/Kitti/object/training/predicted_velodyne')
    parser.add_argument('--max_high', type=int, default=1)
    args = parser.parse_args()

    assert os.path.isdir(args.depth_dir)
    assert os.path.isdir(args.calib_dir)

    if not os.path.isdir(args.save_dir):
        os.makedirs(args.save_dir)

    depths = [x for x in os.listdir(args.depth_dir) if x[-3:] == 'npy'  and 'std' not in x]
    depths = sorted(depths)

    for fn in depths:
        predix = fn[:-4]
        calib_file = '{}/{}.txt'.format(args.calib_dir, predix)
        calib = kitti_util.Calibration(calib_file)
        depth_map = np.load(args.depth_dir + '/' + fn)
        depth_map_std = np.load(args.depth_dir + '/' + fn[:-4]+'_std.npy')
        depth_map_std[depth_map_std<0] = 0
        depth_map_std = (2.-depth_map_std).clip(0.1)
        lidar = project_disp_to_depth(calib, depth_map, depth_map_std, args.max_high)
        # pad 1 in the indensity dimension
        # lidar = np.concatenate([lidar, np.ones((lidar.shape[0], 1))], 1)
        lidar = lidar.astype(np.float32)
        lidar.tofile('{}/{}.bin'.format(args.save_dir, predix))
        print('Finish Depth {}'.format(predix))
