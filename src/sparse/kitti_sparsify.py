from kitti_object import *
import argparse
import torch
import time
import os.path as osp
import numpy as np
from kitti_util import rotz

def pto_rec_map(velo_points, H = 64, W = 512, D = 800):

    # depth, width, height
    valid_inds = (velo_points[:, 0] < 80) & \
                 (velo_points[:, 0] >= 0) & \
                 (velo_points[:, 1] < 50) & \
                 (velo_points[:, 1] >= -50) & \
                 (velo_points[:, 2] < 1) & \
                 (velo_points[:, 2] >= -2.5)
    velo_points = velo_points[valid_inds]

    x, y, z, i = velo_points[:, 0], velo_points[:, 1], velo_points[:, 2], velo_points[:, 3]
    x_grid = (x * D / 80.).astype(int)
    x_grid[x_grid < 0] = 0
    x_grid[x_grid >= D] = D - 1

    y_grid = ((y + 50) * W / 100.).astype(int)
    y_grid[y_grid < 0] = 0
    y_grid[y_grid >= W] = W - 1

    z_grid = ((z + 2.5) * H / 3.5).astype(int)
    z_grid[z_grid < 0] = 0
    z_grid[z_grid >= H] = H - 1

    depth_map = - np.ones((D, W, H, 4))
    depth_map[x_grid, y_grid, z_grid, 0] = x
    depth_map[x_grid, y_grid, z_grid, 1] = y
    depth_map[x_grid, y_grid, z_grid, 2] = z
    depth_map[x_grid, y_grid, z_grid, 3] = i
    depth_map = depth_map.reshape((-1, 4))
    depth_map = depth_map[depth_map[:, 0] != -1.0]
    return depth_map


def pto_ang_map(velo_points, H=64, W=512, slice=1):
   """
   :param H: the row num of depth map, could be 64(default), 32, 16
   :param W: the col num of depth map
   :param slice: output every slice lines
   """

   dtheta = np.radians(0.4 * 64.0 / H)
   dphi = np.radians(90.0/ W)

   x, y, z, i = velo_points[:, 0], velo_points[:, 1], velo_points[:, 2], velo_points[:, 3]

   d = np.sqrt(x ** 2 + y ** 2 + z ** 2)
   r = np.sqrt(x ** 2 + y ** 2)
   d[d == 0] = 0.000001
   r[r == 0] = 0.000001
   phi = np.radians(45.) - np.arcsin(y / r)
   phi_ = (phi / dphi).astype(int)
   phi_[phi_ < 0] = 0
   phi_[phi_ >= W] = W - 1

   theta = np.radians(2.) - np.arcsin(z / d)
   theta_ = (theta / dtheta).astype(int)
   theta_[theta_ < 0] = 0
   theta_[theta_ >= H] = H - 1

   depth_map = - np.ones((H, W, 4))
   depth_map[theta_, phi_, 0] = x
   depth_map[theta_, phi_, 1] = y
   depth_map[theta_, phi_, 2] = z
   depth_map[theta_, phi_, 3] = i
   depth_map = depth_map[0::slice, :, :]
   depth_map = depth_map.reshape((-1, 4))
   depth_map = depth_map[depth_map[:, 0] != -1.0]
   return depth_map


def gen_sparse_points(dataset, data_idx, sparse_type):
    calib = dataset.get_calibration(data_idx)
    pc_velo = dataset.get_lidar(data_idx)
    img = dataset.get_image(data_idx)
    img_height, img_width, img_channel = img.shape

    _, _, valid_inds_fov = get_lidar_in_image_fov(
        pc_velo[:, :3], calib, 0, 0, img_width, img_height, True)
    pc_velo = pc_velo[valid_inds_fov]

    # depth, width, height
    valid_inds = (pc_velo[:, 0] < 120) & \
                 (pc_velo[:, 0] >= 0) & \
                 (pc_velo[:, 1] < 50) & \
                 (pc_velo[:, 1] >= -50) & \
                 (pc_velo[:, 2] < 1.5) & \
                 (pc_velo[:, 2] >= -2.5)
    pc_velo = pc_velo[valid_inds]

    if sparse_type != "angular":
        print ("rectangular")
        return pto_rec_map(pc_velo, H = args.H, W = args.W, D = args.D)
    else:
        print("angular")
        return pto_ang_map(pc_velo, H = args.H, W = args.W, slice = args.slice)


def gen_sparse_points_all(args, idx_file, split):
    dataset_stereo = kitti_object(args.data_root+'/', split, point_style=args.point_style)
    with open(args.split+'/'+idx_file) as f:
        data_idx_list = [int(line.rstrip()) for line in f.readlines() if len(line.strip())>0 ]
    outputfolder = os.path.join(args.gen_path, args.point_style + '_sparse_')
    if args.sparse_type == "angular":
        outputfolder = outputfolder + 'angular_H' + str(args.H) + '_W' + str(args.W) + '_S' + str(args.slice)
    elif args.sparse_type == "rectangular":
        outputfolder = outputfolder + 'rectangular_H' + str(args.H) + '_W' + str(args.W) + '_D' + str(args.D)

    print (len(data_idx_list))

    if not osp.exists(outputfolder):
        os.makedirs(outputfolder)

    for data_idx in data_idx_list:
        print (data_idx)

        sparse_points = gen_sparse_points(dataset_stereo, data_idx, args.sparse_type)
        sparse_points = sparse_points.astype(np.float32)
        sparse_points.tofile(outputfolder + '/' + '%06d.bin'%(data_idx))


if __name__ == '__main__':
    parser = argparse.ArgumentParser("Generate sparse pseudo-LiDAR points")
    parser.add_argument('--data_root', default='/scratch/datasets/KITTI/object')
    parser.add_argument('--gen_path', default='/scratch/datasets/KITTI/object/training')
    parser.add_argument('--split', default='/scratch/datasets/KITTI/object/image_sets')
    # parser.add_argument('--gen_train', action='store_true')
    # parser.add_argument('--gen_val', action='store_true')
    parser.add_argument('--point_style', default='lidar', type=str)
    parser.add_argument('--slice', default=1, type=int)
    parser.add_argument('--H', default=64, type=int)
    parser.add_argument('--W', default=512, type=int)
    parser.add_argument('--D', default=700, type=int)
    parser.add_argument('--test', default=False, action='store_true')
    parser.add_argument('--sparse_type', default="angular", choices=["angular", "rectangular"], type=str)
    args = parser.parse_args()

    if args.test:
        gen_sparse_points_all(args, 'test.txt', 'testing')
    
    else:
        #if args.gen_train:
        gen_sparse_points_all(args, 'train.txt', 'training')

        # if args.gen_val:
        gen_sparse_points_all(args, 'val.txt', 'training')

