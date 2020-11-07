# Transfer Learning - IBM

Go to [[Module 1 - Watson AI Overview]] or the [[Main AI Page]]

Using learned patterns from previously-trained models as the basis for new models, layering more specific models on top of less specific ones to speed-up the training of commercially-focused AI applications.

From IBM:

	Transfer Learning is learning how to learn. It's what enables Watson to learn more from less, so it doesn't need to be trained from scratch. It can be fed prior knowledge to speed things up. 

## Small Datasets

IBM hints that this is moving towards a solution to the big dataset problem talked about in [[Constraints on AI and robotic advances]].

## Data Security

IBM claims their 3 layer model protects client data in ways other company's models don't.

- The first layer is general knowledge, such as that which could be obtained from wikipedia. It tells Watson what a house or a tornado is.
- The second layer is industry-specific learning. It creates the specific lexicon of symbolic meanings to remove ambiguity and provide models with maths etc.
- The third layer is client-specific learning. Everything flows up to this so no client sees any other client's data, but still enjoys the speed of pre-trained industry modelling.