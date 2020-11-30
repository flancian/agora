# Python and OpenCV

Go back to the [[Computer Vision Week 3 Main File]]

## What is OpenCV?

Open Source Computer Vision Library: A Python library used for everything from basic image processing to Tensor Flow Computer Vision.

## Uses

 - Basic image processing
	 - Crop
	 - Adjust
	 - Rotate
	 - Denoise
	 - Skew
 - Computer Vision
 - Edge detection
 - Background subtraction
	 - Static background vs moving foreground
 - Colour Quantization
	 - Reduces unique colours using K-Means clustering
 - Fixing exposure
	 - Uses histograms of all the pixels in the image
	 - 0 completely black pixels
	 - 255 completely white pixels
	 - Poorly exposed/contrasted images statistically ironed out

### Canny Edge Detection

Canny Edge Detection is an algorithm used to detect edges in an image, and was developed by John F. Canny in 1986.