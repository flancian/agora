# Object Detection with Haar Classifiers

Go back to the [[Computer Vision Week 3 Main File]]

Uses cascade classifiers.

Classifier: An algorithm that detects if an image contains an image of certain objects.

## Haar Features

A set of features used in a cascade to determine if the type of object we're looking for in an image is indeed there.

They're essentially hyper-basic shapes that, when found close to each other and in the same image, mean it is likely that the object exists. 

For example, edge features, represented by a simple pair of rectangles of opposite colour, when combined with a line feature of three rectangles with the middle one oppositely coloured to the outer two, and combined with four-rectangle features, where diagonal squares are same-coloured but opposite to their horizontal/vertical neighbours, could represent, in order:

 - The sides of a car
 - The bumper with a number-plate in the middle, and
 - A set of headlights with a bumber to the side and wheel and undercarriage beneath them.

Taken in isolation, when an image is reduced in quality so far for these features to exist, they mean very little. When found together, however, and enough of them exist, they represent a fast way for a computer to detect a certain type of object.

![Haar features used to identify cars](https://i.imgur.com/TSntluw.png)

## Concepts involved in Haar classifiers' speed

The rapid and high detection rate could be as a result of: 

 - The Integral image concept. 
 - The use of an AdaBoost. 
 - Cascades of classifiers

#ToDo Ensure these three are in, or added to, the AI glossary

### The integral image concept

Transform the image so that each pixel represents the cumulative sum of of the corresponding input pixels above and to the left of that pixel. This simplifies the image into basic shapes for feature detection. 

![A graphic depiction of the integral image concept](https://i.imgur.com/KV4w14a.png)

### The use of an AdaBoost

Basically this is using a statistical weight to strengthen the prominance of difficult-to-detect features, improving the accuracy of the detection. Because this merges similar aspects of the image together more frequently, the 180,000 features found by the integral image concept alone is reduced to only 6000 features, greatly speeding-up the process of classification.

### Cascades of classifiers

Splits the image up into small sections and applies the feature classifiers (masks as per the graphic above) and disregards any section of the image that doesn't include the features in the set of those we know to be present in the object-image we are looking for.

![An example of an classifier cascade](https://i.imgur.com/d1OcxAZ.png)