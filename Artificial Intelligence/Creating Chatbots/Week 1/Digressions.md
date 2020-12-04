# Digressions

Go back to [[Building AI-powered Chatbots with Watson]] or [[How to build a Chatbot with Watson Assistant]].

Part of the pages on [[Context Variables and Slots]], including [[Advanced Context Variables]]

Digressions allow the user to interrupt the bot when it is asking a question. Say, for example, the user asks for a flower recommendation, then Floria asks for which occassion, a digression is useful if the user responds with 'Never mind that, when is your store open?'.

Digressions can allow for the bot to answer the new question and then return to the old question, though it also has the flexibility to continue in other ways as well.

![[Enable_Digressions.pdf]]

## Example digressions

Without digressions, our best hope is to ask the question again with modified wording.

![Mam, answer the damn question, Mam](https://i.imgur.com/UXlaj4Q.png)

With digressions, we can answer the second question, then return to asking the original question.

![An example of a digression in action](https://i.imgur.com/quIr2ov.png)

## Where to find digressions

1. Click the node 
2. Click the "Customise link" next to the title.
3. The second tab is Digressions
4. The first option allows or disallows digressions away from the questions
5. The second option allows digressions into the node **but more importantly** sets the bot to come back to this question after a digression.