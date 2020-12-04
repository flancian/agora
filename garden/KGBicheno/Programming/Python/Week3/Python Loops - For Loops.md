# Python Loops - For Loops

Go to the [[Python Week 3 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

Also see [[Python Loops - While Loops]]

For code examples see the [[Week3 Python For and While Loops Lab]]

## For Loops

A loop that executes for each element in an iterable.

![A graphic illustration of a for loop and syntax](https://i.imgur.com/bE93dKM.png)

### Syntax

```python
for i in range(4)
	nephilim[i] = "Redacted"
```

Keep in mind, for iterable lists and tuples, you do not need to use the range function if you are iterating through the whole list. An ad-hoc variable representing the elements of the list will do the job instead.

```python
for member in nephilim:
	member = "redacted"
```

#### The Range() Function

The `range()` function outputs an ordered sequence as a list, `i`, with the same number of elements as the input.

`len(range(3))` --> 3 --> [0, 1, 2]

If the `range()` function has two arguments, where the first argument is smaller than the second argument, than the sequence starts at the first argument and iterates up to but not including the second. 

`range(15,20)` --> [15, 16, 17, 18, 19]

#### The Enumerate() Function

Provides a counter for a list when looping through it with a `for` loop.

![A graphical representation of enumerate](https://i.imgur.com/7g1YeCc.png)

```python
for i,member in enumerate(nephilim)
	nephilim.name = "Redacted"
	print("Nephilim ", i + 1, " has had their name redacted.")
```