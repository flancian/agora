# Python Lists and Tuples

Go to the[[Python Week 2 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

For code examples see both the:

- [[Week2 Tuples Lab]] and the
- [[Week2 Lists Lab]]

## Tuples

---

Tuples - ordered sequence

Comma-seperated values encapsulated by parenthesis.

E.g.
`Ratings = (10, 9, 6, 9, 7, 8, 6, 5, 10)`

## Indexing

Indexed the same way as strings. Values within the tuple can be any other type of variable and are accessed by the name of the tuple followed by the index contained in square brackets. Negative indexing works for tuples as well. 

E.g.
`Ratings[2]:6`

## Concatinating Tuples

Two or more tuples can be concatinated using the `+` symbol. Also, values can be added to a tuple through this method.

E.g.
```python
tuple1 = ("Golem", 10, [1, 4], 5)
tuple2 = (10, 3, "Monarch")
tuple3 = tuple1 + tuple2
for item in tuple3:
	print(item) # taking some license with space here
>>> "Golem", 10, [1, 4], 5, 10, 3, "Monarch"
```

![A graphic representation of concatinating tuples](https://i.imgur.com/Lwq12O9.png)

## Slicing Tuples

Tuples can be sliced using index like any sequential variable.

| 1 | 4 | 8 | 'apple' | 13 | 'pie' |
|:--:|:--:|:--:|:----:|:---:|:----:|
| 0 | 1 | 2 | 3 | 4 | 5 |

`tuple1[1:4]:4,8,'apple'`
`tuple1[-2]:13`

## Functions on a tuple

You can use the len() function to determine the length of a tuple.

## Tuples are immutable

Tuples and their values cannot be changed. Any time you wish to alter the values within a tuple, you must create a new tuple based on the existing one. 

E.g.

`tuple1 = sorted(tuple1)` <-- Throws an error. Tuples cannot be changed.

`sorted_tuple = sorted(tuple1)` <-- Perfectly fine as a new tuple has been created.

![A graphical representation of the immutibility of tuples and how to tackle it](https://i.imgur.com/YwQdTt3.png)

## Nesting with tuples

Tuples can hold complex data types such as other tuples, lists, and dictionaries. These can be accessed with the same index notation as usual. 

![A graphical representation of nested tuples](https://i.imgur.com/ilFKP4e.png)

## Finding a known value's index using index()

If you know that a value, say "disco" is an element in a tuple, but you don't know the index, simply call the `index()` method on the tuple.

`print(genres_tuple.index("disco"))` and it will return the numerical index of the value you passed in.


## Lists

---

Lists are also a sequential data type like tuples except that they are:

- mutable, and
- encapsulated by square brackets `[]`

Because lists are mutable, functions can operate on the same list.

`list1 = ["Breaking Benjamin", 10, 3]`

`list1.extend(["Rock", 11])`

list1 now containts `["Breaking Benjamin", 10, 3, "Rock", 11]`

### !!! The difference between extend() and append()

Taake the previous example:

`list1 = ["Breaking Benjamin", 10, 3]`

`list1.extend(["Rock", 11])`

list1 now containts `["Breaking Benjamin", 10, 3, "Rock", 11]`

==If we had instead used `append()`, the list would now only have one more element, a two-element list.==

`list1 = ["Breaking Benjamin", 10, 3]`

`list1.append(["Rock", 11])`

list1 now containts `["Breaking Benjamin", 10, 3, ["Rock", 11]]`

## Assigning and deleting elements

You can assign a new value to a list index by using the assignment operator `=`

`list1[0] = "The Offspring"`

list1 now containts `["The Offspring", 10, 3, ["Rock", 11]]`

You can also use the `del[]` command to delete an element from the list by passing in the index.

`del(list1[2])`

list1 now containts `["The Offspring", 10, ["Rock", 11]]`

## Aliasing

When two variables reference the same object, changing the object through one variable changes it for the other variable too, sometimes without having intended to.

E.g.

```python
list1 = ["Breaking Benjamin", 10, 3, "Rock", 11]
band_list = list1
# stuff happens in the program
list1[3] = "Christian Rock"
# more stuff happens, dev prints band_list, expecting original vals
print(band_list)
# is shocked to see they've become a christian rock band
# fin
```

## Copying a list with some simple syntax

All you need to do to copy a list is use the following syntax

`band_list = list1[:]`

And boom, you have a copied list, no unexpected changes from aliasing.