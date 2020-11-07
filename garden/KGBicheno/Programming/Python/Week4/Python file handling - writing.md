# Python file handling - writing

Go to the [[Python Week 4 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

See [[Python file handling - reading]]

For code examples see [[Week4 Writing to Files Lab]]

## Using 'w' mode

This time we use `w` for write mode.

```python
with open("/resources/data/Example2.txt", "w") as File1:
	File1.write("This is line A")
```

This will write `This is line A` to the first line of the file, overwriting whatever was there before.

Successive calls of `.write()` will write to a new line in the file.

## Using 'a' mode

Using `a` mode will append lines to the end of an existing file.

It is also common to use for loops to add list or dictionary elements to a file.

```python
with open("/resources/data/Example2.txt", "a") as File1:
	for item in source_list:
		File1.write(item)
```

## Nesting files

You can nest file context managers to perform functions such as copying the contents of one file to another. See the graphic below.

![Nesting file open context managers to copy file contents](https://i.imgur.com/CXkNr6k.png)