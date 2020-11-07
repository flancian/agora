# Implementing Dialogues

Go back to [[Main Chatbot Page]], the [[Main AI Page]], or the [[Master of Philosophy - Main Page]]

![[Implement_the_Dialog.pdf]]

When you respond with something the Chatbot doesn't undestand, it responds with a varied answer. This is because it has multiple responses available to it and cycles through them.

## Cycling vs Random

The major benefit of Cycling is that it allows us to put a definite last response last, such as once we've failed to understand the user four times, we escalate to a human agent. 

With Random, we risk that response coming up first and wasting the chatbot entirely. 

![How a basic chatbot looks before adding functionality](https://i.imgur.com/4xQPnOa.png)

## Child Dialogues

See the page on [[Child Dialogue nodes]] for more information.