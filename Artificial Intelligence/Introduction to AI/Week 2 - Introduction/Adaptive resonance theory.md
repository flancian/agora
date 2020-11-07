# Adaptive resonance theory

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Adaptive resonance theory (ART) is a family of algorithms that provide pattern recognition and prediction capabilities. You can divide ART along unsupervised and supervised models, but I focus here on the unsupervised side. ART is a self-organizing neural network architecture. The approach allows learning new mappings while maintaining existing knowledge.

Like k-means, you can use ART1 for clustering, but it has a key advantage in that rather than defining k at runtime, ART1 can alter the number of clusters based on the data.

## Instructions for psuedo-code time!

ART1 includes three key features: a comparison field (used to determine how a new feature vector fits within the existing categories), a recognition field (contains neurons that represent the active clusters), and a reset module. 

When the input vector is applied, the comparison field identifies the cluster in which it most closely fits.

If the input vector matches in the recognition field above a vigilance parameter, then the connections to the neuron in the recognition field are updated to account for this new vector. 

Otherwise, a new neuron is created in the recognition field to account for a new cluster. When a new neuron is created, the existing neuron weights are not updated, allowing them to retain the existing knowledge. 

All examples of the data set are applied in this way until no example input vector changes cluster. At this point, training is complete.

![It looks like this](https://i.imgur.com/v8m25V3.png)

ART includes several algorithms that support binary input vectors or real-valued vectors (ART2). Predictive ART is a variation of ART1/2 but relies on supervised training.