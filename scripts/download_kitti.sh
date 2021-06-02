#/bin/bash

# Set a base directory to download the dataset
BASE_DIR='/atlas/u/divgarg/datasets/'

KITTI_PATH="${BASE_DIR}/KITTI"
mkdir -p $KITTI_PATH
cd $KITTI_PATH

# Download KITTI Images (Use AWS CLI for fast downloads)
aws s3 sync s3://avg-kitti/ . --exclude '*' --include data_object_image_2.zip
aws s3 sync s3://avg-kitti/ . --exclude '*' --include data_object_image_3.zip
# Download KITTI lidar and calibration and 3D bounding box data
aws s3 sync s3://avg-kitti/ . --exclude '*' --include data_object_velodyne.zip
aws s3 sync s3://avg-kitti/ . --exclude '*' --include data_object_calib.zip
aws s3 sync s3://avg-kitti/ . --exclude '*' --include data_object_label_2.zip

# Uncompress dataset
unzip '*.zip'
