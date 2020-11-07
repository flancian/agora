# Back-propagation

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Part of the page on [[Neural Networks]]

Back-propagation gets its name from its process: the backward propagation of errors within a network.

Back-propagation uses a set of training data that match known inputs to desired outputs.

First, the inputs are plugged into the network and outputs are determined.

Then, an error function determines how far the given output is from the desired output.

Finally, adjustments are made in order to reduce errors. 

	One of the most popular supervised learning methods for neural networks is called back-propagation. In back-propagation, you apply an input vector and compute the output vector. The error is computed (actual vs. desired), then back-propagated to adjust the weights and biases starting from the output layer to the input layer (as a function of their contribution to the output, adjusting for a learning rate). 
	
## Process

[Taken from the Deep dive into Deep Learning.](https://developer.ibm.com/articles/cc-cognitive-neural-networks-deep-dive/?mhq=neural%20networks&mhsrc=ibmsearch_a)
	
	Calculate the error of the output nodes. Each is calculated independently based on its error (from desired output) and the derivative of the sigmoid function. The error of the hidden layer neurons is then calculated based on their contribution to the output error. The last two parts are then to apply the errors to the output and hidden layers, with a learning rate to minimize the overall change and allow it to be tuned over some number of iterations.

	This process implements gradient descent search, as the error is minimized in the neuron outputs (the gradient shows the largest rate of increase of the error, so I move in the opposite direction of the gradient).