# Hello World
## Inline Javascript

1. Below the `</body>` tag, put a pair of matching script tags to contain your Javascript. 

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Section 2: JavaScript Language Basics</title>
    </head>

    <body>
        <h1>Section 2: JavaScript Language Basics</h1>
    </body>
    
    <script>
        console.log('Hello World!');
    </script>
</html>

```

2. This will print to the console in the browser

## External file Javascript
1. Same as last time, place script tags outside the `</body>` tag but this time leave them empty.
2. Include a `src` attribute to the `<script>` tag pointing to the external JS file you wish to execute.
3. It should look like this `<script src='script.js'></script>` and will look like the code block below.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Section 2: JavaScript Language Basics</title>
    </head>

    <body>
        <h1>Section 2: JavaScript Language Basics</h1>
    </body>
    
    <script src="script.js"></script>
</html>

```

4. The contents of the **script.js** file will look the same as the inline code from before. (Here it has been changed to distinguish it for the lesson's sake.)

```
console.log('Hello World!!!');
```

5. The console will output `Hello World!!!`
6. This course will use external files to keep separation of scripts.