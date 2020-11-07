### k-median

Go back to the [[AI Glossary]]

#clustering

A clustering algorithm closely related to k-means. The practical difference between the two is as follows:

- In k-means, centroids are determined by minimizing the sum of the squares of the distance between a centroid candidate and each of its examples.
- In k-median, centroids are determined by minimizing the sum of the distance between a centroid candidate and each of its examples.

Note that the definitions of distance are also different:

- k-means relies on the Euclidean distance from the centroid to an example. (In two dimensions, the Euclidean distance means using the Pythagorean theorem to calculate the hypotenuse.) For example, the k-means distance between (2,2) and (5,-2) would be:

$$ \text{Euclidian  distance} = \sqrt{(2 -5)^2 + (2 - -2)^2} = 5
$$

  - k-median relies on the Manhattan distance from the centroid to an example. This distance is the sum of the absolute deltas in each dimension. For example, the k-median distance between (2,2) and (5,-2) would be:

$$ \text{Manhattan distance} = |2 - 5| + |2 - 2| = 7
$$

## L

