# Week 7: JavaScript Lets Start

### Introduction to JavaScript:

JavaScript is a scripting language used for creating interactive web pages. It was created in 1995 by Brendan Eich while working for Netscape. JavaScript is a lightweight language and can be used on both the client-side and server-side. It is the most popular programming language and is supported by all modern web browsers.

### Overview of the JavaScript language:

JavaScript is a high-level, dynamic, and interpreted programming language. It supports object-oriented, functional, and procedural programming styles. It is used for creating interactive web pages, web applications, and server-side applications. JavaScript is an event-driven language, which means that it responds to user actions such as mouse clicks and keystrokes.

### Importance of JavaScript in web development:

JavaScript is an essential part of web development. It is used for creating interactive and dynamic web pages. It allows web developers to create complex web applications and user interfaces. It can be used to validate user input, manipulate the Document Object Model (DOM), and handle events. JavaScript is a versatile language and can be used for both front-end and back-end web development.

### Setting up a development environment:

To get started with JavaScript development, you need a text editor and a web browser. Some popular text editors for JavaScript development include Visual Studio Code, Sublime Text, and Atom. To test your JavaScript code, you can use the web console in your web browser.

### JavaScript console:

The JavaScript console is a tool for debugging JavaScript code. It is used to display error messages and log information to the browser's console. It can be accessed by pressing F12 in most web browsers.

### Online JavaScript console:

- [https://jsconsole.com/](https://jsconsole.com/)
- [https://repl.it/languages/javascript](https://repl.it/languages/javascript)
- [https://jsfiddle.net/](https://jsfiddle.net/)
- [https://www.programiz.com/javascript/online-compiler/](https://www.programiz.com/javascript/online-compiler/)
- [https://onecompiler.com/javascript](https://onecompiler.com/javascript)
- [https://www.mycompiler.io/new/nodejs](https://www.mycompiler.io/new/nodejs)

#### Installing NodeJS:

NodeJS is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It is used for creating server-side applications and is the most popular JavaScript runtime environment. It is available for Windows, Mac, and Linux.

#### Steps to install nodeJs

- Download the NodeJS installer from the official [NodeJS website](https://nodejs.org/en).
- Run the installer and follow the on-screen instructions.
- Verify the installation by opening a command prompt and typing `node -v`.

### JavaScript syntax:

JavaScript is a case-sensitive language. It uses the Unicode character set and supports both single-line and multi-line comments. It uses the semicolon (;) to mark the end of a statement.

### JavaScript statements:

JavaScript statements are used to perform actions in a program. JavaScript statements are separated by semicolons (;). JavaScript statements can be grouped into three categories: declarations, assignments, and expressions.

## Variables & Data Types:

### Understanding variables in JavaScript:

A variable is a container for storing data values. In JavaScript, variables are declared using the "var", "let", or "const" keyword. The "var" keyword is used to declare variables with global or function scope. The "let" keyword is used to declare variables with block scope. The "const" keyword is used to declare variables that cannot be reassigned.

### Declaring variables and assigning values:

```js
// Declaring a variable with the var keyword
var age
```

```js
// Assigning a value to a variable
age = 25
```

```js
// Declaring and assigning a value to a variable
var name = "John"
```

### Data types in JavaScript: numbers, strings, booleans, etc.:

JavaScript supports various data types, including numbers, strings, booleans, null, undefined, and objects.

```js
// Number
var age = 25

// String
var name = "John"

// Boolean
var isMarried = true

// Null
var car = null

// Undefined
var bike

// Object
var person = { name: "John", age: 25 }
```

### Converting between data types:

JavaScript provides built-in functions for converting between data types. For example, the "parseInt()" function can be used to convert a string to a number.

var num = "10";
var result = parseInt(num);

### Operators & Expressions:

#### Arithmetic operators: +, -, \*, /, %, etc.:

JavaScript supports various arithmetic operators, including addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%).

```js
// Addition
var sum = 2 + 3;

// Subtraction
var difference = 5 - 2;

// Multiplication
var product = 2 \* 3;

// Division
var quotient = 10 / 2;

// Modulus
var remainder = 10 % 3;
```

#### Assignment operators: =, +=, -=, etc.:

Assignment operators are used to assign values to variables. JavaScript supports various assignment operators, including the equal (=) operator, addition assignment (+=) operator, and subtraction assignment (-=) operator.

```js
// Equal operator
var x = 5

// Addition assignment operator
var y = 10
y += 5

// Subtraction assignment operator
var z = 10
z -= 3
```

#### Comparison operators: ==, ===,!=, !==, etc.:

Comparison operators are used to compare values in JavaScript. JavaScript supports various comparison operators, including the equal (==) operator, strict equal (===) operator, not equal (!=) operator, and strict not equal (!==) operator.

```js
// Equal operator
var x = 5
if (x == 5) {
  console.log("x is equal to 5")
}

// Strict equal operator
var y = "5"
if (y === 5) {
  console.log("y is equal to 5")
} else {
  console.log("y is not equal to 5")
}

// Not equal operator
var z = 10
if (z != 5) {
  console.log("z is not equal to 5")
}

// Strict not equal operator
var a = "5"
if (a !== 5) {
  console.log("a is not equal to 5")
}
```

#### Logical operators: &&, ||, !:

Logical operators are used to combine multiple conditions in JavaScript. JavaScript supports various logical operators, including the AND (&&) operator, OR (||) operator, and NOT (!) operator.

```js
// AND operator
var x = 5
var y = 10
if (x < 10 && y > 5) {
  console.log("Both conditions are true")
}

// OR operator
var z = 3
if (z < 5 || z > 10) {
  console.log("At least one condition is true")
}

// NOT operator
var a = true
if (!a) {
  console.log("a is not true")
}
```

#### Evaluating expressions and order of operations:

JavaScript follows the order of operations when evaluating expressions. Parentheses are used to specify the order of operations.

```js
// Example expression
var result = (2 + 3) \* 4;
```

### Conditional Statements:

#### If...else statements:

If...else statements are used to execute different code blocks based on a condition in JavaScript.

```js
// Example if...else statement
var age = 18
if (age >= 18) {
  console.log("You are eligible to vote")
} else {
  console.log("You are not eligible to vote")
}
```

#### Switch statements:

Switch statements are used to execute different code blocks based on multiple conditions in JavaScript.

```js
// Example switch statement
var day = "Monday"
switch (day) {
  case "Monday":
    console.log("Today is Monday")
    break
  case "Tuesday":
    console.log("Today is Tuesday")
    break
  default:
    console.log("Today is neither Monday nor Tuesday")
    break
}
```

#### Ternary operator:

The ternary operator is a shorthand way of writing an if...else statement in JavaScript.

```js
// Example ternary operator
var age = 18
var message =
  age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"
console.log(message)
```

### Loops:

#### For loops:

For loops are used to execute code a specific number of times in JavaScript.

```js
// Example for loop
for (var i = 0; i < 5; i++) {
  console.log(i)
}
```

#### For...in loops:

For...in loops are used to loop through the properties of an object in JavaScript.

```js
// Example for...in loop
var person = { name: "John", age: 25 }
for (var prop in person) {
  console.log(prop + ": " + person[prop])
}
```

#### For...of loops:

For...of loops are used to loop through the elements of an array in JavaScript.

```js
// Example for...of loop
var numbers = [1, 2, 3, 4, 5]
for (var number of numbers) {
  console.log(number)
}
```

#### While loops:

While loops are used to execute code as long as a condition is true in JavaScript.

```js
// Example while loop
var i = 0
while (i < 5) {
  console.log(i)
  i++
}
```

#### Do...while loops:

Do...while loops are used to execute code at least once and then as long as a condition is true in JavaScript.

```js
// Example do...while loop
var i = 0
do {
  console.log(i)
  i++
} while (i < 5)
```

### Functions:

#### Defining and calling functions:

Functions are used to group code together and execute it multiple times in JavaScript.

```js
// Example function
function greet(name) {
  console.log("Hello, " + name + "!")
}
greet("John")
greet("Jane")
```

#### Arguments and return values:

Functions can take arguments and return values in JavaScript.

```js
// Example function with arguments and return value
function add(a, b) {
  return a + b
}
var result = add(2, 3)
console.log(result)
```

#### Function scope and closure:

Variables declared inside a function are only accessible inside that function in JavaScript. Closures allow functions to access variables from their parent functions.

```js
// Example function with closure
function outer() {
  var x = 5
  function inner() {
    console.log(x)
  }
  return inner
}
var closure = outer()
closure()
```

### Arrays:

#### Declaring and initializing arrays:

Arrays are used to store multiple values in JavaScript.

```js
// Example array
var numbers = [1, 2, 3, 4, 5]
```

#### Accessing and modifying array elements:

Array elements can be accessed and modified using their index in JavaScript.

```js
// Example accessing and modifying array elements
var numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]) // Output: 1
numbers[0] = 10
console.log(numbers[0]) // Output: 10
```

#### Array methods: push, pop, shift, unshift, etc.:

Arrays have various built-in methods in JavaScript, including push(), pop(), shift(), and unshift().

```js
// Example array methods
var numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 6]
numbers.pop()
console.log(numbers) // Output: [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers) // Output: [2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers) // Output: [0, 2, 3, 4, 5]
```

### Objects:

#### Declaring and initializing objects:

Objects are used to store key-value pairs in JavaScript.

```js
// Example object
var person = { name: "John", age: 25 }
```

#### Accessing and modifying object properties:

Object properties can be accessed and modified using their key in JavaScript.

```js
// Example accessing and modifying object properties
var person = { name: "John", age: 25 }
console.log(person.name) // Output: John
person.name = "Jane"
console.log(person.name) // Output: Jane
```

#### Understanding object-oriented programming in JavaScript:

Object-oriented programming is a programming paradigm that uses objects to represent real-world entities in code. JavaScript supports object-oriented programming through prototypes.

```js
// Example object-oriented programming in JavaScript
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name)
}

var person = new Person("John", 25)
person.greet()
```

### DOM Manipulation & Event Handling:

#### Understanding the Document Object Model (DOM):

The Document Object Model (DOM) is a programming interface for web documents in JavaScript. It represents the HTML and XML documents as a tree of objects.

#### Selecting elements in the DOM:

Elements in the DOM can be selected using various methods in JavaScript, including getElementById(), getElementsByClassName(), and querySelector().

```js
// Example selecting elements in the DOM
var elementById = document.getElementById("my-element")
var elementsByClass = document.getElementsByClassName("my-class")
var elementByQuery = document.querySelector(".my-selector")
```

#### Modifying element styles and content:

Elements in the DOM can be modified using their properties and methods in JavaScript, including style and innerHTML.

```js
// Example modifying element styles and content
var element = document.getElementById("my-element")
element.style.backgroundColor = "red"
element.innerHTML = "Hello, world!"
```

#### Handling events such as clicks, hover, etc.:

Events in the DOM can be handled using event listeners in JavaScript, including click, mouseover, and keydown.

```js
// Example handling events in the DOM
var element = document.getElementById("my-element")
element.addEventListener("click", function () {
  console.log("Element clicked!")
})
element.addEventListener("mouseover", function () {
  console.log("Mouse over element!")
})
element.addEventListener("keydown", function (event) {
  console.log("Key pressed: " + event.key)
})
```

### Conclusion:

JavaScript is a powerful programming language used for web development. It has various features and constructs, including variables and data types, operators and expressions, conditional statements, loops, functions, arrays, objects, and DOM manipulation and event handling. By understanding and mastering these concepts, you can create dynamic and interactive web applications using JavaScript.
