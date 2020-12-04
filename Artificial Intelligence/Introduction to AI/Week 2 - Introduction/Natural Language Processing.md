# Natural Language Processing

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Tagging of sentence parts forms the basis of most NLP functions.  

Rules-based doesn't scale to the enormous datasets present today, so statistic-based tagging and tokenisation must be used. 

Methods like an [[Hiden Markov Model]] (HMM) are used independently of humans by the computer to work out the context of each word within a sentence to identify the approproate part of speech, tag, or lemma for that word, depending on the task. 

These HMMs use bigrams or n-grams of the words around the masked word to determine the probality of what that word might be. There are multiple methods of masking, some more effective than others. These are especially useful in text generation:

	>>> sentence = "the man we saw saw a saw"
	>>> tokens = nltk.word_tokenize( sentence )
	>>> list(nltk.bigrams( tokens ) )
	[('the', 'man'), ('man', 'we'), ('we', 'saw'), ('saw', 'saw'),
	 ('saw', 'a'), ('a', 'saw')]
	>>>

## Extension Pages

- [[Modern Approaches in NLP]]
- [[Recurrent Neural Networks in NLP]]
- [[Reinforcement Learning in NLP]]
- [[Deep Learning in NLP]]


