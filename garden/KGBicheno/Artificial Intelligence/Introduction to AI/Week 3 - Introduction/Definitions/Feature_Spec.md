### feature spec

Go back to the [[AI Glossary]]

#TensorFlow

Describes the information required to extract features data from the tf.Example protocol buffer. Because the tf.Example protocol buffer is just a container for data, you must specify the following:

    the data to extract (that is, the keys for the features)
    the data type (for example, float or int)
    The length (fixed or variable)

The Estimator API provides facilities for producing a feature spec from a list of FeatureColumns.

