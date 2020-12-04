# Unsupervised Learning

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

This is where you allow the algorithm to parse unlabled data and it will find patterns and clusters in the data, labelling it based on similarities, closeness, etc. Data science techniques can then be applied to make meaning of these results. 

An example of this would be to find baseline and malicious traffic in network traffic.

## Notes on lack of a critic

While the definition and many use-cases lack a critic, and therefore no way to measure performance, it is more likely that the results will be interrogated (usefulness of clustering, efficacy of the recommendation engine) and the model tweaked from there. 

![A basic graphical representation of unsupervised learning](https://i.imgur.com/UP6L6QJ.png)

You can implement unsupervised learning by using a variety of algorithms, such as 
- [[k-means clustering]] or 
- [[Adaptive resonance theory]], or ART (a family of algorithms that implement unsupervised clustering of a data set)

#ToDo you probably have enough information to code these. You'll need to research them more, but even just the psuedo-code in the k-means clustering could be updated to better match a neuron approach, maybe. At the very least you've got enough to code it properly.