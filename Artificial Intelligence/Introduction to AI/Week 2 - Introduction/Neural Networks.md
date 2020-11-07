# Neural Networks

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Learn through a process called [[Back-propagation]]

A collection of neurons is called a layer. A layer takes an input and gives an output.

Any neural network will have one input layer and one output layer. A neural network with more than one hidden layer is called a deep network. 

## How they work

![A graphical representation of how a neural network functions](https://i.imgur.com/0B9RYsp.png)

A neural network processes an input vector to a resulting output vector through a model inspired by neurons and their connectivity in the brain. 

The model consists of layers of neurons interconnected through weights that alter the importance of certain inputs over others. 

Each neuron includes an activation function that determines the output of the neuron (as a function of its input vector multiplied by its weight vector). 

The output is computed by applying the input vector to the input layer of the network, then computing the outputs of each neuron through the network (in a feed-forward fashion).

### A modern perceptron

The following perceptron takes two inputs **[i0, i1]**, modified by their own weights **[w0, w1]** and the target neuron's bias **[w2]** and are then passed through an activation function, in this case a step function **[1]**, a step function saying **if input >= 1, output == 1, else output == 0**.

![Here's a graphical representation of that perceptron](https://i.imgur.com/RF3U6NT.png)

See [[Perceptron Learning]] for more information on training a neural network.