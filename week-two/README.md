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
  - CSS Pseudo-Classes & Elements Properties
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

    ```css
    p {
      color: red;
    }

    .class {
      color: red;
    }

    #id {
      color: red;
    }

    h1, h2, h3 {
      color: red;
    }

    ```

### CSS Properties

CSS properties are used to set the style of HTML elements. CSS properties are always specified inside a CSS rule-set. A CSS rule-set consists of a selector and a declaration block:

    ```css
    selector {
      property: value;
    }
    ```

### CSS Values

CSS values are used to set the style of HTML elements. CSS values are always specified inside a CSS rule-set. A CSS rule-set consists of a selector and a declaration block:

    ```css
    selector {
      property: value;
    }
    ```

### CSS Box Model Properties

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

    ```css
    selector {
      width: 100px;
      height: 100px;
      padding: 10px;
      border: 5px solid #333;
      margin: 20px;
    }
    ```

### CSS Text Properties

The CSS text properties allow you to control the appearance of text.

    ```css
    selector {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      word-spacing: 4px;
    }
    ```

### Color & Backgrounds

The CSS color properties allow you to control the color of text and background.

    ```css
    selector {
      color: #333;
      background-color: #f4f4f4;
    }
    ```

### Color Values

The CSS color values allow you to control the color of text and background.

    ```css
    selector {
      color: rgb(255, 99, 71);
      color: rgba(255, 99, 71, 0.5);
      color: #ff6347;
      color: hsl(9, 100%, 64%);
      color: hsla(9, 100%, 64%, 0.5);
    }
    ```

### CSS Background Properties

The CSS background properties allow you to control the color of text and background.

    ```css
    selector {
      background-image: url("img_tree.png");
      background-repeat: no-repeat;
      background-position: right top;
      background-attachment: fixed;
      background-size: 50% 100%;
    }
    ```

### Pseudo-Classes & Elements

The CSS pseudo-classes and pseudo-elements allow you to control the style of specific parts of an element.

    ```css
    selector {
      color: #333;
      background-color: #f4f4f4;
    }
    ```

### Transitions & Animations

The CSS transitions and animations allow you to control the style of specific parts of an element.

    ```css
    selector {
      color: #333;
      background-color: #f4f4f4;
    }
    ```

### Best Practices & Debugging

The CSS best practices and debugging allow you to control the style of specific parts of an element.

    ```css
    selector {
      color: #333;
      background-color: #f4f4f4;
    }
    ```
