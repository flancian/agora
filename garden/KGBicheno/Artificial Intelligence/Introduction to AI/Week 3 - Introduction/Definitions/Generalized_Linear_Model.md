### generalized linear model

Go back to the [[AI Glossary]]


A generalization of least squares regression models, which are based on Gaussian noise, to other types of models based on other types of noise, such as Poisson noise or categorical noise. Examples of generalized linear models include:

    logistic regression
    multi-class regression
    least squares regression

The parameters of a generalized linear model can be found through convex optimization.

Generalized linear models exhibit the following properties:

    The average prediction of the optimal least squares regression model is equal to the average label on the training data.
    The average probability predicted by the optimal logistic regression model is equal to the average label on the training data.

The power of a generalized linear model is limited by its features. Unlike a deep model, a generalized linear model cannot "learn new features."

