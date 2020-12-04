# Q-Learning

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Part of the [[Reinforcement - supervised learning]] page.

Q-learning is an iterative approach to reinforcement learning where the current state of the environment and future states are taken into account. The algorithm will take into account the idea that new information might be worth less than old, or that doing nothing might be better than acting. It takes long-term probabilistic rewards into account when considering immediate rewards.

	Q values are updated for each state–action pair as an action is selected for a given state. The Q value for the state–action pair is updated with some reward provided by the move (may be nothing) along with the maximum Q value available for the new state reached by applying the action to the current state (discounted by a discount factor). This is further discounted by a learning rate that determines how valuable new information is over old. The discount factor indicates how important future rewards are over short-term rewards. Note that the environment may be filled with negative and positive rewards, or only the goal state may indicate a reward.
	
![The algorithm for Q-Learning, stare at it because it makes sense](https://i.imgur.com/kyOeUs3.png)

I get the feeling this would be used in a computer game character's AI. That kind of thing.