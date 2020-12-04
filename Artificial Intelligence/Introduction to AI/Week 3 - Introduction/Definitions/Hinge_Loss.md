### hinge loss

Go back to the [[AI Glossary]]


A family of loss functions for classification designed to find the decision boundary as distant as possible from each training example, thus maximizing the margin between examples and the boundary. KSVMs use hinge loss (or a related function, such as squared hinge loss). For binary classification, the hinge loss function is defined as follows:

$$ loss = max(0,1 -(y*y^1))
$$

where y is the true label, either -1 or +1, and y' is the raw output of the classifier model:

$$ Y^1 = b + w_1 x_1 + w_2 x_2 + ... w_n x_n
$$

Consequently, a plot of hinge loss vs. (y * y') looks as follows:

![A graphic representation of a hinge loss plot](https://i.imgur.com/X8i8fsn.png)



