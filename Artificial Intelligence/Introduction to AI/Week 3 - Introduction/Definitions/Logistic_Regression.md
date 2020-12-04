### logistic regression

Go back to the [[AI Glossary]]


A classification model that uses a sigmoid function to convert a linear model's raw prediction (

) into a value between 0 and 1. You can interpret the value between 0 and 1 in either of the following two ways:

    As a probability that the example belongs to the positive class in a binary classification problem.
    As a value to be compared against a classification threshold. If the value is equal to or above the classification threshold, the system classifies the example as the positive class. Conversely, if the value is below the given threshold, the system classifies the example as the negative class. For example, suppose the classification threshold is 0.82:
        Imagine an example that produces a raw prediction `y^1` of 2.6. The sigmoid of 2.6 is 0.93. Since 0.93 is greater than 0.82, the system classifies this example as the positive class.
        Imagine a different example that produces a raw prediction of 1.3. The sigmoid of 1.3 is 0.79. Since 0.79 is less than 0.82, the system classifies that example as the negative class.

Although logistic regression is often used in binary classification problems, logistic regression can also be used in multi-class classification problems (where it becomes called multi-class logistic regression or multinomial regression).

