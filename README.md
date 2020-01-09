# Ainize-run-PointRend example

[![Run on Ainize](https://ainize.ai/static/images/run_on_ainize_button.svg)](https://ainize.web.app/redirect?git_repo=github.com/kmswlee/ainized-PointRend)

PointRend is image segmentation as rendering

the PointRend neural network module performs point-based segementation predictions at adaptively selected locations based on 
an iterative subvision algorithm.

PointRend achieves higher sharpness on tricky object boundaries such as fingers than Mask R-CNN, and can be added on both semantic and instance segmentation. 

so this project show intermediate results.
if you perform instance segmentation, 

PointRend is done in the following steps:
1. upload an image and mask image 
2. press the 'submit' button.
3. it is output as PointRend on image


# How to use
this is dockerized, it can be run using docker commands.

## Docker build
```
docker build -t pointrend .
```

## Docker run
```
docker run -d --rm -p 8080:8080 pointrend
```
Now the server is available at http://localhost:8080. 

## image examples

### input image
![mask](./tree_mask.jpg)
![img](./tree.jpg)

### result image
<img src="/output.jpg" width="500" />  

## References
* https://github.com/JamesQFreeman/PointRend
* https://arxiv.org/pdf/1912.08193.pdf
