### k-means

Go back to the [[AI Glossary]]

#clustering

A popular clustering algorithm that groups examples in unsupervised learning. The k-means algorithm basically does the following:

- Iteratively determines the best k center points (known as centroids).
- Assigns each example to the closest centroid. 
- Those examples nearest the same centroid belong to the same group.

The k-means algorithm picks centroid locations to minimize the cumulative square of the distances from each example to its closest centroid.

For example, consider the following plot of dog height to dog width:

![A scatter plot](https://i.imgur.com/H9J1veA.png)

If k=3, the k-means algorithm will determine three centroids. Each example is assigned to its closest centroid, yielding three groups:

![A k-means cluster plot with centroids](https://i.imgur.com/mVperul.png)

Imagine that a manufacturer wants to determine the ideal sizes for small, medium, and large sweaters for dogs. The three centroids identify the mean height and mean width of each dog in that cluster. So, the manufacturer should probably base sweater sizes on those three centroids. Note that the centroid of a cluster is typically not an example in the cluster.

The preceding illustrations shows k-means for examples with only two features (height and width). Note that k-means can group examples across many features.

