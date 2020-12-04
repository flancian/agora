# Integrating Discovery and Assistant

See [[Creating a Watson Chatbot with Discovery]] and [[How to build a Chatbot with Watson Assistant]]. 

Also See the [[Main AI Page]]

## Discovery Checklist

- [ ] Go to your Dashboard
- [ ] Go to Add a new Watson Service
- [ ] Search for or select "Discovery"
- [ ] Select your plan (Lite in this case)
- [ ] Select your region (Sydney does not yet integrate with Serverless as of 2020-11-09)

The use of intents and entities in a bot's construction makes for a simple way of implementing a bot, but the construction doesn't scale. There is a long tail of uncommon, unique, or unexpected intents and entities that chatbot might face when talking to a user.

This is where Discovery comes in.

![The long tail of chatbot interactions](https://i.imgur.com/pHivxP0.png)

Discovery can use existing enterprise knowledge to cover long-tail queries.

![The workflow for Discovery + Assistant](https://i.imgur.com/SJRgwvY.png)

## Procedure

The [Steps to adding Discovery to assistant as an API](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CB0106EN-SkillsNetwork/labs/Module%203-coursera/Lab_4_Adding_Discovery_to_the_Chatbot.md.html?origin=www.coursera.org) are quite tricky and need to be followed perfectly despite the documentation being slightly out-of-date.

# Skills
The dialogue skill
The search skill

Lite can't use it, but can invoke Discovery using an API call. 