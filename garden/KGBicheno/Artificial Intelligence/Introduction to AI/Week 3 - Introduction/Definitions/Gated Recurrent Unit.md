# Gated Recurrent Unit - GRU

Go back to [[Week 2 - Introduction]] or the [[Main AI Page]]
Part of the pages on [[Artificial Intelligence/Week 2/Natural Language Processing]] and [[Attention Mechanism]].

According to the [Illustrated Guide to LSTMs and GRUs - A step-by-step guide](https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21)

	The GRU is the newer generation of Recurrent Neural networks and is pretty similar to an LSTM. GRU’s got rid of the cell state and used the hidden state to transfer information. It also only has two gates, a reset gate and update gate.
	
Though [Wikipedia does mention](https://en.wikipedia.org/wiki/Long_short-term_memory) that:

	GRUs have been shown to exhibit better performance on certain smaller and less frequent datasets.[6][7]

	However, as shown by Gail Weiss, Yoav Goldberg and Eran Yahav, the LSTM is "strictly stronger" than the GRU as it can easily perform unbounded counting, while the GRU cannot. That's why the GRU fails to learn simple languages that are learnable by the LSTM.[8]

	Similarly, as shown by Denny Britz, Anna Goldie, Minh-Thang Luong and Quoc Le of Google Brain, LSTM cells consistently outperform GRU cells in "the first large-scale analysis of architecture variations for Neural Machine Translation."[9] 
	
![A GRU and its gates](https://i.imgur.com/VK2y0fh.png)

See my notes on [[Long short-term memory - LSTM]] for an in-depth guide on how these work.

[![A video on how LSTMs work](https://i.imgur.com/sPh0FTo.png)](https://www.youtube.com/watch?v=8HyCNIVRbSU "How LSTMs work")

![An LSTM and a GRU side-by-side](https://i.imgur.com/xsBvobq.png)