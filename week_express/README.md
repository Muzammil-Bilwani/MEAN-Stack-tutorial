## Week Express JS / Node JS

### NodeJS

- NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- NodeJS is an open source, cross-platform runtime environment for developing server-side and networking applications.
- NodeJS applications are written in JavaScript, and can be run within the NodeJS runtime on OS X, Microsoft Windows, and Linux.
- NodeJS also provides a rich library of various JavaScript modules which simplifies the development of web applications using NodeJS to a great extent.

### ExpressJS

- ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.
- ExpressJS is the most popular NodeJS framework.

### Installation

- Install NodeJS from [here](https://nodejs.org/en/download/)
- Install ExpressJS from [here](https://expressjs.com/en/starter/installing.html)

### Get Started

- Create a folder named `express_start` or any name.
- Open the folder in VS Code.
- Open the terminal and type `npm init` or `yarn init` and press enter.
- It will ask you some questions, you can skip them by pressing enter.
- After that, it will create a `package.json` file.
- Now, install express by typing `npm install express --save` or `yarn add express` and press enter.
- It will install express and save it in `package.json` file.
- Now, create a file named `index.js` or any name.
- Open the file and type the following code:

```js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
```

- Now, open the terminal and type `node index.js` and press enter.
- It will start the server on port 3000.

#### Nodemon

- Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- To install nodemon, open the terminal and type `npm install nodemon --save-dev` or `yarn add nodemon --dev` and press enter.
- Now, open the `package.json` file and add the following code:

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

- Now, open the terminal and type `npm run dev` or `yarn dev` and press enter.
- It will start the server on port 3000.

## Express JS

### REST API

- REST stands for Representational State Transfer.
- REST is web standards based architecture and uses HTTP Protocol.
- It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.
- REST was first introduced by Roy Fielding in 2000.
- A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol.
- Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML. JSON is the most popular one.
- REST follows the object-oriented programming paradigm of noun-verb.

#### HTTP Methods

- GET - GET is used to request data from a specified resource.
- POST - POST is used to send data to a server to create/update a resource.
- PUT - PUT is used to send data to a server to create/update a resource.
- DELETE - DELETE is used to delete a specified resource.

### Routing

- Routing refers to how an application’s endpoints (URIs) respond to client requests.
- You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.
- Express supports methods that correspond to all HTTP request methods: get, post, and so on.
- There is a special routing method, app.all(), which is not derived from any HTTP method. This method is used for loading middleware functions at a path for all request methods.

#### Route Methods

- Route methods are derived from the HTTP methods, and they are attached to an instance of the express class.
- The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.

```js
// GET method route
app.get("/", function (req, res) {
  res.send("GET request to the homepage")
})

// POST method route
app.post("/", function (req, res) {
  res.send("POST request to the homepage")
})
```

#### Route Paths

- Route paths, in combination with a request method, define the endpoints at which requests can be made.
- Route paths can be strings, string patterns, or regular expressions.
- The characters ?, +, \*, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
- If you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]).
- Express uses path-to-regexp for matching the route paths; see the path-to-regexp documentation for all the possibilities in defining route paths.
- Here are some examples of route paths based on strings.

```js
// This route path will match requests to the root route, /.
app.get("/", function (req, res) {
  res.send("root")
})

// This route path will match requests to /about.
app.get("/about", function (req, res) {
  res.send("about")
})

// This route path will match requests to /random.text.
app.get("/random.text", function (req, res) {
  res.send("random.text")
})
```

#### Route Parameters

- Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
- The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
- Route path: /users/:userId/books/:bookId
- Request URL: http://localhost:3000/users/34/books/8989
- req.params: { "userId": "34", "bookId": "8989" }

```js
app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params)
})
```

#### Route Handlers

- You can provide multiple callback functions that behave like middleware to handle a request.
- The only exception is that these callbacks might invoke next('route') to bypass the remaining route callback(s).
- You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

```js
// A route handler can be in the form of a function, an array of functions, or combinations of both, as shown in the following examples.

// A single callback function can handle a route. For example:

app.get("/example/a", function (req, res) {
  res.send("Hello from A!")
})

// More than one callback function can handle a route (make sure you specify the next object). For example:

app.get(
  "/example/b",
  function (req, res, next) {
    console.log("the response will be sent by the next function ...")
    next()
  },
  function (req, res) {
    res.send("Hello from B!")
  }
)

// An array of callback functions can handle a route. For example:

var cb0 = function (req, res, next) {
  console.log("CB0")
  next()
}

var cb1 = function (req, res, next) {
  console.log("CB1")
  next()
}

var cb2 = function (req, res) {
  res.send("Hello from C!")
}

app.get("/example/c", [cb0, cb1, cb2])

// A combination of independent functions and arrays of functions can handle a route. For example:

var cb0 = function (req, res, next) {
  console.log("CB0")
  next()
}

var cb1 = function (req, res, next) {
  console.log("CB1")
  next()
}

app.get(
  "/example/d",
  [cb0, cb1],
  function (req, res, next) {
    console.log("the response will be sent by the next function ...")
    next()
  },
  function (req, res) {
    res.send("Hello from D!")
  }
)
```

#### Response Methods

- The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

| Method         | Description                              |
| -------------- | ---------------------------------------- |
| res.download() | Prompt a file to be downloaded.          |
| res.end()      | End the response process.                |
| res.json()     | Send a JSON response.                    |
| res.jsonp()    | Send a JSON response with JSONP support. |
| res.redirect() | Redirect a request.                      |
| res.render()   | Render a view template.                  |

#### app.route()

- You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos.

```js
app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book")
  })
  .post(function (req, res) {
    res.send("Add a book")
  })
  .put(function (req, res) {
    res.send("Update the book")
  })
```

#### express.Router

- Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

```js
// The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

// Create a router file named birds.js in the app directory, with the following content:

var express = require("express")
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now())
  next()
})

// define the home page route

router.get("/", function (req, res) {
  res.send("Birds home page")
})

// define the about route

router.get("/about", function (req, res) {
  res.send("About birds")
})

module.exports = router

// Then, load the router module in the app:

var birds = require("./birds")

// ...

app.use("/birds", birds)
```

#### express.static()

- To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
- The function signature is:

```js
express.static(root, [options])
```

- The root argument specifies the root directory from which to serve static assets.
- The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, allowing for stacking and fall-backs.
- For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

```js
app.use(express.static("public"))
```

- Now, you can load the files that are in the public directory:

```js
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js

// To use multiple static assets directories, call the express.static middleware function multiple times:

app.use(express.static("public"))
app.use(express.static("files"))

// To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:

app.use("/static", express.static("public"))

// Now, you can load the files that are in the public directory from the /static path prefix.

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
```

#### app.use()

- Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
- The path for which the middleware function is invoked is stripped off the request URL.
- Multiple middleware functions can be mounted at a single path, as shown in the following example.

```js
// This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

app.use("/user/:id", function (req, res, next) {
  console.log("Request Type:", req.method)
  next()
})
```

#### app.all()

- This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.
- This method is extremely useful for mapping “global” logic for specific path prefixes or arbitrary matches. For example, if you put the following at the top of all other route definitions, it ensures that all routes starting with /user/:id are under authorization, and automatically load the user. Keep in mind that these callbacks do not have to act as end-points: loadUser can perform a task, then call next() to continue matching subsequent routes.

```js
app.all("/user/:id", function (req, res, next) {
  console.log("Accessing the secret section ...")
  next() // pass control to the next handler
})
```

#### app.listen()

- Binds and listens for connections on the specified host and port. This method is identical to Node’s http.Server.listen().
- The app returned by express() is in fact a JavaScript Function, designed to be passed to Node’s HTTP servers as a callback to handle requests. This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does not inherit from these (it is simply a callback):

```js
var express = require("express")
var https = require("https")
var http = require("http")
var app = express()

http.createServer(app).listen(80)
https.createServer(options, app).listen(443)
```

### Authentication and Authorization

- Authentication is the process of ascertaining that somebody really is who he claims to be.
- Authorization refers to rules that determine who is allowed to do what.
- Express provides a lightweight middleware for basic authentication.
- To use it, you need to provide a username and password and set the auth property of the request header to Basic.
- The username and password are concatenated with a colon (aladdin:opensesame).
- The resulting string is then encoded using Base64.

#### JWT Authentication

- JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- This information can be verified and trusted because it is digitally signed.
- JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
- Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens.
- Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.
- When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

#### Code Example for JWT

```js
const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API"
  })
})

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: "Post created...",
        authData
      })
    }
  })
})

function createJWTToken(user) {
  // create token
}

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "brad",
    email: ""
  }

  checkUser(user)

  res.json({
    token: createJWTToken(user)
  })
})

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"]
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ")
    // Get token from array
    const bearerToken = bearer[1]
    // Set the token
    req.token = bearerToken
    // Next middleware
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }
}

app.listen(5000, () => console.log("Server started on port 5000"))
```

#### Passport

- Passport is Express-compatible authentication middleware for Node.js.
- Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies.
- Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer.
- The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.
