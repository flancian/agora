# Voice Options for your Chatbot

See [[Creating a Watson Chatbot with Discovery]], [[Integrating Discovery and Assistant]], and the [[Main AI Page]].

# Natural interfaces vs Explicit interfaces

Speech uses less effort on behalf of the user, apparently. This might have taken a step backwards as early implementations have given users an expectation of a convoluted 'dialect' one must use when talking with machines. 

## Three main paths to Voice Assistants

1. You can make the chatbot available through phonecalls while implementing the Assistant-to-Voice solution yourself (platform like Twilio).
2. Implementing an application that marries Watson Assistant and Watson Speech-to-Text and Text-to-Speech APIs
3. Phone-based systems using the IBM Voice Agent with Watson

### Roll-your-own

Pros: 

- Easily accessible
	- Can be used over traditional phone numbers
- No downloads required
	- No need to have the internet or install an app

Cons:

- From-scratch implementation
	- You need to program and test the system yourself
- Low flexibility

### Watson Assistant-Text-to-Speech-to-Text

Pros:

- Highly customisable and Flexible
	- If you need special functionality that no other system provides

Cons:

 - User usually has to download an application
 - Service orchestration is from scratch (IBM/etc infrastructure)
	 - You might need to develop it for multiple OSs (iOS/Android)

### Voice Agent with Watson

Pros:

- Easily accessible
	- You're given your own SIP trunk
	- People can barge in and interrupt the assistant
	- Easier to go straight to a human agent
- No downloads required
- Service orchestration pre-done
	- Basically, the second option but handled for you

Cons
- On-premises IBM Voice Gateway required for some advanced features.
	- Requires IBM's hybrid cloud-baremetal service
- Intermediate flexibility