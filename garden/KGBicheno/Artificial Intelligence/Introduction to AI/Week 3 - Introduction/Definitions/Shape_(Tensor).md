### shape (Tensor)

Go back to the [[AI Glossary]]


The number of elements in each dimension of a tensor. The shape is represented as a list of integers. For example, the following two-dimensional tensor has a shape of [3,4]:

[[5, 7, 6, 4],
 [2, 9, 4, 8],
[3, 6, 5, 1]]

TensorFlow uses row-major (C-style) format to represent the order of dimensions, which is why the shape in TensorFlow is [3,4] rather than [4,3]. In other words, in a two-dimensional TensorFlow Tensor, the shape is [number of rows, number of columns].

