### linear model

Go back to the [[AI Glossary]]


A model that assigns one weight per feature to make predictions. (Linear models also incorporate a bias.) By contrast, the relationship of weights to features in deep models is not one-to-one.

A linear model uses the following formula:

$$ y^1 = b + w_1 x_1 + w_2 x_2 + \ldots w_n x_n
$$

where:
`y^1` is the raw prediction. (In certain kinds of linear models, this raw prediction will be further modified. For example, see logistic regression.)
`b` is the bias.
`w` is a weight, so `w_1` is the weight of the first feature, `w_2` is the weight of the second feature, and so on.
`x` is a feature, so `x_1` is the value of the first feature, `x_2` is the value of the second feature, and so on.

For example, suppose a linear model for three features learns the following bias and weights:


$$b = 7
$$
$$w_1 = -2.5
$$
$$w_2 = -1.2
$$
$$w_3 = 1.4
$$

Therefore, given three features:

$$w_1
$$
$$w_2
$$
$$w_3
$$


the linear model uses the following equation to generate each prediction:

$$ y^1 = 7 + (-2.5)(x_1) + (-1.2)(x_2) + (1.4)(x_3)
$$

Suppose a particular example contains the following values:

$$x_1 = 4
$$
$$x_2 = -10
$$
$$X_3 = 5
$$
Plugging those values into the formula yields a prediction for this example:

$$ y^1 = 7 + (-2.5) (4) + (-1.2) (-10) + (1.4)(5)
$$
$$y^1 = 16
$$

Linear models tend to be easier to analyze and train than deep models. However, deep models can model complex relationships between features.

Linear regression and logistic regression are two types of linear models. Linear models include not only models that use the linear equation but also a broader set of models that use the linear equation as part of the formula. For example, logistic regression post-processes the raw prediction `y^1` to calculate the prediction.

