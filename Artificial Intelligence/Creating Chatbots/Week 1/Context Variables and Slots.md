# Context Variables and Slots

Go back to [[Main Chatbot Page]], the [[Main AI Page]], or the [[Master of Philosophy - Main Page]]

Also see the [[Feminist Chatbot Main Page]] 

- **Problem** Our current bot cannot remember user input from one utterance to the next.
	- When is your Toronto store open?
	- It is open from 6am until 9pm
	- Where is it located?
	- A list of our store locations is available ...

^^ Problem: A human would have known the user was referring to the Toronto store, not generically to all stores.

## Lifecycle of entities

$context_variables store values about the user interaction and stay available throughtout the entire conversation, so we can refer to them at any time. 

### Slots

#### Optional

If an entity pops up in the user input voluntarily, we can save that entiry into a context variable for later use. This is optional.

![An optional slot for a context variable where the user does not have to give an entity to be saved](https://i.imgur.com/c42ybkC.png)

- So if a generic (no-entity) question is asked, we can provide a generic answer and no context variable is set. If one is mentioned, it is set, and we can use it.

#### Required

We can make the slot required by adding a question to the slot and changing the slot type from 'optional' to 'required'

![An example of a required slot type](https://i.imgur.com/Nd0uE8A.png)

This ensures that if an entitiy is required for the bot's functionality to progress, it is available.

- Keep in mind that the slot will continue to ask for the value until one is provided.

![A conversation using required slots](https://i.imgur.com/DV1Cosj.png)

### Multiple Slots

Using multiple slots per entity/intent is great for collecting user information. Take, for example, the back-end/front-end situation for a restaurant booking below.

##### Back-end

![The back-end of a multi-slot question](https://i.imgur.com/YzDpDmD.png)

##### Front-end

![The resulting series of questions](https://i.imgur.com/DdRqn9h.png)

These values can then be stored through the use of a back-end API and piped into a database or JSON file etc. 