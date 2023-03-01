## Week 3 -- Beauty is CSS - Basic CSS

- What is CSS
  - The relationship between HTML & CSS
  - The role of CSS in web design
  - The syntax of CSS rules
- CSS Selectors
  - Element Selectors, Class Selectors, ID Selectors
- CSS Properties
  - Common properties for text, color, background, margin, padding, border, etc.
- CSS Values
  - Length units, color codes, keywords, etc.
- CSS Box Model Properties
  - Content, Padding, Border, Margin
  - width, height, border-width, padding, margin
  - Static, Relative, Absolute, Fixed, Flex, Grid
- CSS Text Properties
  - font-family, font-size, line-height, text-align, etc.
  - Web Fonts & Google Fonts
- Color & Backgrounds
  - CSS Color Properties
    - color, background-color, etc.
- Color Values
  - RGB, RGBA, HEX, HSL, etc.
- CSS Background Properties
  - background-image, background-repeat, etc.
- Pseudo-Classes & Elements
  - Understanding Pseudo-Classes & Elements
    - :hover, :active, :focus, :first-child, etc.
- Transitions & Animations
  - CSS Transitions
    - transition-property, transition-duration, transition-timing-function, etc.
- CSS Animations
  - @keyframes, animation-name, animation-duration, etc.
- Best Practices & Debugging
  - Code Organization & Reusability
  - Debugging CSS with DevTools

### What is CSS

CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.

### The relationship between HTML & CSS

HTML is the structure of the page. CSS is the design of the page. HTML is the content of the page. CSS is the presentation of the page. HTML is the skeleton of the page. CSS is the skin of the page.

### The role of CSS in web design

CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

### The syntax of CSS rules

A CSS rule-set consists of a selector and a declaration block:

    ```css
    selector {
    property: value;
    }
    ```

### CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

#### Element Selectors

Element selectors select elements based on the element name.

    ```css
    p {
    color: red;
    }
    ```

#### Class Selectors

Class selectors select elements with a specific class attribute.

    ```css
    .center {
    text-align: center;
    }
    ```

#### ID Selectors

ID selectors select elements with a specific id attribute.

    ```css
    #intro {
    color: blue;
    }
    ```

### CSS Properties

CSS properties are used to set the different parts of an element's style.

#### Common properties for text, color, background, margin, padding, border, etc.

    ```css
    p {
    color: red;
    background-color: yellow;
    margin: 20px;
    padding: 30px;
    border: 1px solid black;
    }
    ```

### CSS Values

CSS values are used to set the different parts of an element's style.

#### Length units, color codes, keywords, etc.

CSS Length Unit

- px - pixels
- em - relative to the font-size of the element (2em means 2 times the size of the current font)
- rem - relative to font-size of the root element
- % - relative to the parent element
- vw - relative to 1% of the width of the viewport
- vh - relative to 1% of the height of the viewport
- vmin - relative to 1% of viewport's smaller dimension
- vmax - relative to 1% of viewport's larger dimension

Color Codes

- #ff0000 - red
- #00ff00 - green
- #0000ff - blue
- #ffff00 - yellow
- #00ffff - cyan
- #ff00ff - magenta
- #ffffff - white
- #000000 - black

- RGB - rgb(255,0,0)
- RGBA - rgba(255,0,0,0.5)
- HSL - hsl(0,100%,50%)
- HSLA - hsla(0,100%,50%,0.5)
- HEX - #ff0000
- Color Keywords - red, green, blue, yellow, cyan, magenta, white, black

### CSS Box Model Properties

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

#### Content, Padding, Border, Margin

Margin - Clears an area outside the border. The margin is transparent.
Padding - Clears an area around the content. The padding is transparent.
Border - A border that goes around the padding and content.

#### Static, Relative, Absolute, Fixed, Flex, Grid

- Static - The default value. An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page.
- Relative - An element with position: relative; is positioned relative to its normal position.
- Absolute - An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- Fixed - An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
- Flex - An element with display: flex; is a flexible container, providing a flexible way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.
- Grid - An element with display: grid; is a grid container, providing a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

### CSS Text Properties

#### Font family, size

Font family - Specifies the font family for text.

    ```css
    p {
    font-family: "Times New Roman", Times, serif;
    }
    ```

More Read here:

- https://www.w3schools.com/cssref/css_websafe_fonts.asp

How to use Fonts

    ```css
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    ```

Where to find fonts?

- https://fonts.google.com/
- https://fonts.adobe.com/

#### Line height

Line height - Specifies the line height.

    ```css
    p {
    line-height: 30px;
    }
    ```

#### Text align

Text align - Specifies the horizontal alignment of text.

    ```css
    p {
    text-align: center;
    }
    ```

#### Text transform

Text transform - Specifies how to capitalize text.

    ```css
    p {
    text-transform: uppercase;
    }
    ```

### Pseudo-Classes & Elements

#### Understanding Pseudo-Classes & Elements

Pseudo-classes are used to define a special state of an element.

    ```css
    a:link {
    color: #FF0000;
    }
    ```

| Selector             | Example               | Example description                                                                                  |     |     |
| -------------------- | --------------------- | ---------------------------------------------------------------------------------------------------- | --- | --- |
| :active              | a:active              | Selects the active link                                                                              |     |     |
| :checked             | input:checked         | Selects every checked `<input>` element                                                              |     |     |
| :disabled            | input:disabled        | Selects every disabled `<input>` element                                                             |     |     |
| :empty               | p:empty               | Selects every `<p>` element that has no children                                                     |     |     |
| :enabled             | input:enabled         | Selects every enabled `<input>` element                                                              |     |     |
| :first-child         | p:first-child         | Selects every `<p>` elements that is the first child of its parent                                   |     |     |
| :first-of-type       | p:first-of-type       | Selects every <p> element that is the first `<p>` element of its parent                              |     |     |
| :focus               | input:focus           | Selects the <input> element that has focus                                                           |     |     |
| :hover               | a:hover               | Selects links on mouse over                                                                          |     |     |
| :in-range            | input:in-range        | Selects <input> elements with a value within a specified range                                       |     |     |
| :invalid             | input:invalid         | Selects all <input> elements with an invalid value                                                   |     |     |
| :lang(language)      | p:lang(it)            | Selects every <p> element with a lang attribute value starting with "it"                             |     |     |
| :last-child          | p:last-child          | Selects every <p> elements that is the last child of its parent                                      |     |     |
| :last-of-type        | p:last-of-type        | Selects every <p> element that is the last <p> element of its parent                                 |     |     |
| :link                | a:link                | Selects all unvisited links                                                                          |     |     |
| :not(selector)       | :not(p)               | Selects every element that is not a <p> element                                                      |     |     |
| :nth-child(n)        | p:nth-child(2)        | Selects every <p> element that is the second child of its parent                                     |     |     |
| :nth-last-child(n)   | p:nth-last-child(2)   | Selects every <p> element that is the second child of its parent, counting from the last child       |     |     |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | Selects every <p> element that is the second <p> element of its parent, counting from the last child |     |     |
| :nth-of-type(n)      | p:nth-of-type(2)      | Selects every <p> element that is the second <p> element of its parent                               |     |     |
| :only-of-type        | p:only-of-type        | Selects every <p> element that is the only <p> element of its parent                                 |     |     |
| :only-child          | p:only-child          | Selects every <p> element that is the only child of its parent                                       |     |     |
| :optional            | input:optional        | Selects <input> elements with no "required" attribute                                                |     |     |
| :out-of-range        | input:out-of-range    | Selects <input> elements with a value outside a specified range                                      |     |     |
| :read-only           | input:read-only       | Selects <input> elements with a "readonly" attribute specified                                       |     |     |
| :read-write          | input:read-write      | Selects <input> elements with no "readonly" attribute                                                |     |     |
| :required            | input:required        | Selects <input> elements with a "required" attribute specified                                       |     |     |
| :root                | root                  | Selects the document's root element                                                                  |     |     |
| :target              | #news:target          | Selects the current active #news element (clicked on a URL containing that anchor name)              |     |     |
| :valid               | input:valid           | Selects all <input> elements with a valid value                                                      |     |     |
| :visited             | a:visited             | Selects all visited links                                                                            |     |     |

### Transitions & Animations

#### Understanding Transitions & Animations

Transitions - A transition effect lets an element gradually change from one style to another.

_How to Use CSS Transitions?_
To create a transition effect, you must specify two things:

the CSS property you want to add an effect to
the duration of the effect
Note: If the duration part is not specified, the transition will have no effect, because the default value is 0.

The following example shows a 100px \* 100px red <div> element. The <div> element has also specified a transition effect for the width property, with a duration of 2 seconds:

```
  div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
  }
```

Read more:

- https://www.w3schools.com/css/css3_transitions.asp

### CSS Animations

CSS Animations - CSS animations allow animation of HTML elements without using JavaScript or Flash!

_How to Use CSS Animations?_
To create a CSS animation, you must specify two things:

the CSS properties you want to add an animation to (the animation itself) the duration of the animation (how long it should take to complete one cycle) Note: If the duration part is not specified, the animation will have no effect, because the default value is 0. The following example shows a 100px \* 100px red <div> element. The <div> element has also specified an animation effect for the width property, with a duration of 4 seconds:

```
  div {
    width: 100px;
    height: 100px;
    background: red;
    animation: mymove 4s infinite;
  }

  @keyframes mymove {
    from {left: 0px;}
    to {left: 200px;}
  }

```

Read more:
https://www.w3schools.com/css/css3_animations.asp

Resources to read for CSS

- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://www.w3schools.com/css/default.asp
- https://www.w3.org/Style/CSS/Overview.en.html

Playgrounds

- https://playcode.io/css

Games for CSS

- https://flukeout.github.io/
- https://rupl.github.io/unfold/
- https://cssgridgarden.com/
- https://flexboxfroggy.com/
- https://cssbattle.dev/
- https://cssgridgarden.com/
- https://css-diner.netlify.com/
