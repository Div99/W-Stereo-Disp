import numpy as np
import torch
import kitti_util


def roty(t):
    ''' Rotation about the y-axis. '''
    c = np.cos(t)
    s = np.sin(t)
    return np.array([[c,  0,  s],
                     [0,  1,  0],
                     [-s, 0,  c]])


def Fusion(depth_map, calib, t):
        high, width = depth_map.shape
        u = torch.arange(width)
        v = torch.arange(high)
        index = torch.stack(torch.meshgrid(u, v)).permute((2, 1, 0)).numpy()
        depth_index = np.concatenate([index, depth_map[:, :, None]], axis=-1)
        depth_index = depth_index.reshape(-1, 3)
        xyz = calib.project_image_to_rect(depth_index)
        mask = xyz[:, 2] > 0
        xyz_mask = xyz[mask]
        xyz_mask = roty(t).dot(xyz_mask.T).T
        print(xyz_mask.shape)

        depth_index_mask = depth_index[mask]
        mask1 = (xyz_mask[:, 0] >= -40) * (xyz_mask[:, 0] < 40) * (xyz_mask[:, 2] >= 0) * (xyz_mask[:, 2] < 68.8) * (xyz_mask[:,1] >=-1) * (xyz_mask[:,1] < 2.5)
        xyz_mask1 = xyz_mask[mask1]
        depth_index_mask1 = depth_index_mask[mask1]
        xyz_index = np.zeros((depth_index_mask1.shape[0], 5))
        xyz_index[:,:3] = xyz_mask1
        xyz_index[:,3:] = depth_index_mask1[:,:2]
        # xyz_index = sorted(xyz_index.tolist(), key=lambda x: x[1])
        xyz_index = np.array(xyz_index)


        xz_mask1 = xyz_index[:,(0,2)]
        xz_mask1[:, 0] += 40
        xz_mask1_quant = np.floor(xz_mask1 * 10).astype(int)
        return torch.from_numpy(xyz_index[:,3:]).long(), torch.from_numpy(xz_mask1_quant).long()

