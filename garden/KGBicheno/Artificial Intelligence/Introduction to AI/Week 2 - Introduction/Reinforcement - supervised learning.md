# Reinforcement Learning

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

This is where you give an algorithm or model a goal, and a set of constraints, then tell it to achieve that goal within those constraints. You give it positive feedback for achieving the the goal, and negative for not. You then tune the constraints for increased efficiency in achieving the goal.

An example of this would be playing chess or navigating an obstacle course.

Reinforcement learning algorithms don't just work out how to map a series of inputs to a series of outputs, but they work out the way to map them as well by working out the algorithm on the fly based on a goal outcome and a critic's feedback on/reward for its own trial-and-error. 

There are many specialised forms of reinforcement learning, including [[Artificial Intelligence/Introduction to AI/Week 2 - Introduction/Q-learning]]ntelligence/Introduction to AI/Week 2/Q-learning]], such as State-action-reward-state-action, all ideal for uncertain environments and further research.

![A graphic representation of a reinforcement learning model](https://i.imgur.com/zHdcWiN.png)

	Reinforcement learning exists in the context of states in an environment and the actions possible at a given state. During the learning process, the algorithm randomly explores the state–action pairs within some environment (to build a state–action pair table), then in practice of the learned information exploits the state–action pair rewards to choose the best action for a given state that lead to some goal state.

---

**State-Action Pair:** For any given state, an action that is possible at that state. Think of a list of vectors, start with state a, then actions 1 through however many possible actions there are [a, 1], [a, 2], [b, 1] ... [b, 4006], etc 

---

Learn more with [Train a software agent to behave rationally with reinforcement learning.](https://developer.ibm.com/articles/cc-reinforcement-learning-train-software-agent/)

#ToDo Oh dear god, one day, psuedo-code time. I'd say start with blackjack then an overlay-layer on top of a supervised NLP model for one of the bots.