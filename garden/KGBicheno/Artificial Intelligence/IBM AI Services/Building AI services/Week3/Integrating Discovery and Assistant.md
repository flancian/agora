# Integrating Discovery and Assistant

See [[Creating a Watson Chatbot with Discovery]] and [[How to build a Chatbot with Watson Assistant]]. 

Also See the [[Main AI Page]]

The use of intents and entities in a bot's construction makes for a simple way of implementing a bot, but the construction doesn't scale. There is a long tail of uncommon, unique, or unexpected intents and entities that chatbot might face when talking to a user.

This is where Discovery comes in.

![The long tail of chatbot interactions](https://i.imgur.com/pHivxP0.png)

Discovery can use existing enterprise knowledge to cover long-tail queries.

![The workflow for Discovery + Assistant](https://i.imgur.com/SJRgwvY.png)

# Skills
The dialogue skill
The search skill

Lite can't use it, but can invoke Discovery using an API call. 