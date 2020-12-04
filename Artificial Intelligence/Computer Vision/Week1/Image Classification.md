# Image Classification

See the [[Computer Vision Week 1 Main File]] or the [[Main AI Page]]

Like a human describing an image, Computer Vision Image Classification takes an image and lists objects/identifiers the used model can perceive in the image, labelling them, and usually along with a percentage representing how certain it is that the image contains those labels.

## Confidence Scores

These percentages are called **confidence scores** and represent how confident that the image contains the label. They are expressed as two-decimal numbers in the range of 0.00 to 1.00.

These scores are generated using a sigmoid normalisation function, so 1.00 is *more than* two times the confidence of 0.50

## Breadth Vs Depth

A classifier that is good at classifying a wide range of general classifiers, is said to have more breadth than depth.

A classifier that is good at classifying specific domains of images with a great deal of specificy has more depth than breadth.
