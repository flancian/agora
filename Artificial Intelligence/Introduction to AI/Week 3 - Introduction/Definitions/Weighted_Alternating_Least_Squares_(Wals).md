### Weighted Alternating Least Squares (WALS)

Go back to the [[AI Glossary]]

#recsystems

An algorithm for minimizing the objective function during matrix factorization in recommendation systems, which allows a downweighting of the missing examples. WALS minimizes the weighted squared error between the original matrix and the reconstruction by alternating between fixing the row factorization and column factorization. Each of these optimizations can be solved by least squares convex optimization. For details, see the Recommendation Systems course

