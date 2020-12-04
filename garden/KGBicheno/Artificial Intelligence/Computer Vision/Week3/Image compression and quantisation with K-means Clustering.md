# Image compression and quantisation with K-means Clustering

Go back to the [[Computer Vision Week 3 Main File]]

Images can be compressed by applying K-means Clustering to the colour pallete and reducing the number of unique colours per RGB channel from 256 to 8 (or some other arbitrary number define by K).

## K-means Clustering

![A graphic represntation of K-means Clustering](https://i.imgur.com/6EWhXkN.png)

	To perform K Means clustering we have the following steps:
	Initially choose K points amongst the given set of data points. These K points represent the centroids of the K clusters
	Next, assign each data point to the cluster whose center is nearest to it
	New centroids are calculated for each of the K clusters based upon the data points that are assigned in that cluster

	Step 2 and 3 are repeated until the centroids stop moving or the defined number of iterations are completed.

	For our use case of image compression, our data points are the pixels in our image, and we are trying to group pixels of similar color in K clusters (for e.g. K = 8 clusters) i.e. 8 different colors. Thus, instead of each pixel originally representing 256 x 256 x 256 colors, each pixel can now only represent 8 possible colors. Therefore, each pixel now only requires 3 bits of memory for storage (since 2^3 = 8) instead of the original 24 bits. This technique of breaking all possible colors of the RGB color space over K colors is called Color Quantization.

	The K centroids of the clusters are representative of the three dimensional RGB color space and would replace the colors of all points in their cluster and thus the image will only have K colors in it.

Taken from the [Coursera IBM Quantisation Lab](https://jupyterlab-14.labs.cognitiveclass.ai/hub/user-redirect/lab/tree/labs/CV0101EN/Image_Compression_using_OpenCV.ipynb)

## Code

### Imports

```python
import urllib.request
import cv2
import os
import math
import matplotlib.pyplot as plt
%matplotlib inline # if using in a Jupyter notebook, otherwise, leave it out.
from sklearn.cluster import KMeans
import numpy as np
```

### Download the image and work out its size

```python
fish_image_url = "http://s3-api.us-geo.objectstorage.softlayer.net/cf-courses-data/CognitiveClass/CV0101/Dataset/fish.png"
urllib.request.urlretrieve(fish_image_url, "fish.png") # downloads file as "fish.png"
im2 = cv2.imread("fish.png")
fish_im_corrected = cv2.cvtColor(im2, cv2.COLOR_BGR2RGB)
plt.axis('off')
plt.imshow(fish_im_corrected)
print("Original size of fish image is: {} Kilo Bytes".format(str(math.ceil((os.stat('fish.png').st_size)/1000))))
```

Prints: "Original size of fish image is: 865 Kilo Bytes"

![And this image](https://i.imgur.com/VRTYPvn.png)

### Perform K-means Clustering on the image

```python
#Extracting num_rows and num_cols from fish image


num_rows_fish = im2.shape[0]
num_cols_fish = im2.shape[1]
transform_fish_image_for_KMeans = im2.reshape(num_rows_fish * num_cols_fish, 3)


#Perform KMeans to compress fish image here, feel free to choose
#any value for K, (i.e. K < 256) for compressing the image size. Use the value
#of K to fill the value of n_clusters


kmeans_fish = KMeans(n_clusters=8)
kmeans_fish.fit(transform_fish_image_for_KMeans)
cluster_centroids_fish = np.asarray(kmeans_fish.cluster_centers_,dtype=np.uint8) 


#labels represent the label of each pixel and which cluster it belongs to


labels_fish = np.asarray(kmeans_fish.labels_, dtype=np.uint8 )  
labels_fish = labels_fish.reshape(num_rows_fish, num_cols_fish)
   

compressed_image_fish = np.ones((num_rows_fish, num_cols_fish, 3), dtype=np.uint8)
for r in range(num_rows_fish):
    for c in range(num_cols_fish):
        compressed_image_fish[r, c, :] = cluster_centroids_fish[labels_fish[r, c], :]
cv2.imwrite("compressed_fish.png", compressed_image_fish)
compressed_fish_im = cv2.imread('compressed_fish.png')
compressed_fish_im_corrected = cv2.cvtColor(compressed_fish_im, cv2.COLOR_BGR2RGB)
plt.axis('off')
plt.imshow(compressed_fish_im_corrected) 
print("Compressed size of fish image is: {} Kilo Bytes".format(str(math.ceil((os.stat('compressed_fish.png').st_size)/1000))))
```

Prints: "Compressed size of fish image is: 98 Kilo Bytes"

![This is the new image](https://i.imgur.com/fn8v6iF.png)