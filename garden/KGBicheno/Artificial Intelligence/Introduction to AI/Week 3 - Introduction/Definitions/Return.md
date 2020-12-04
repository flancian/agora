### return

Go back to the [[AI Glossary]]

#rl

In reinforcement learning, given a certain policy and a certain state, the return is the sum of all rewards that the agent expects to receive when following the policy from the state to the end of the episode. The agent accounts for the delayed nature of expected rewards by discounting rewards according to the state transitions required to obtain the reward.

$$\text {Therefore, if the discount factor is } \lambda \text{, and } r_o,\ldots,r_n \text{ denote the rewards until the end of the episode, then the return calculation is as follows:}
$$
![The equation for return](https://i.imgur.com/JMEQGfj.png)

