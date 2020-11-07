### epsilon greedy policy

Go back to the [[AI Glossary]]

#rl

In reinforcement learning, a policy that either follows a random policy with epsilon probability or a greedy policy otherwise. For example, if epsilon is 0.9, then the policy follows a random policy 90% of the time and a greedy policy 10% of the time.

Over successive episodes, the algorithm reduces epsilon’s value in order to shift from following a random policy to following a greedy policy. By shifting the policy, the agent first randomly explores the environment and then greedily exploits the results of random exploration.

