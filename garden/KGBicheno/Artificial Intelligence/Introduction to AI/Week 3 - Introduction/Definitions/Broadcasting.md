### broadcasting

Go back to the [[AI Glossary]]


Expanding the shape of an operand in a matrix math operation to dimensions compatible for that operation. For instance, linear algebra requires that the two operands in a matrix addition operation must have the same dimensions. Consequently, you can't add a matrix of shape (m, n) to a vector of length n. Broadcasting enables this operation by virtually expanding the vector of length n to a matrix of shape (m,n) by replicating the same values down each column.

For example, given the following definitions, linear algebra prohibits A+B because A and B have different dimensions:

$$A = [[7, 10, 4],
	 [13, 5, 9]]
B = [2]$$

However, broadcasting enables the operation A+B by virtually expanding B to:

$$ [[2, 2, 2],
  [2, 2, 2]]$$

Thus, A+B is now a valid operation:

$$[[7, 10, 4],  +  [[2, 2, 2],  =  [[ 9, 12, 6],
 [13, 5, 9]]      [2, 2, 2]]      [15, 7, 11]]$$

See the following description of broadcasting in NumPy for more details.

