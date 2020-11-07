# Python file handling - reading

Go to the [[Python Week 4 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

For code examples see [[Week4 Reading From Files Lab]]

See [[Python file handling - writing]]

## The 'open()' function

Syntax: 

`File1 = open("/home/websinthe/Documents/code/example.txt", "r")`

- File1 <-- File object
- open <-- function name
- "/home/websinthe/.../example.txt" <-- file path
- "r" <-- mode

Common modes include:

- w <-- write (writes from beginning of file)
- r <-- read
- a <-- append
- r+ <-- read/write (need to take care of line cursor placement)
- x <-- create file

You use the file object to gain information about the file. Think of it as pouring the contents of the file into a variable and using the variable's methods to interact with the file's data.

`File1.name` --> `/home/websinthe/Documents/code/example.txt`
`File1.mode` --> `r`
`File1.close` --> you always need to close the file, which is why you always use the `with` statement instead of just opening a file straight up.

## The 'with' context manager

#contextmanager 

The `with` context manager ensures that the file being manipulated is closed after it is used without the code having to explicitly handle the file's closure.

```python
with open("/home/websinthe/Documents/code/example.txt", "r") as File1:
	file_contents = File1.read()
	print(file_contents)
```

All operations within the indent block will be executed and then the file will be closed.

`file_contents = File1.read()` <-- outputs the contents of the file to the variable
`file_contents = File1.readlines()` <-- outputs the lines of the file as elements of a list object to the variable
`file_contents = File1.readline()` <-- outputs the first line of the file to the variable, ==each subsequent time it is called, it will output the next line to the variable==
`file_contents = File1.readlines(4)` <-- outputs the first 4 characters of each line to the variable

![A graphic of readlines(4) etc in action](https://i.imgur.com/laQVy4n.png)