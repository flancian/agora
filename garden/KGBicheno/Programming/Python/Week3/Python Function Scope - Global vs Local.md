# Python Function Scope - Global vs Local

Go to the [[Python Week 3 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

This is a special page connected to [[Python Functions]]

## Variable Scope

Scope refers to the parts of a program or function in which a variable is relevant.

![An illustration of global vs local scope](https://i.imgur.com/dQPBeoa.png)

## Global Variables

These variables are set at the program level and are available at any point after they are initiated.

If a variable is called inside a function but cannot be found initiated within that function, Python will look for its value in the Global scope.

You can create a global variable from within a function with the `global` keyword.

E.g.

```python
artist = "Michael Jackson"

def printer(artist):
    global internal_var 
    internal_var = "Whitney Houston"
    print(artist, "is an artist")

printer(artist) 
printer(internal_var)

>>> Michael Jackson is an artist
>>> Whitney Houston is an artist
```

## Local Variables

These variables are available only within the function in which they were initialised, and can only be made visible to the program at large as a return value. 

If we try do the previous example without the `global` keyword, this nature is made apparent with the following error.

```python
artist = "Michael Jackson"

def printer(artist):
    internal_var= "Whitney Houston"
    print(artist,"is an artist")

printer(artist) 
printer(internal_var)

Michael Jackson is an artist

---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-35-86438c577ebc> in <module>
      8 printer1(artist)
      9 # try runningthe following code
---> 10 printer1(internal_var1)

NameError: name 'internal_var1' is not defined
```