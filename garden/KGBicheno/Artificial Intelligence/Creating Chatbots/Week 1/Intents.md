# Intents

Go to [[How to build a Chatbot with Watson Assistant]] or [[Building AI-powered Chatbots with Watson]]

Chatbot series:
- Intents
- [[Entities]]
- [[Dialogues]]

**Intents** try to capture what the user wants (their goal) in the conversation.

### Intents vs Examples

- **greeting_us_en**       <-- Intent
	- Hello
	- Hi                     <-- Examples
	- Wassup
- **location_qustion_au**
	- Where are your Brisbane offices?
	- Where can I find you?
	- What's your website?

Create intents in the skill section of the Watson Assistant section.

![[Creating_Intents.pdf]]

Give at least 5 examples per intent to train Watson, though the more the merrier. 

![A map of where intents exist in the dialog flow](https://i.imgur.com/7Dky1DE.png)

### Importing/Exporting Intents and examples

Intents and examples can be imported and exported via csv file in the intents page of the skill.

The format is a simple two-column comma-delemeted format with examples followed by intents, one per row, as below.

	What time are you open until?,hours_info
	What are your hours of operation?,hours_info
	What are your hours?,hours_info
	Are you open on Sundays?,hours_info
	what are you hours of operation in Toronto,hours_info
	what are the hours of operation for your Montreal store,hours_info
	list of your locations,location_info
	Where are your stores?,location_info

