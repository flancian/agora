# Preparing a Chatbot for deployment

Go back to [[How to build a Chatbot with Watson Assistant]] as part of [[Building AI-powered Chatbots with Watson]] 

So far I've only been able to access the chatbot from the 'try-it-out' panel inside the Watson Assistant dashboard. Now it's time to prepare the chatbot for deployment out in the wild by creating a preview version that will eventually be hosted on a (preconfigured) Wordpress site. 

#ToDo see if it's possible to run a Watson Chatbot into Discord.

![[Add_a_preview_and_retrieve_your_credentials.pdf]]

1. Go to the main Watson Assistant page for that assistant
2. Click on the integrations section
3. Click Add Integration
4. Click Preview Link
5. When it gives you a preview page, make sure the Chatbot has still learned everything you've taught it
	1. If not, go back and make sure everything is still in place, you may have to make a change so that you see the "Watson is learning" ribbon once more
	2. If that has been the case, delete the preview you made and create a new one
	3. The new one should work and you can continue on
6. Click on the three dots in the top right-hand corner of the screen where you created the preview
7. Click "Settings" and go to "API Details"
8. Grab the [[API details for the Flower Shop Assistant]], you'll need the Assistant URL and API Key.
9. You'll use them on the [[Dummy WordPress site Credentials]] the course provides you.

---

The dots on the screen where created the preview should look like this:

![This is what it should look like](https://i.imgur.com/NsvGB7S.png)