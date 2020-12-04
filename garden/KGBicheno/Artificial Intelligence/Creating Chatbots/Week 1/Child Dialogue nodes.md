# Child Dialogue nodes

When we have multiple responses to one Intention node based on different entities, we can offload the dialogue stream onto different child nodes to ensure the response matches the input. 

For example: With the \#hours_info intent, our response changes depending on the @location entity, so when we build our dialogue, we create a child dialogue with multiple responses based on the different entities in the user input.

![[Define_Domain_Specific_Intents.pdf]]

- What time is your Vancouver store open?
	- \#hours_open intent
		- @location entity

We want to be able to change the response based on the entity.

- What time is your @location store open?

So we add child nodes as below.

![What it looks like in the skill page to add child nodes properly](https://i.imgur.com/68wncIf.png)

## Main considerations

1. Delete the text response from the main node
2. Change the "What for user response" option to "Skip user input" so it will hand off to the child nodes
3. Use the cog symbol in the child node to change to "multiple conditioned responses" so each entity can have its own response.

## Fallback child node

Like having the "Anything else" node last, you should always have a [[Fallback child node]] last.