# Recurrent neural networks

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Part of the page on [[Neural Networks]]

Recurrent neural networks or RNNs, are recurrent because they perform the same task for every element of a sequence, with prior outputs feeding subsequent stage inputs.

![A graphical representation of a Recurrent neural network](https://i.imgur.com/EpuPhlq.png)

In a general neural network, an input is processed through a number of layers and an output is produced with an assumption that the two successive inputs are independent of each other, but that may not hold true in certain scenarios. For example, when we need to consider the context in which a word has been spoken, in such scenarios, dependence on previous  observations has to be considered to produce the output.

RNNs can make use of information in long sequences, each layer of the network representing the observation at a certain time. 