# Dialogues

Go to [[How to build a Chatbot with Watson Assistant]] or [[Building AI-powered Chatbots with Watson]]

Chatbot series:
- [[Intents]]
- [[Entities]]
- Dialogues

**Dialogues** determine the response based on the the detected intents and/or entities in the input.

Check out the Feminist Chatbot Course page on [[Storyboarding - Main Page|Storyboarding]]

### Execution of nodes

Dialogue nodes are checked from top to bottom until one matches the intent of the user utterence. 

![The order of nodes being checked for intent](https://i.imgur.com/wX62OMr.png)

This is why all dialogue nodes must be between the Welcome node and the Anything_Else node.

### Child nodes

![Children nodes make for a more nuanced chatbot](https://i.imgur.com/hEXJGWI.png)

Children nodes will only execute if something in the parent node explicitly calls into them, and then the bot will run through each one top to bottom until it finds one that matches the user intent etc. 

It's worth noting that Watson has introduced many new features that have steered chatbots away from the use of child nodes.