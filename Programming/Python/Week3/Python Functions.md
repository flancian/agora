# Python Functions

Go to the [[Python Week 3 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

Functions are reusable code that take some input and produce some output.

You can make your own, use an inbuilt one, or use some else's.

If you ever need to know more about a function you can call the `help()` function on it.

`help(len)`

This will return the _docstring_ associated with the function.

## Examples

`len()` - Returns the length of a collection variable.

`sum()` - Returns a value representing the addition of each element in a collection variable.

`sorted()` vs `sort()` --> function vs method --> A function stands alone while a method belongs to an object. In this case the difference is whether a new list is made or not.

E.g.

`sorted_sc_members = sorted(sc_members)` <-- A new list is created using the function.

`sc_members.sort()` <-- No new list is created, but the existing one is sorted.

## Making functions

### Syntax

![A graphic example of python function syntax](https://i.imgur.com/9z8uo2n.png)

```python

# defining the function

def function_name(arguments):
	"""
	docstring: add arguments to internals
	"""
	results = arguments + internals
	return results

# calling the function

>>> function_name(variable)

```

Or, more pragmatically.

```python

# defining the function

def add1(a):
	"""
	add 1 to a
	"""
	b = a + 1
	return b

# calling the function

>>> add1(5)
>>> 6

```

### Arguments

Multiple arguments:

`def multi_arg(arg1, arg2):`

No argument:

`def no_arg_func():`

### Return Statements

Return statements return a value from the local scope of the function back to the main scope of the program.

`Return some_value` <-- This breaks the function and ends it no matter what comes next.

No return statement:

```python
def print_something(arg1)
	print(arg1)
```

No body to the function:

```python
def placeholder_function():
	pass
```

Note, if a function without a return statement is required to return something, especially in the case of the `pass` example, Python3 will return a `None`.

To make your code easier to read, if you're using a function that does not return anything, explicitly use `Return None`.

#### Multiple Return Statements

You can use control flow to use multiple return statements.

```python
def type_of_album(artist, album, year_released):
    
    print(artist, album, year_released)
    if year_released > 1980:
        return "Modern"
    else:
        return "Oldie"
    
x = type_of_album("Michael Jackson", "Thriller", 1980)
print(x)
```

## Functions with a variable number of arguments

You can have functions that will take a variable number of arguments.

### Syntax

To ingest the arguments as a tuple-like collection:

```python
def sc_recruit(*members)
	for recruit in members:
		print(recruit, " is now ready for a designation.")
		
>>> sc_recruit("Quinn", "Pip", "Eli", "Greer")
>>> Quinn is now ready for a designation.
>>> Pip is now ready for a designation.
>>> Eli is now ready for a designation.
>>> Greer is now ready for a designation.
>>>
>>> sc_recruit("Luke Medici", "Morgan C Medici")
>>> Luke Medici is now ready for a designation.
>>> Morgan C Medici is now ready for a designation.
```

Or to ingest the arguments as a dictionary:

```python
def printDictionary(**args):
    for key in args:
        print(key + " : " + args[key])

>>> printDictionary(Country='Canada', Province='Ontario', City='Toronto')
>>>  
>>> Country : Canada
>>> Province : Ontario
>>> City : Toronto
```

### Function Scope

See [[Python Function Scope - Global vs Local]]

## Setting a default argument value

If you want an argument to have a default value, use the assignment operator when you declare the arguments and the function.

`def isGoodRating(rating=4):`