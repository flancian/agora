### optimizer

Go back to the [[AI Glossary]]


A specific implementation of the gradient descent algorithm. TensorFlow's base class for optimizers is tf.train.Optimizer. Popular optimizers include:

    AdaGrad, which stands for ADAptive GRADient descent.
    Adam, which stands for ADAptive with Momentum.

Different optimizers may leverage one or more of the following concepts to enhance the effectiveness of gradient descent on a given training set:

    momentum (Momentum)
    update frequency
    sparsity/regularization (Ftrl)
    more complex math (Proximal, and others)

You might even imagine an NN-driven optimizer.

