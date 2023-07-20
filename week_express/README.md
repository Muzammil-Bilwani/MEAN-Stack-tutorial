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
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
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












