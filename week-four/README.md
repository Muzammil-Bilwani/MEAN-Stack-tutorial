# Week Four - Lets learn Tailwind and make our life easier

<br/>

<p align="center">
  <a href="https://tailwindcss.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" width="350" height="70" style="max-width: 100%;">
    </picture>
  </a>
</p>

<br/>

## What is Tailwind?

Tailwind is a utility-first CSS framework for rapidly building custom user interfaces. It's completely customizable, completely accessible, and as low-level or high-level as you need it to be.

## Why Tailwind?

Rapidly build modern websites without ever leaving your HTML.

A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1623301804718/iorBir8lN.gif?auto=format,compress&gif-q=60&format=webm" width="100%" />

## How to use Tailwind?

### Installation

```bash
npm install tailwindcss
```

or

```bash
yarn add tailwindcss
```

or add as a CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- ADD HERE -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!--  -->
  </head>
  <body>
    <!-- APPLY LIKE THIS -->
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

More ways to install can check here [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

## Editor Setup

Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.

### IntelliSense for VS Code

The official Tailwind CSS IntelliSense extension for Visual Studio Code enhances the Tailwind development experience by providing users with advanced features such as autocomplete, syntax highlighting, and linting.

<img src="https://tailwindcss.com/_next/static/media/intellisense.c22de782.png"/>
<br/>

- _Autocomplete_. Intelligent suggestions for class names, as well as CSS functions and directives.
- _Linting_. Highlights errors and potential bugs in both your CSS and your markup.
- _Hover Previews_. See the complete CSS for a Tailwind class name by hovering over it.
- _Syntax Highlighting._ Provides syntax definitions so that Tailwind features are highlighted correctly.

### Example for Tailwind CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="m-24">
    <h1 class="text-4xl font-bold text-center text-blue-500">
      Welcome to My Website
    </h1>
    <h2 class="text-2xl font-semibold text-gray-800">About Us</h2>
    <p class="text-lg text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus,
      est vel scelerisque bibendum, mi enim elementum odio, vel faucibus nibh
      nibh ut quam. Sed ut justo euismod, bibendum quam a, rhoncus eros.
    </p>
    <h2 class="text-2xl font-semibold text-gray-800 mt-8">Our Services</h2>
    <ul class="list-disc pl-8">
      <li class="text-lg text-gray-600">Service 1</li>
      <li class="text-lg text-gray-600">Service 2</li>
      <li class="text-lg text-gray-600">Service 3</li>
    </ul>
  </body>
</html>
```

In this example, we're using a few of the many utility classes available in Tailwind CSS to style the headings in our HTML document. Here's a breakdown of what each class does:

- `text-4xl`: Sets the font size of the h1 element to 4xl (equivalent to 2.25rem or 36px).
- `font-bold`: Makes the text of the h1 element bold.
- `text-center`: Centers the text of the h1 element horizontally.
- `text-blue-500`: Sets the text color of the h1 element to a shade of blue with a 500 opacity value.
- `text-2xl`: Sets the font size of the h2 elements to 2xl (equivalent to 1.5rem or 24px).
- `font-semibold`: Makes the text of the h2 elements semi-bold.
- `text-gray-800`: Sets the text color of the h2 elements to a shade of gray with an 800 opacity value.
- `text-lg`: Sets the font size of the p and li elements to lg (equivalent to 1.125rem or 18px).
- `text-gray-600`: Sets the text color of the p and li elements to a shade of gray with a 600 opacity value.
- `mt-8`: Adds a margin top of 8 to the second h2 element.

Using utility classes like this allows us to quickly and easily style our HTML elements without having to write custom CSS. By combining multiple classes, we can create complex styles and layouts with minimal effort.

_Output_

<img src="https://raw.githubusercontent.com/Muzammil-Bilwani/MEAN-Stack-tutorial/main/week-four/outpul.png"/>

### Best way to learn Tailwind CSS

Tailwind can be easily learn by its documentation and by watching videos. I have listed some of the best videos to learn Tailwind CSS.

[Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME)

---

For full documentation, visit [tailwindcss.com](https://tailwindcss.com/).

For cheat sheet visit [tailwind-cheat-sheet](https://tailwindcomponents.com/cheatsheet/)
