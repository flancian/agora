### clipping

Go back to the [[AI Glossary]]


A technique for handling outliers. Specifically, reducing feature values that are greater than a set maximum value down to that maximum value. Also, increasing feature values that are less than a specific minimum value up to that minimum value.

For example, suppose that only a few feature values fall outside the range 40–60. In this case, you could do the following:

    Clip all values over 60 to be exactly 60.
    Clip all values under 40 to be exactly 40.

In addition to bringing input values within a designated range, clipping can also used to force gradient values within a designated range during training.

