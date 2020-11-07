# Python Sets

Go to the[[Python Week 2 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

For code examples see the [[Week2 Sets Lab]]

Python sets are a collection variable like lists and tuples and are capable of ingesting different data types. 

Unlike lists and tuples, sets are:
- unordered, and
- contain only unique elements

## Creating a set

You create a set much like a list only instead of square brackets you use curly brackets. 

`set1 = { "There", "can", "be", "only", "one"}`

It is possible to create a set with non-unique variables, but once it is initialised, those non-unique elements will vanish, with only one of those elements remaining.

E.g.
```python
marshall = { 
			"Slim Shady", 
			"The Real Shady", 
			"All You Other Slim Shadies", 
			"Slim Shady", 
			"Just Imatations", 
			"Marshall Mathers"
			}
>>> {"Slim Shady", "The Real Shady", "All You Other Slim Shadies", "Just Imatations", "Marshall Mathers"}
```

The second `"Slim Shady"` did not stand up, and was removed from the set.

![A graphical representation of non-unique elements being removed](https://i.imgur.com/8hTnsbn.png)

### Typecasting a list to a set to remove duplicates. 

Say the previous set `Marshall` had been a list. We could use the `set()` function to remove dupiicates and typecast it as a set instead.

```Python
marshall = ["Slim Shady", "The Real Shady", "All You Other Slim Shadies", "Slim Shady", "Just Imatations", "Marshall Mathers"]
set(marshall)
>>> {"Slim Shady", "The Real Shady", "All You Other Slim Shadies", "Just Imatations", "Marshall Mathers"}
```

## Set functions

Add an element to a set using the `add()` method. Note that adding an element that already exists will not work.

`marshall.add("stan")`

You can remove elements using the `remove()` method.

`marshall.remove("stan")`

You can verify if an element is in the set using the `in` command.

```python
if "Slim Shady" in marshall:
	print("Please stand up.")
```

### Mathematical Set operations

#### Finding the intersection of two sets

When you have two sets, you can find the intersection, that is, the common elements to both sets, using the ampersand `&` operator.

`double_agent_set = special_circumstances_set & contact_set`

Likewise, you can use the `intersection()` method.

`double_agent_set = special_circumstances_set.intersection(contact_set)`

#### Constructing the union of two sets

To construct the union of two sets, use the `union()` method.

`high_level_involved = contact_set.union(special_circumstances_set)`

#### Check if a Set is a Subset of another Set

Simply use the `issubset()` method of the smaller set and pass in the larger set.

`32bool = m32_set.issubset(special_circumstances_set)`

#### Check if a Set is a Superset of another Set

Simply use the `issuperset()` method of the larger set and pass in the smaller set.

`SCbool = special_circumstances_set.issuperset(m32_set)`

#### Find the difference between one set and another

To find how one set is different from another, call its `difference()` method on the second set.

`difference = original_set.difference(other_set)`