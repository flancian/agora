# Deploying your Watson Assistant to Slack

See [[Creating a Watson Chatbot with Discovery]], [[Integrating Discovery and Assistant]], and the [[Main AI Page]].

Also see [[Deploying your Watson Assistant to Facebook Messenger]]

The instructions for adding an already-built Watson Assistant to [Facebook Messenger are available on the Coursera Website](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CB0106EN-SkillsNetwork/labs/Module%205/Lab7DeployingtoSlack.md.html?origin=www.coursera.org).

The assistant has been [deployed to the Bot Personhood Initiative](https://app.slack.com/client/T01EK448VBQ/C01EY14683W) Slack channel.

## Lab 7: Deploying to Slack (1h)

Objective for Exercise:

- How to integrate the basic chatbot with Slack.

## Deploying Your Chatbot On Slack

Slack is a communication tool, typically used by people working in a team. It can also be a channel for you to connect with friends, family or anyone that you want to share information with. You can improve the workflow in your team or set reminders of important events with your friends and family by deploying chatbots on Slack.

For this lab you will integrate our chatbot with Slack.

## CREATE A SLACK APP

1. Head over to Slack.com, click on the Try Slack button, then click on Create a Slack Workspace.

2. Next, enter your email address and click on the Confirm button. You might be asked to enter a confirmation code that will be sent to the email address you specified.

3. Specify a team and project name of choice. Feel free to skip inviting teammates.

4. Now that we have a Slack workspace and channel, we need to proceed to create a Slack App to use to communicate with our existing chatbot.

5. Check your email to find the URL of your slack as shown in the figure below.

6. Sign into your slack workspace with the following link: https://slack.com/signin?redir=/api/apps. Enter your URL (minus the .slack.com part) and click Continue.

7. Once you are signed in, click on Create an App.

8. Give your app a name and specify the workspace that you want to deploy this app on. Then click on Create App.

ADD PERMISSIONS

Now that we have a Slack App (e.g., Slack Chatbot Demo), we need to ensure that the chatbot will have the right permission.

1. Click on App Home in the sidebar and then scroll to the Scopes section. Click on Review Scopes to Add.

2. Scroll to scopes section. You\'ll want to click on Add OAuth Scope button under Bot Token Scopes as shown in figure.

3. Select app_mentions:read. The new scope will be added as shown in the figure below. This permission enables the bot to detect mentions from Slack users.

4. Repeat the process of clicking on Add an OAuth Scope under Bot Token Scopes, to add the following permissions: chat:write, im:history, and im:read. Once you are done, the list will be shown as seen in the image below.

5. Click on Basic Information in the left sidebar. Then copy and make note of your Verification Token. We\'ll need this information when integrating Slack within Watson Assistant.

6. Now we need to install our Slack app within our workspace. Click on OAuth & Permissions in the left sidebar, then click on Install App to Workspace.

7. Click on Allow when asked to confirm your authorization.

8. Copy and make note of the Bot User OAuth Access Token that will be provided to you.

## INTEGRATE SLACK WITHIN WATSON ASSISTANT

Now that we have the Verification Token, and Bot User OAuth Access Token for our Slack app, we can proceed to add a Watson Assistant integration for Slack.

1. From the Student Advisor Chatbot assistant within Watson Assistant, click on Add integration - much like we did in the previous lab - but this time select Slack.

2. Scroll to Step 2 on the page, and paste your Verification Token in the Verification token input field.

3. Paste your Bot User OAuth Access Token (that you made note of, earlier) in both the OAuth access token and Bot user OAuth access token input fields.

3. Scroll to Step 3 on the page, and click on the Generate request URL button.

4. This will generate a URL that we\'ll need to provide to Slack. (You may need to scroll back to Step 3 if the page refreshed.) Copy and make note of the Generated request URL.

5. Go back to the page for your Slack App. If you closed it, you can find it at the following URL https://api.slack.com/apps. In the left sidebar, under the Features section click on Incoming Webhooks. Turn Activate Incoming Webhooks on. In the warning message that appears, click on reinstall your app.

6. You'll be asked to specify a channel (e.g., # watson-assistant-chatbot-demo). Select the one that was generated for you earlier on when you specified the project name.

7. Now click on Event Subscriptions in the sidebar and switch on Enable Events. Then paste the request URL you saved from Watson Assistant.

9. Next, click on Subscribe to bot events, as shown by the arrow in the figure below.

10. This will open the section that will allow you to subscribe to specific events.

11. Click on Add Bot User Event and select the event type message.im. Then repeat the process to add app_mention. This will enable both direct messages and mentions to trigger a response from the chatbot.

12. Then click on Save Changes.

(If the Save Changes is disabled/grey, please paste the Request URL again so that Slack can validate the URL and turn the Save Changes button to enabled/green.)

You're done! Your bot will now be available within your Slack workspace. Any direct message or mention will be sent in input to your Watson Assistant chatbot, and its response provided back to the user in Slack.

The chatbot will also respond to mentions in channels, provided you invite it to the given channel, after mentioning it as shown in the image below.

Author(s)

[Antonio Cangiano](https://www.linkedin.com/in/antoniocangiano?cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-CB0106EN-SkillsNetwork-20719128&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ)