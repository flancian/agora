### depthwise separable convolutional neural network (sepCNN)

Go back to the [[AI Glossary]]

#image

A convolutional neural network architecture based on Inception, but where Inception modules are replaced with depthwise separable convolutions. Also known as Xception.

A depthwise separable convolution (also abbreviated as separable convolution) factors a standard 3-D convolution into two separate convolution operations that are more computationally efficient: first, a depthwise convolution, with a depth of 1 (n ✕ n ✕ 1), and then second, a pointwise convolution, with length and width of 1 (1 ✕ 1 ✕ n).

To learn more, see Xception: Deep Learning with Depthwise Separable Convolutions.

