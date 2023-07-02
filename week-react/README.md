## Week - Do you know React? Let's learn from the start to advance

### Small Introduction

<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/1.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/2.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/3.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/4.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/5.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/6.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/7.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/8.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/9.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/10.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/11.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/12.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/13.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/14.jpg" >
<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-react/images/15.jpg" >

### Lets get start with setup

- Install Yarn

```bash
npm install --global yarn
```

### Create React with Vite

#### Why Vite?

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

1. A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Read More here:
https://muzammilbilwani.medium.com/why-you-should-prefer-vite-over-create-react-app-cra-5adf3e71771f

#### Create React App with Vite

Guide by Vite:
https://vitejs.dev/guide/

```bash
yarn create vite my-app --template react
```

You can replace `my-app` with your project name

Now run:

```bash
  cd my-app
```

```bash
  yarn
```

```bash
  yarn dev
```

Open your project in your favorite code editor and start coding.

### React Project Structure

- node_modules
  packages installed by yarn or npm
- public
  static files
- src
  - assets
  - components
  - App.js
  - index.js
- .gitignore
- index.html
  index.html is the entry point of your app and it is the only HTML file you need to create.
- package.json
  package.json is the manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). It also includes the list of dependencies to install from yarn when running yarn install.
- README.md
- yarn.lock
  yarn.lock is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. This ensures that all people using your project will get the same set of dependencies.
- vite.config.js
  vite.config.js is the config file for Vite. It is optional and you can delete it if you don’t need it.

### React Components

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

#### Types of Components

There are two types of components in React:

1. Class Components ( Old way of writing components )
2. Functional Components ( New way of writing components )

#### Functional Components

Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.

```js
import React from "react"

const App = () => {
  return <div>Hello World</div>
}

export default App
```

### JSX

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. React elements are then rendered to the DOM.

```js
import React from "react"

const App = () => {
  return <div>Hello World</div>
}

export default App
```

### Props

Props are inputs to a React component. They are data passed down from a parent component to a child component. Props are passed to components via HTML attributes.

```js
import React from "react"

const App = () => {
  return <Greeting name="Muzammil" />
}

const Greeting = (props) => {
  return <div>Hello {props.name}</div>
}

export default App
```

### State

State is a JavaScript object that stores a component’s dynamic data and determines the component’s behavior. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

```js
import React, { useState } from "react"

const App = () => {
  const [name, setName] = useState("Muzammil")

  return (
    <div>
      <Greeting name={name} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
```

### Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

#### Code Example

```js
import React, { useState } from "react"

const App = () => {
  const [name, setName] = useState("Muzammil")

  return (
    <div>
      <Greeting name={name} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
```

### useEffect

The Effect Hook lets you perform side effects in function components:

```js
import React, { useState, useEffect } from "react"

const App = () => {
  const [name, setName] = useState("Muzammil")

  useEffect(() => {
    console.log("Component Mounted")
  }, [])

  return (
    <div>
      <Greeting name={name} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
```

### React Router

React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering.

#### Installation

```bash
yarn add react-router-dom
```

#### Basic Example

```js
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => {
  return <h2>Home</h2>
}

const About = () => {
  return <h2>About</h2>
}

const Users = () => {
  return <h2>Users</h2>
}

export default App
```

### React Context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### Introduction to Context API:

The Context API is a feature in React that allows data to be passed through the component tree without explicitly passing props at every level.
It provides a way to share data between components without the need for intermediate components to pass down props.
Creating a Context:

To create a new context, use the createContext function from the react package.

##### Example:

```jsx
import React from "react"

const MyContext = React.createContext()
```

#### Providing a Context:

To provide data to components that consume the context, wrap the desired components with a Provider component.
The Provider component accepts a value prop, which can be any data or object.
Example:

```jsx
<MyContext.Provider value={data}>
  {/* Components that consume the context */}
</MyContext.Provider>
```

#### Consuming a Context:

To consume the context within a component, use the useContext hook or the Consumer component.
useContext hook example:

```jsx
import React, { useContext } from "react"

function MyComponent() {
  const data = useContext(MyContext)
  // Use the data
  return <div>{data}</div>
}
```

#### Consumer component example:

```jsx
import React from "react"

function MyComponent() {
  return <MyContext.Consumer>{(data) => <div>{data}</div>}</MyContext.Consumer>
}
```

#### Default Value:

You can provide a default value to the context using the defaultValue prop when creating the context. This value is used when a matching Provider is not found in the component tree.
Example:

```jsx
const MyContext = React.createContext("default value")
```

#### Updating the Context:

The data in the context can be updated by modifying the value in the Provider component.
Example:

```jsx
function MyComponent() {
  const [data, setData] = useState("initial value")

  const updateData = () => {
    setData("new value")
  }

  return (
    <MyContext.Provider value={data}>
      <button onClick={updateData}>Update Context</button>
    </MyContext.Provider>
  )
}
```

These are the basic concepts of the React Context API along with some example code. Feel free to modify and expand upon these examples to suit your specific needs.

### React Forms

#### Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

```jsx
import React, { useState } from "react"

const App = () => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
```

#### Uncontrolled Components

In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

For example, this code accepts a single name in an uncontrolled component:

```jsx
import React, { useRef } from "react"

const App = () => {
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
```

#### Controlled vs Uncontrolled Components

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

#### Controlled Components

```jsx
import React, { useState } from "react"

const App = () => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
```

#### Uncontrolled Components

```jsx
import React, { useRef } from "react"

const App = () => {
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
```

### Working with APIs in React

#### Fetching Data with useEffect

```jsx
import React, { useState, useEffect } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default App
```

#### Fetching Data with Axios

```jsx
import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default App
```
