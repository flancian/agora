### convolutional operation

Go back to the [[AI Glossary]]

#image

The following two-step mathematical operation:

    Element-wise multiplication of the convolutional filter and a slice of an input matrix. (The slice of the input matrix has the same rank and size as the convolutional filter.)
    Summation of all the values in the resulting product matrix.

For example, consider the following 5x5 input matrix:

![A 5x5 convolutional matrix](https://i.imgur.com/t2TGClZ.png)

Now imagine the following 2x2 convolutional filter:

![A 2x2 convolutional filter](https://i.imgur.com/p5QqFsW.png)

Each convolutional operation involves a single 2x2 slice of the input matrix. For instance, suppose we use the 2x2 slice at the top-left of the input matrix. So, the convolution operation on this slice looks as follows:

![A single convolutional operation](https://i.imgur.com/NbFA1qC.png)

A convolutional layer consists of a series of convolutional operations, each acting on a different slice of the input matrix.

