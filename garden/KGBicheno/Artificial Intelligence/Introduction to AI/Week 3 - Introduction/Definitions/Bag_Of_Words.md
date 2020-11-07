### bag of words

Go back to the [[AI Glossary]]


A representation of the words in a phrase or passage, irrespective of order. For example, bag of words represents the following three phrases identically:

    the dog jumps
    jumps the dog
    dog jumps the

Each word is mapped to an index in a sparse vector, where the vector has an index for every word in the vocabulary. For example, the phrase the dog jumps is mapped into a feature vector with non-zero values at the three indices corresponding to the words the, dog, and jumps. The non-zero value can be any of the following:

    A 1 to indicate the presence of a word.
    A count of the number of times a word appears in the bag. For example, if the phrase were the maroon dog is a dog with maroon fur, then both maroon and dog would be represented as 2, while the other words would be represented as 1.
    Some other value, such as the logarithm of the count of the number of times a word appears in the bag.

