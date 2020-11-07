# Type Coercion
When a variable is called on to be printed to console or displayed, even if it is not explicitly a string, it will be coerced into displaying as one. 

Take the following code:

```
var firstName = "John";  // string
var age = 28;            // number
var job, isMarried;
job = "Teacher";         // string
isMarried = false;       // boolean

// concatenate them all and log them to the console

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)
```

You get the following output without any form of explicit type conversion in the code.

```
John is a 28 year old Teacher. Is he married? false
```

# Variable Mutation
A variable can have its value and type changed on the fly. Take the following addition to the previous code block, the variables age and job are assigned new values without the keyword `var`, and in the case of `age`, its type is chaged from a number to a string.

```
var firstName = "John";
var age = 28;

console.log(firstName + ' ' + age)

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

age = "twenty-eight";     // the type has been mutated as well as the value
job = "driver";           // the type has stayed the same but the value changed

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt("What is his last name?");
console.log(firstName + ' ' + lastName);
```