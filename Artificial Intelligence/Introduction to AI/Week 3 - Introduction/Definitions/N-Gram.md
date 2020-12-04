### N-gram

Go back to the [[AI Glossary]]

#seq

An ordered sequence of N words. For example, truly madly is a 2-gram. Because order is relevant, madly truly is a different 2-gram than truly madly.

|	N	|	Name(s) for this kind of N-gram	|	Examples	|
|	---------	|	---------	|	---------	|
|	2	|	bigram or 2-gram	|	to go, go to, eat lunch, eat dinner	|
|	3	|	trigram or 3-gram	|	ate too much, three blind mice, the bell tolls	|
|	4	|	4-gram	|	walk in the park, dust in the wind, the boy ate lentils	|

Many natural language understanding models rely on N-grams to predict the next word that the user will type or say. For example, suppose a user typed three blind. An NLU model based on trigrams would likely predict that the user will next type mice.

Contrast N-grams with bag of words, which are unordered sets of words.

