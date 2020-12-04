# Dynamic typing vs Static Typing

## Dynamic typing
: Dynamically-typed languages generally perform type checking at runtime (compiled vs interpreted)
: Dynamically-typed languages do not enforce type statement at decleration
: You can reassign a new value of a different type to a variable during a program

## Static typing
: Statically-typed languages generally perform type checking at compile time (compiled vs interpreted)
: Statically-typed languages do enforce type statement at decleration
: Once a variable is declared, its type is immutable

# Compiled vs Interpreted Languages

## Interpreted
A language like Python is run as a script through an interpreter every time it runs, meaning both the script and the interpreter must be present at run-time. While these languages do not have a 'compile time' at which type-checking can occur, they do have an interpretation-time that is concurrent with run-time when checking can occur. 

## Compiled
A language like C is compiled from source code entered by a human (very much like a script in Python is), but is then compiled into machine-readable bitcode as an executable file. This occurs before run-time and is when statically-typed languages can and do type-check for errors. 

***
**Interpreted languages are generally dynamically typed, or at least cannot type-check before run-time, while compiled languages can be either, though they will always be able to check before run-time.**
***