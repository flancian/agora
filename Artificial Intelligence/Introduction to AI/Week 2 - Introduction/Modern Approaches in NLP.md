## Modern Approaches in NLP

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]
Part of the page on [[Artificial Intelligence/Introduction to AI/Week 2 - Introduction/Natural Language Processing]]

Modern approaches to NLP primarily focus on neural network architectures. As neural network architectures rely on numerical processing, an encoding is required to process words. 

Two common methods are:

- one-hot encodings
	- Essentially a binary encoding of the word's position for efficient training by neural networks
- word vectors
	- A numeric encoding of a range of dimensions of the word to which operations can be performed

![A graphical representation of one hot encoding](https://i.imgur.com/HQna29j.png)

Another encoding is word vectors, which represent words as highly dimensional vectors where units of the vector are real values. But rather than assign each unit a word (as in one-hot), each unit represents categories for the word (such as singular vs. plural or noun vs. verb) and can be 100-1,000 units wide (dimensionality). 

What makes this encoding interesting is that words are now numerically related, and the encoding opens up applying mathematical operations to word vectors (such as adding, subtracting, or negating).

![A graphical depiction of word vector encoding for NLP](https://i.imgur.com/wXlBkTE.png)

