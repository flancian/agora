### matrix factorization

Go back to the [[AI Glossary]]

#recsystems

In math, a mechanism for finding the matrices whose dot product approximates a target matrix.

In recommendation systems, the target matrix often holds users' ratings on items. For example, the target matrix for a movie recommendation system might look something like the following, where the positive integers are user ratings and 0 means that the user didn't rate the movie:

![Image of a user matrix that wouldn't render](https://i.imgur.com/vvxyByw.png)

The movie recommendation system aims to predict user ratings for unrated movies. For example, will User 1 like Black Panther?

One approach for recommendation systems is to use matrix factorization to generate the following two matrices:

    A user matrix, shaped as the number of users X the number of embedding dimensions.
    An item matrix, shaped as the number of embedding dimensions X the number of items.

For example, using matrix factorization on our three users and five items could yield the following user matrix and item matrix:

|User| Matrix|     
|----|----|                
|1.1  | 2.3  |          
|0.6  | 2.0 |          
|2.5  | 0.5 |

|       | Item | Matrix |     |    |
|---|----|----|----|----|
| 0.9 | 0.2 | 1.4 | 2.0 | 1.2 |
| 1.7 | 1.2 | 1.2 | -0.1 | 2.1 |


The dot product of the user matrix and item matrix yields a recommendation matrix that contains not only the original user ratings but also predictions for the movies that each user hasn't seen. For example, consider User 1's rating of Casablanca, which was 5.0. The dot product corresponding to that cell in the recommendation matrix should hopefully be around 5.0, and it is:

(1.1 * 0.9) + (2.3 * 1.7) = 4.9

More importantly, will User 1 like Black Panther? Taking the dot product corresponding to the first row and the third column yields a predicted rating of 4.3:

(1.1 * 1.4) + (2.3 * 1.2) = 4.3

Matrix factorization typically yields a user matrix and item matrix that, together, are significantly more compact than the target matrix.

