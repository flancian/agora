### intersection over union (IoU)

Go back to the [[AI Glossary]]

#image

The intersection of two sets divided by their union. In machine-learning image-detection tasks, IoU is used to measure the accuracy of the model’s predicted bounding box with respect to the ground-truth bounding box. In this case, the IoU for the two boxes is the ratio between the overlapping area and the total area, and its value ranges from 0 (no overlap of predicted bounding box and ground-truth bounding box) to 1 (predicted bounding box and ground-truth bounding box have the exact same coordinates).

For example, in the image below:

- The predicted bounding box (the coordinates delimiting where the model predicts the night table in the painting is located) is outlined in purple.
- The ground-truth bounding box (the coordinates delimiting where the night table in the painting is actually located) is outlined in green.

![A graphic representation of IoU in image recognition](https://i.imgur.com/l7i21Fg.png)

The Van Gogh painting 'Vincent's Bedroom in Arles', with two different bounding boxes around the night table beside the bed. The ground-truth bounding box (in green) perfectly circumscribes the night table. The predicted bounding box (in purple) is offset 50% down and to the right of the ground-truth bounding box; it encloses the bottom-right quarter of the night table, but misses the rest of the table.

Here, the intersection of the bounding boxes for prediction and ground truth (below left) is 1, and the union of the bounding boxes for prediction and ground truth (below right) is 7, so the IoU is 1 over 7.

![Intersection vs Union](https://i.imgur.com/opSC29z.png)

Same image as above, but with each bounding box divided into four quadrants. There are seven quadrants total, as the bottom-right quadrant of the ground-truth bounding box and the top-left quadrant of the predicted bounding box overlap each other. This overlapping section (highlighted in green) represents the intersection, and has an area of 1. Same image as above, but with each bounding box divided into four quadrants. There are seven quadrants total, as the bottom-right quadrant of the ground-truth bounding box and the top-left quadrant of the predicted bounding box overlap each other. The entire interior enclosed by both bounding boxes (highlighted in green) represents the union, and has an area of 7.

