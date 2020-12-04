# Deployment Options for Watson Speech Assistant

See [[Creating a Watson Chatbot with Discovery]], [[Integrating Discovery and Assistant]], and the [[Main AI Page]].

Integrations are an easy, premade, way of deploying your Watson Assistant. 

- Facebook Messenger
- Slack
- Intercom (available only to Plus and Premium users)

## Service engine, not an interface

In the above cases, the social network provices the interface, which then passes the information back to IBM Watson Assistant. WA then returns the requested information back to the social media and its interface.

You can deploy over multiple channels, using one Assistant.

## Other methods of deployment

A previous example is the WordPress plugin we used before.

For situations where no integration exists, you need to create a proxy app to take information from the chat program, send it to the API, and catch the response to give back to the chat program.

![Deploying by proxy app](https://i.imgur.com/XK3Cgiz.png)

