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
