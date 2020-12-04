# Two-Dimensional Numpy

Go to the [[Python Week 4 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

## Basic 2-dimensional matrix representation

Numpy arrays can be N-Dimensional, and are represented as matrices instead of nested lists.

![A graphic representation of a numpy matrix](https://i.imgur.com/VfvnoVS.png)

```python
a = [[11,12,13],[21,22,23],[31,32,33]]

A = np.array(a)
```

$$
A: 
\begin{bmatrix}
	11 & 12 & 13 \\
	21 & 22 & 23 \\
	31 & 32 & 33 \\
\end{bmatrix}
$$

`A.ndim: 2` because the depth of list nesting, or the dimensionality of the array, is two levels or ranks, so

`A.shape` returns a tuple `(3,3)` representing a first rank of 3 elements and a second rank of 3 elements forming the 'shape' of the matrix.

`A.size: 9` represents the total number of elements in the matrix, shorthanded by multiplying the elements returned in the `shape` tuple.

### Matrix axis labelling

By convention, in rectangular notation, the vertical axis is axis 0, while the horizontal is axis 1. This corresponds to the nesting depth being axes 0 and the element depth being axis 1. Were a third dimension to be added, axis 2 would represent the element complexity.

![A graphic showing how to label the axes of a 2-dimensional matrix](https://i.imgur.com/vi9Pfi1.png)

## Slicing in N-Dimensional arrays

This is fairly easy conceptually and syntactically. 

The comma tells you which dimension you're slicing into with the colon. So let's take the matrix from before.

$$
A: 
\begin{bmatrix}
	11 & 12 & 13 \\
	21 & 22 & 23 \\
	31 & 32 & 33 \\
\end{bmatrix}
$$

Let's slice it up a bit.

$$
A[0:2,1]: 
\begin{bmatrix}
	11 & [12] & 13 \\
	21 & [22] & 23 \\
	31 & 32 & 33 \\
\end{bmatrix}
\quad
 A[1,1:2]: 
\begin{bmatrix}
	11 & 12 & 13 \\
	21 & [22 & 23] \\
	31 & 32 & 33 \\
\end{bmatrix}
\quad
 A[0:2,0:2]: 
\begin{bmatrix}
	[11 & 12] & 13 \\
	[21 & 22] & 23 \\
	31 & 32 & 33 \\
\end{bmatrix}
$$

## Matrix operations

### Addition

$$
X = 
\begin{bmatrix}
	1 & 0  \\
	0 & 1 \\
\end{bmatrix}
\quad
Y = 
\begin{bmatrix}
	2 & 1  \\
	1 & 2 \\
\end{bmatrix}
$$
$$
X+Y=
\begin{bmatrix}
	1+2 & 1+1  \\
	0+1 & 1+2 \\
\end{bmatrix}
=
\begin{bmatrix}
	3 & 2  \\
	1 & 3 \\
\end{bmatrix}
$$

```python
X = np.array([1,0],[0,1])
Y = np.array([2,1],[1,2])
Z = X + Y
Z: ([3,2],[1,3])
```

### Multiplication (Hadamar product)

Note: This only works for identically-shaped matrices. See below for the rules on multiplication of matrices.

$$
X = 
\begin{bmatrix}
	1 & 0  \\
	0 & 1 \\
\end{bmatrix}
\quad
Y = 
\begin{bmatrix}
	2 & 1  \\
	1 & 2 \\
\end{bmatrix}
$$
$$
X \circ Y=
\begin{bmatrix}
	(1)2 & (1)1  \\
	(0)1 & (1)2 \\
\end{bmatrix}
=
\begin{bmatrix}
	2 & 1  \\
	0 & 2 \\
\end{bmatrix}
$$

```python
X = np.array([1,0],[0,1])
Y = np.array([2,1],[1,2])
Z = X * Y
Z: ([2,1],[0,2])
```

## Adding and Multiplying by scalars

### Addition

$$
Y = 
\begin{bmatrix}
	2 & 1  \\
	1 & 2 \\
\end{bmatrix}
\quad
2+Y = 
\begin{bmatrix}
	2+2 & 2+1  \\
	2+1 & 2+2 \\
\end{bmatrix}
=
\begin{bmatrix}
	4 & 3  \\
	3 & 4 \\
\end{bmatrix}
$$

```python
Y = np.array([2,1],[1,2])
Z = 2 + Y
Z: ([4,3],[3,4])
```

### Multiplication

$$
Y = 
\begin{bmatrix}
	2 & 1  \\
	1 & 2 \\
\end{bmatrix}
\quad
2Y = 
\begin{bmatrix}
	2*2 & 2*1  \\
	2*1 & 2*2 \\
\end{bmatrix}
=
\begin{bmatrix}
	4 & 2  \\
	2 & 4 \\
\end{bmatrix}
$$

```python
Y = np.array([2,1],[1,2])
Z = 2Y
Z: ([4,2],[2,4])
```

## Matrix Multiplication

When the shape of two matrices is different, **one must have the same number of columns as the other has rows** for them to be able to multiply. 

If this rule is met, multiplication is handled by applying the: 
- dot product of the **top row** of the _first matrix_ to the **first column** of the _second matrix_
- dot product of the **top row** of the _first matrix_ to the **second column** of the _second matrix_
- dot product of the **bottom row** of the _first matrix_ to the **first column** of the _second matrix_
- dot product of the **bottom row** of the _first matrix_ to the **second column** of the _second matrix_

$$
A=
\begin{bmatrix}
	0 & 1 & 1 \\
	1 & 0 & 1 \\
\end{bmatrix}
\quad
\quad
B=
\begin{bmatrix}
	1 & 1 \\
	1 & 1 \\
	-1 & 1 \\
\end{bmatrix}
$$

```python
0 * 1 + 1 * 1 + 1 * -1 = 0
0 * 1 + 1 * 1 + 1 * 1 = 2
1 * 1 + 0 * 1 + 1 * -1 = 0 
1 * 1 + 0 * 1 + 1 * 1 = 2 
```

$$
AB=
\begin{bmatrix}
	0 & 2 \\
	0 & 2 \\
\end{bmatrix}
$$