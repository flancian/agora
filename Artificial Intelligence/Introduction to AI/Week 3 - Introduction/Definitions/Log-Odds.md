### log-odds

Go back to the [[AI Glossary]]


The logarithm of the odds of some event.

If the event refers to a binary probability, then odds refers to the ratio of the probability of success (p) to the probability of failure (1-p). For example, suppose that a given event has a 90% probability of success and a 10% probability of failure. In this case, odds is calculated as follows:

$$  odds=\frac{p}{(1-p)}=\frac{(.9)}{(.1)}=9
$$

The log-odds is simply the logarithm of the odds. By convention, "logarithm" refers to natural logarithm, but logarithm could actually be any base greater than 1. Sticking to convention, the log-odds of our example is therefore:

$$  log-odds = ln(9) = 2.2
$$

The log-odds are the inverse of the sigmoid function.

