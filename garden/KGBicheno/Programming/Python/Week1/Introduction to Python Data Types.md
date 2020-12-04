# Introduction to Python Data Types

Go to the[[Python Week 1 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

## Basic Data Types

- Integers: Signed, finite
- Float: Real numbers, integers, signed
- String: Characters
- Boolean: True/False

`type()` will tell you the data type of a variable

**Typecasting:** Changing a variables type from one to another. 

`float(2):2.0` <- nothing really changes, precision gained in later calculations
`int(1.1):1` <- be careful, precision has been lost
`int('1'):1` <- converting a string with an integer value is fine
`int('A'):Err` <- converting a string with a character value throws an error
`str(1):"1"` <- convert an int to a string
`str(1.1):"1.1"` <- convert a float to a string
`int(True):1` <- cast a True Boolean to an int gets you a 1 (and back again)
`float(False):0.0` <- likewise, casting False gets you a zero (and back again)
`bool(1):True` <- I did not know that you can ==use the `bool()` function to cast numbers to bools.== 

## For a full list of types

A more comprehensive list of types can be found at the [W3Schools website](https://www.w3schools.com/python/).

