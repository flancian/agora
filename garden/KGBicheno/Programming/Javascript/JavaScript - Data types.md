# Variables and data types
**Note** These notes follow on from [[Javascript - Absolute Basics]]

## Variables

A container for a value so that it can be reused

### Declaring a variable

Here's the basic syntax:

```
var firstname = "John";
```

He uses single quotes and says single quotes are more 'modern' :P

# 5 basic data types in JavaScript
1. **Number**: Floating point numbers, for decimals and integers
2. **String**: Sequence of characters, used for text
3. **Boolean**: Logical data type that can only be TRUE or FALSE
4. **Undefined**: Data type of a variable that does not have a value yet
5. **Null**: Also means 'non-existent'

In JavaScript, all numbers are Floating Point, there are no distinct number types. 

---
## JavaScript has *dynamic typing*
> Data types are automatically assigned to variables when they are created.
> 
> This is considered to be one of vanilla JavaScripts biggest drawbacks.
> 
> TypeScript has **static typing** and is therefore considered to be better for:
	> 1. Debugging, as data type is preserved throughout a program
	> 2. Large scale projects, as errors are less likely to be introduced through reason 1

See [[# Dynamic vs Static typing]]

---
**Best Practice** - Always give variables a meaningful name

**Best Practice** - JavaScript uses CamelCase for its variables

**Rules**
- You cannot name a variable 
	- With a keyword
	- By starting it with anything but
		- character
		- underscore
		- dollar sign