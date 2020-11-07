# Python Conditions and Branching

Go to the [[Python Week 3 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

Comparison operations compare values and return a boolean.

## Python Comparison Operators

| Operator | Name | Example |
|:---------:|:------:|:---------:|
| == | Equals | 4 == 4 |
| != | Not Equal | 4 != 5 |
| > | Greater Than | 5 > 4 |
| < | Less Than | 4 < 5 |
| >= | Greater Than Or Equal To | 5 >=5 |
| <= | Less Than Or Equal To | 4 <= 4|

## Branching Statements

### The If Statement

If statements allow for code to only execute if a condition evaluates as True.

```python
if age > 18:
	print("You may enter the AC/DC concert.")
print("This statement will print regardless.")
```

Apparently, you can have brackets around the conditional:
```python
if (age > 18):
	print("You may enter the AC/DC concert.")
print("This statement will print regardless.")
```

### The Else Statement

The else statement executes if the conditional evaluates to false.

```python
if age > 18:
	print("You may enter the AC/DC concert.")
else:
	print("You may enter the Meatloaf concert.")
print("This statement will print regardless.")
```

### The Elif Statement

Elif statements allow for multiple if conditionals to be evaulated before an Else statement is triggered.

```python
if age > 18:
	print("You may enter the AC/DC concert.")
elif age == 18:
	print("You may enter the Pink Floyd concert.")
else:
	print("You may enter the Meatloaf concert.")
print("This statement will print regardless.")
```

## Logic Operators

Logic operators take boolean values and produce different boolean values.

| Operator | Description | Example |
|:---------:|:------:|:---------:|
| Not | Returns the opposite | not(True): False |
| Or | Returns False only if all operands are False | if x or y or z: |
| And | Returns True only if all operands are True | if x and y and z: |

#### Or syntax

```python
if age > 18 or parent_present == True or snuck_in == True:
	print("You may enter the AC/DC concert.")
print("The audience is now deaf.")
```

#### And syntax

```python
if age > 18 and parent == True and sloshed == True:
	print("You may scream at the goalie.")
print("The audience is now deaf.")
```

## Table of Logical Operator Results

The following table illustrates the nature of the different logical operators.

The `and` statement is only `True` when both conditions are true. The `or` statement is true if one condition is `True`. The `not` statement outputs the opposite truth value.

![A graphical illustration of the logical operators](https://i.imgur.com/T1dArRg.png)

## Use of brackets for clarity

Given I often have trouble with logical operators in conditionals, brackets may help:

#### And

```python
if(album_year > 1979) and (album_year < 1990):
    print ("Album year was in between 1980 and 1989")
```

#### Or

```python
if(album_year < 1980) or (album_year > 1989):
    print ("Album was not made in the 1980's")
```

#### Not

```python
if not (album_year == '1984'):
    print ("Album year is not 1984")
```

