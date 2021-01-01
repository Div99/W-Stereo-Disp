import os
import argparse
import numpy as np

parser = argparse.ArgumentParser(description='PSMNet')

parser.add_argument('--input_path', type=str, default='',
                    help='path to save the log and checkpoint')
parser.add_argument('--output_path', type=str, default='',
                    help='path to save the log and checkpoint')
args = parser.parse_args()
def main():


    input_path = args.input_path
    output_path = args.output_path
    if not os.path.isdir(output_path):
        os.makedirs(output_path)
    name_list = os.listdir(input_path+'/calib_cam_to_cam')
    for name in name_list:
        #cam to cam
        path = input_path + '/calib_cam_to_cam/' + name
        with open(path) as f:
            data = [x.strip().split(':') for x in f.readlines() if len(x.strip())>0][1:]
        data = dict(data)
        pinfo = [data['P_rect_00'], data['P_rect_01'], data['P_rect_02'], data['P_rect_03']]
        r0 = data['R_rect_00']

        #velo to cam
        path = input_path + '/calib_velo_to_cam/' + name
        with open(path) as f:
            data = [x.strip().split(':') for x in f.readlines() if len(x.strip())>0][1:]
        data = dict(data)
        R = data['R'].strip().split()
        T = data['T'].strip().split()
        velo_cam = R[:3]+T[:1]+R[3:6]+T[1:2]+R[6:]+T[2:]
        velo_cam = ' '.join(velo_cam)

        # imu to velo
        path = input_path + '/calib_imu_to_velo/' + name
        with open(path) as f:
            data = [x.strip().split(':') for x in f.readlines() if len(x.strip())>0][1:]
        data = dict(data)
        R = data['R'].strip().split()
        T = data['T'].strip().split()
        imu_velo = R[:3]+T[:1]+R[3:6]+T[1:2]+R[6:]+T[2:]
        imu_velo = ' '.join(imu_velo)

        text = ''
        for i, p in enumerate(pinfo):
            text += 'P{}: {}\n'.format(i, p.strip())
        text += 'R0_rect: {}\n'.format(r0.strip())
        text += 'Tr_velo_to_cam: {}\n'.format(velo_cam.strip())
        text += 'Tr_imu_to_velo: {}\n'.format(imu_velo.strip())
        with open(output_path+'/'+name, 'w') as f:
            f.write(text)






if __name__ == '__main__':
    main()