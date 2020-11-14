### sparse representation

Go back to the [[AI Glossary]]


A representation of a tensor that only stores nonzero elements.

For example, the English language consists of about a million words. Consider two ways to represent a count of the words used in one English sentence:

    A dense representation of this sentence must set an integer for all one million cells, placing a 0 in most of them, and a low integer into a few of them.
    A sparse representation of this sentence stores only those cells symbolizing a word actually in the sentence. So, if the sentence contained only 20 unique words, then the sparse representation for the sentence would store an integer in only 20 cells.

For example, consider two ways to represent the sentence, "Dogs wag tails." As the following tables show, the dense representation consumes about a million cells; the sparse representation consumes only 3 cells:

|	Dense Representation Cell Number	|	Word	|	Occurrence	|
|	---------	|	---------	|	---------	|
|	0	|	a	|	0	|
|	1	|	aardvark	|	0	|
|	2	|	aargh	|	0	|
|	3	|	aarti	|	0	|
|	… 140,391 more words with an occurrence of 0					|
|	140395	|	dogs	|	1	|
|	… 633,062 words with an occurrence of 0					|
|	773458	|	tails	|	1	|
|	… 189,135 words with an occurrence of 0					|
|	962594	|	wag	|	1	|
|	… many more words with an occurrence of 0					|
						
|	Sparse Representation Cell Number	|	Word	|	Occurrence	|
|	---------	|	---------	|	---------	|
|	140395	|	dogs	|	1	|
|	773458	|	tails	|	1	|
|	962594	|	wag	|	1	|

