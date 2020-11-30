# Image processing with OpenCV (Code)

Go back to the [[Computer Vision Week 3 Main File]]

## Download an image to disk

```python
# 1.1. Download an image of your choosing and display it

import urllib.request

kgb_and_mum_url = "https://i.imgur.com/zf1VBBC.jpg"
kgb_and_mum_filename = "kgb_and_mum.jpg"


urllib.request.urlretrieve(kgb_and_mum_url, kgb_and_mum_filename)
```

## Display an image in a Jupyter Lab

```python
from matplotlib import pyplot as plt
%matplotlib inline

kgb_and_mum = cv2.imread(kgb_and_mum_filename)

plt.imshow(kgb_and_mum)
```

## Correct a BGR image to RGB

```python
img_corrected = cv2.cvtColor(kgb_and_mum, cv2.COLOR_BGR2RGB)

plt.imshow(img_corrected)
```

## Convert the image to greyscale and display it

```python
# 1.2. Convert the image to grayscale and display it

kgb_and_mum = cv2.imread(kgb_and_mum_filename)

gray_kgb_and_mum = cv2.cvtColor(kgb_and_mum, cv2.COLOR_BGR2GRAY)

plt.imshow(gray_kgb_and_mum, cmap = 'gray')
plt.axis("off") #remove axes ticks
plt.title('Grayscale Image')
```

## Display the Canny Edge map of the image

```python
rcParams['figure.figsize'] = 10, 12

# play around with the threshold values to get the most accurate edges

edges = cv2.Canny(img_corrected, 
                  threshold1=100, 
                  threshold2=200)

plt.imshow(edges,cmap = 'gray')
plt.title('Edge Image'), plt.xticks([]), plt.yticks([])
```

## Display a histogram of the greyscale colours

```python
# 2.1. Using your grayscale image from Exercise 1, display its grayscale histogram  

rcParams['figure.figsize'] = 8,4

plt.hist(gray_kgb_and_mum.ravel(),256,[0,256])
plt.title('Histogram of Grayscale kgb_and_mum.jpg')
plt.show()
```

It should look something like this:

![Histogram of a greyscale image](https://i.imgur.com/duuXDs2.png)

## Display a histogram of RGB colours

```python
# 2.2. Using your color image from Exercise 1, display its color histogram  

rcParams['figure.figsize'] = 8, 4

color = ('b','g','r')
for i,col in enumerate(color):
    histr = cv2.calcHist([kgb_and_mum],[i],None,[256],[0,256])
    plt.plot(histr,color = col)
    plt.xlim([0,256])
plt.show()
```

It should look something like this:

![Histogram of an RGB image](https://i.imgur.com/NRCZ1oo.png)