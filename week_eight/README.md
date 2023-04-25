## Time for level up - Advance JS

### Closures and IIFEs

#### Understanding closures

- A closure is a function that makes use of variables defined in outer functions that have previously returned.

In JavaScript, a closure is created when a function is defined inside another function, and the inner function has access to the outer function's variables and parameters. The inner function can access these variables even after the outer function has returned. Here's an example:

```js
function outer() {
  var message = "Hello"

  function inner() {
    console.log(message)
  }

  return inner
}

var innerFunction = outer()
innerFunction() // outputs "Hello"
```

In this example, outer is a function that defines a variable message and returns an inner function inner. When outer is called, it returns inner, which is assigned to the variable innerFunction. When innerFunction is called, it outputs the value of message, which is "Hello". This is possible because of closures. The inner function inner has access to the message variable even though outer has already returned.

#### Private Variables using Closures

Closures can be used to create private variables in JavaScript. A private variable is a variable that can only be accessed by the functions defined in the same scope. Here's an example:

```js
function counter() {
  var count = 0

  function increment() {
    count++
    console.log(count)
  }

  function decrement() {
    count--
    console.log(count)
  }

  return {
    increment: increment,
    decrement: decrement
  }
}

var counterObject = counter()
counterObject.increment() // outputs 1
counterObject.increment() // outputs 2
counterObject.decrement() // outputs 1
```

In this example, counter is a function that defines a variable count and returns an object with two methods increment and decrement. The increment and decrement methods both have access to the count variable because of closures. However, the count variable is not accessible outside of the counter function. This means that count is a private variable.

#### IIFEs

IIFE stands for Immediately Invoked Function Expression. An IIFE is a function that is defined and immediately executed. Here's an example:

```js
;(function () {
  console.log("Hello, world!")
})()
```

In this example, an anonymous function is defined and immediately executed. The function simply outputs "Hello, world!" to the console. The () at the end of the function definition is what executes the function immediately.

IIFEs are often used to create a new scope for variables and functions, so they don't interfere with the global scope. Here's an example:

```js
;(function () {
  var message = "Hello, world!"

  function printMessage() {
    console.log(message)
  }

  printMessage()
})()
```

In this example, an anonymous function is defined and immediately executed. Inside the function, a variable message and a function printMessage are defined. These variables and functions are only accessible inside the anonymous function and do not interfere with the global scope. The printMessage function is called at the end of the anonymous function, which outputs the value of message.

here's a simple real-world example of an IIFE:

```js
;(function () {
  var currentYear = new Date().getFullYear()
  console.log("Welcome to my website! © " + currentYear)
})()
```

In this example, we define an IIFE that sets the currentYear variable to the current year using the Date() function. The IIFE then logs a welcome message to the console, including the copyright symbol and the current year.

This is a simple example, but you'll often see IIFEs used in real-world applications to encapsulate code and prevent naming conflicts, particularly in larger codebases or when using third-party libraries. They can also be used to initialize variables, set up event listeners, or perform other tasks that should only happen once at the beginning of the script.

#### Real Word Example

```js
function createPerson(name, age) {
  var privateData = {
    address: "Unknown",
    phone: "Unknown"
  }

  function getPrivateData() {
    return privateData
  }

  return {
    getName: function () {
      return name
    },
    getAge: function () {
      return age
    },
    setAddress: function (address) {
      privateData.address = address
    },
    setPhone: function (phone) {
      privateData.phone = phone
    },
    getPrivateData: getPrivateData
  }
}

var person = createPerson("John", 30)
console.log(person.getName()) // outputs "John"
console.log(person.getAge()) // outputs 30
person.setAddress("123 Main St")
person.setPhone("555-555-1212")
console.log(person.getPrivateData()) // outputs { address: '123 Main St', phone: '555-555-1212' }
```

In this example, createPerson is a function that returns an object with methods to get and set the person's name, age, address, and phone. The private data (the person's address and phone number) is stored in a closure that can only be accessed by the object's methods. The getPrivateData method returns the private data, but it can only be called from within the closure.

This use of closures allows us to create objects with private data and methods, which can be useful in situations where we want to restrict access to certain information or functionality.

### Asynchronous Programming

#### Synchronous vs asynchronous code

Synchronous code executes one instruction at a time, waiting for each instruction to complete before moving on to the next one. Here's an example of synchronous code that logs a message to the console:

```js
console.log("Hello")
console.log("World")
```

In this example, the first `console.log()` statement is executed before the second one, and the output is:

```
Hello
World
```

Asynchronous code, on the other hand, allows multiple instructions to be executed at the same time, without waiting for each instruction to complete before moving on to the next one. Here's an example of asynchronous code that uses the setTimeout() function to delay the execution of a function:

```js
console.log("Hello")
setTimeout(function () {
  console.log("World")
}, 1000)
```

In this example, the `console.log()` statement is executed first, and then the setTimeout() function is called with a delay of 1000 milliseconds (1 second). After 1 second, the callback function is executed, logging "World" to the console. The output is:

```
Hello
World
```

<img src="https://www.freecodecamp.org/news/content/images/2021/09/freeCodeCamp-Cover-2.png"/>

### Callbacks for Handling Async Behavior

Callbacks are functions that are passed as arguments to other functions and are executed when certain actions are completed. Callbacks are commonly used in asynchronous programming to handle the completion of an async operation. Here's an example of using a callback to log the contents of a file:

```js
const fs = require("fs")

fs.readFile("file.txt", "utf-8", function (err, data) {
  if (err) throw err
  console.log(data)
})
```

In this example, the `readFile()` function takes a file path, encoding type, and a callback function as arguments. When the file is read, the callback function is executed, logging the contents of the file to the console. If there's an error reading the file, the callback function throws an error.

### Promises for Async Operations

Promises are a way of handling async operations in JavaScript. Promises represent a value that may not be available yet, but will be resolved in the future. Promises can be in one of three states: pending, fulfilled, or rejected. Heres an example of using a Promise to fetch data from an API:

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
```

In this example, we use the `fetch()` function to make an HTTP request to an API. The `fetch()` function returns a Promise, which we can chain with `.then()` and `.catch()` methods. The first `.then()` method parses the response body as JSON. The second `.then()` method logs the data to the console. The `.catch()` method logs any errors to the console.

<img src="https://dev-to-uploads.s3.amazonaws.com/i/34m9mus03v2zo9agn2bq.png"/>

### Using Async/Await for Simplifying Async Code

Async/await is a way of handling async operations in JavaScript that allows you to write asynchronous code that looks like synchronous code. Here's an example of using async/await to fetch data from an API:

```js
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

fetchData()
```

In this example, we define an async function called `fetchData()` that uses the await keyword to wait for the Promise returned by `fetch()` to resolve. We then use the await keyword again to wait for the Promise returned by response.json() to resolve. We can then use the retrieved data as if it were synchronous code. The try...catch block allows us to handle any errors that may occur during the async operation.

Heres another example that uses async/await to read a file:

```js
const fs = require("fs")

async function readFile() {
  try {
    const data = await fs.promises.readFile("file.txt", "utf-8")
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

readFile()
```

In this example, we use the `fs.promises.readFile()` function to read a file asynchronously. We define an async function called `readFile()` that uses the await keyword to wait for the Promise returned by `fs.promises.readFile()` to resolve. We can then use the retrieved data as if it were synchronous code. The try...catch block allows us to handle any errors that may occur during the async operation.

Async/await is a powerful tool for simplifying async code and making it easier to read and understand.

Good Reads:

- https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
- https://dmitripavlutin.com/javascript-closure/
- https://blog.hubspot.com/website/javascript-closure
- https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
