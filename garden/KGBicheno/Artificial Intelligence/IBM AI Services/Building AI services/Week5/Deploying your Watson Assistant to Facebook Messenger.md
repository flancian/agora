# Deploying your Watson Assistant to Facebook Messenger

See [[Creating a Watson Chatbot with Discovery]], [[Integrating Discovery and Assistant]], and the [[Main AI Page]].

The instructions for adding an already-built Watson Assistant to [Facebook Messenger are available on the Coursera Website](https://www.coursera.org/learn/building-ai-applications/ungradedWidget/LtWhk/lab-6-deploying-to-facebook-messenger).

The integrated bot is located on the [Cultural Recognition of AI Personhood Initiative](https://www.facebook.com/AIPeopletoo) page, though you must 'view this page as a visitor' in order to access the chatbot.

==There is also evidence that the chatbot does not work on mobile devices.==

## Lab 6: Deploying to Facebook Messenger (1hr)

Objective for Exercise:

- How to integrate the basic chatbot with Facebook Messenger on your Facebook page.
- How to deploying your Watson-powered chatbot to Facebook Messenger for your business.

Facebook Messenger is a messaging platform that, among personal uses, can help businesses and customers communicate with each other. You can automate the communication with your customers by deploying your Watson-powered chatbot to Facebook Messenger for your business. This way, you\'ll promptly respond to customer queries even when you are not around.

## Create a Facebook Page and App

We'll need a business page in order to deploy our chatbot to Facebook. So let\'s get that done right away.

1. Sign up for a Facebook account. If you already have a Facebook account you can skip this step.

2. Create a Facebook Page to host your Watson Assistant Chatbot. To do so, in the top right corner of Facebook, you\'ll find a Create button. Click on it and then select Page from the drop down menu that appears.

You are now presented with two categories of pages that you can create, Business or Brand and Community or Public Figure. Just pick one, as either category is fine for the purpose of this lab.

Now that you created your Facebook page, you\'ll need to create a Facebook application that will integrate with our chatbot.

3. Create or login in your Facebook Developer account. If you don\'t have an account you can create one by clicking Get Started in the upper right corner of the Facebook for Developers page, as shown in the figure below.

4. Once you have a Facebook Developer account you can create your Facebook App by clicking on My Apps in the top right corner of the webpage.

5. You'll be asked to fill in the Display Name and the Contact Email, fill the required details and click on Create App ID.

You'll be asked to select a scenario. For our purposes, feel free to skip this step by clicking on the Skip button.

6. In order for your Watson chatbot to connect to your Facebook app, you'll need the App Secret for your Facebook app. Click on Settings in the sidebar and then select the Basic option in the dropdown menu.

From this section, obtain your App Secret credentials.

7. Now we need to connect Watson Assistant to our Facebook page. Click on PRODUCTS in the sidebar on the left.

Scroll down to the Add a Product section. Click on Set Up under the Messenger option as shown below.

8. In the Access Tokens section click on Add or Remove Pages then click on Continue.

9. Select the Facebook page that you want to integrate your app with.

10. Generate the Page Access Token for your Facebook page. In the Access Tokens section click on Generate Token. Then save the Page Access Token.

Now that we have the APP SECRET and Page Access Token for our Facebook app, the next step is to integrate it with Watson Assistant.

## Integrate your Facebook App with Watson Assistant

1. Launch your Watson Assistant instance and click on the Assistants section. When there, select the Student Advisor Chatbot.

2. Click on the Add Integrations button on the right side of the page.

Then select Facebook Messenger.

3. Paste the APP SECRET credentials of your Facebook App into the Application secret box.

4. Proceed to Step 2 on the page, and paste the Page Access Token from your Facebook app in the Page access token box.

And then save the Generate verify token.

5. Proceed to Step 3. There, click on Generate callback URL and save your callback URL.

6. Go back to the page for your Facebook App, if you closed it you can find it again from this link.

7. In the left sidebar, under the PRODUCTS section click on Settings. Then under the Webhooks section click on Add Callback URL.

8. Paste the callback URL and Verify Token from your Watson Assistant. Then click Verify and Save

9. Then click on Add Subscription and select messages and messaging_postbacks. Then click save.

10. Congratulations, your Watson Assistant chatbot is now integrated with Facebook Messenger.

In the meantime, you can test your chatbot app on Messenger, go to the page for your Facebook app, click on Roles in the sidebar on the right. Then you add can add testers that can communicate with your chatbot during this testing phase.

Go head and test your chatbot on the Facebook Page you designated. Bear in mind that your chatbot app is not public yet. Only testers get to have access to your chatbot. Please refer to [these instructions from Facebook](https://developers.facebook.com/docs/messenger-platform/app-review?cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-CB0106EN-SkillsNetwork-20719128&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ) should you want to make your app public.

Please note that Facebook Messenger does not support embedding arbitrary HTML. So if a chatbot deployment target includes Facebook Messenger, it might make sense to simply have a link in your responses instead of the HTML code for said link (e.g., \<a href=\"...\">...\</a>).

### Author(s)
[Antonio Cangiano](https://www.linkedin.com/in/antoniocangiano?cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-CB0106EN-SkillsNetwork-20719128&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ)