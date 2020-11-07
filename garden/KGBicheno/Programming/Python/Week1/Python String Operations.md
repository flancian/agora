# Python String Operations

Go to the[[Python Week 1 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

Strings are ordered lists of characters, whether they be letters, numbers, spaces, or special characters. 

## Indexing

Individual elements in a string can be accessed like an index in an array. This has been referred to in other places as slicing and subscripting.

```python
string_var = "Kieran"
print(string_var[3])
>>> r
```

![A visual representation of a string as an array with an index](https://i.imgur.com/YZ2FX9z.png)

While we can access invidual elements going forward from zero, we can use negative indexing going backward from -1 at the last position to access each element as well. 

```python
string_var = "Kieran"
print(string_var[-1])
>>> n
```

![I love negative indexing.](https://i.imgur.com/MggfKcu.png)

## Stride

You can also step through the elements of the string at a certain number of elements per stride.

```python
string_var = "Kieran Bicheno"
print(string_var[::2])  # Here the stride is 2, or every 2nd character, first-inclusive
>>> Kea Bceo
```

![A visual representation of both stride and slicing](https://i.imgur.com/wXZHxoS.png)

## Slicing

We can assign parts of a string to another variable by slicing it using the index notation. In the code below, the first number is **where we start** the second number is **where we stop including elements** and the third number is **the stride**

```python
string_var = "Kieran Bicheno"
new_string = string_var[0:7:2]
print(new_string)
>>> Kea B
```

**To be clear**

In the code `[x:y:z]`


- x --> The first element we include
- y --> The first element we do not include
- z --> The stride, which is first-element inclusive

## String Functions

`len()` gives the length of a string
`+` concatenates strings
`*` repeats a string
`\` is an escape sequence
`\t` is a tab
`\\` is a backslash

Placing an r in front of a string in a print statement automatically escapes the string.

```python
print(r"I can use a \ in this string because of the r at the front.")
```

![An illustration of using r in a print function. This has been bugging me.](https://i.imgur.com/Mjc02Ru.png)

## String Methods

Strings are special in that they have both the generic set of **Sequence Methods** but also their own **String Methods**

### Methods create a new variable

So when I call string_var.upper(), I need to assign the value to a new variable, I can't just do it "in place."

For example:

```python
string_var = "Kieran Bicheno"
string_var.upper() # This line either does nothing or throws an error
new_string = string_var.upper()
print(new_string)
>>> KIERAN BICHENO
```

