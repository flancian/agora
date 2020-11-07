### attention mechanism

Go back to [[Week 2 - Introduction]] or [[Deep Learning]]

The attention mechanism is the part of a deep learning algorithm which determines the length of an input stream the algorithm will account for in current time-steps of its execution. 

This becomes especially important in contexts like audio processing and language processing. 

Different approaches include [[Long short-term memory - LSTM]] cells or [[Gated Recurrent Unit]] cells. GRUs are similar to LSTMs but have a forget gate and fewer parameters as they lack an output gate.

For example, BERT uses a full self-attention mechanism, meaning it applies its attention mechanism to the entire input, while 