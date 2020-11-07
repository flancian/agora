### Layers API (tf.layers)

Go back to the [[AI Glossary]]

#TensorFlow

A TensorFlow API for constructing a deep neural network as a composition of layers. The Layers API enables you to build different types of layers, such as:

    tf.layers.Dense for a fully-connected layer.
    tf.layers.Conv2D for a convolutional layer.

When writing a custom Estimator, you compose Layers objects to define the characteristics of all the hidden layers.

The Layers API follows the Keras layers API conventions. That is, aside from a different prefix, all functions in the Layers API have the same names and signatures as their counterparts in the Keras layers API.

