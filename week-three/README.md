### Week 4 - Advance CSS

- Introduction to Advanced CSS
  - Understanding CSS layouts in depth
  - Importance of CSS in modern web development
- CSS Grid Layout
  - Understanding the Grid Container & Grid Items
  - Setting up Grid Columns & Rows
  - Spanning & Placing Grid Items
  - Implicit & Explicit Grid Tracks
  - Using Grid Templates
  - Grid Gap & Grid Auto Flow
- CSS Flexbox Layout
  - Understanding Flexbox Containers & Items
  - Setting Flexbox Properties for the Container
  - Setting Flexbox Properties for the Items
  - Flexbox Flow Direction, Alignment & Sizing
  - Flexbox Wrap & Order

#### Introduction to Advanced CSS

##### Understanding CSS layouts in depth

CSS is a language that is used to style web pages. It is a language that is used to describe the presentation of web pages. It is a language that is used to describe the layout of web pages. It is a language that is used to describe the design of web pages. It is a language that is used to describe the look and feel of web pages. It is a language that is used to describe the appearance of web pages. It is a language that is used to describe the behavior of web pages. It is a language that is used to describe the structure of web pages. It is a language that is used to describe the content of web pages. It is a language that is used to describe the style of web pages. It is a language that is used to describe the color of web pages. It is a language that is used to describe the font of web pages. It is a language that is used to describe the size of web pages. It is a language that is used to describe the position of web pages. It is a language that is used to describe the spacing of web pages. It is a language that is used to describe the margin of web pages. It is a language that is used to describe the padding of web pages. It is a language that is used to describe the border of web pages. It is a language that is used to describe the background of web pages. It is a language that is used to describe the animation of web pages. It is a language that is used to describe the transition of web pages. It is a language that is used to describe the transform of web pages. It is a language that is used to describe the perspective of web pages. It is a language that is used to describe the perspective-origin of web pages. It is a language that is used to describe the backface-visibility of web pages. It is a language that is used to describe the animation-delay of web pages. It is a language that is used to describe the animation-direction of web pages. It is a language that is used to describe the animation-duration of web pages. It is a language that is used to describe the animation-fill-mode of web pages. It is a language that is used to describe the animation-iteration-count of web pages. It is a language that is used to describe the animation-name of web pages. It is a language that is used to describe the animation-play-state of web pages. It is a language that is used to describe the animation-timing-function of web pages. It is a language that is used to describe the animation of web pages. It is a language that is used to describe the transition-delay of web pages. It is a language that is used to describe the transition-duration of web pages. It is a language that is used to describe the transition-property of web pages. It is a language that is used to describe the transition-timing-function of web pages. It is a language that is used to describe the transform of web pages.

### CSS Grid Layout

CSS Grid Layout is a powerful tool for creating complex layouts on the web. It allows you to easily define a grid container and place grid items within it. With CSS Grid, you can create both rows and columns and specify their size, position, and order.

#### Understanding the Grid Container & Grid Items

To create a grid layout, you first need to define a container element and set its display property to "grid". This container will become the grid parent element, and all of its direct children will be grid items.

```
.container {
  display: grid;
}
```

By default, all grid items will be placed in a single cell of the grid. To control where they appear, you can use grid-specific properties like "grid-row" and "grid-column".

#### Setting up Grid Columns & Rows

To define the columns and rows of your grid, you can use the "grid-template-columns" and "grid-template-rows" properties, respectively. These properties take a series of values, separated by spaces or commas, that specify the size of each grid track.

```
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 100px 50px;
}
```

In this example, we've created a grid with three columns of equal width (using "fr" units) and three rows with different heights.

#### Spanning & Placing Grid Items

To place grid items in specific cells of the grid, you can use the "grid-row-start", "grid-row-end", "grid-column-start", and "grid-column-end" properties. Alternatively, you can use the shorthand "grid-area" property to specify all four values at once.

```
.item {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;
}
```

In this example, we've positioned a grid item in the second and third rows and the second to fourth columns.

#### Implicit & Explicit Grid Tracks

When you add grid items to your layout, the grid will automatically create new grid tracks as needed to accommodate them. These are known as implicit grid tracks. You can also define explicit grid tracks that aren't associated with any particular grid item.

```
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-auto-columns: 50px;
    grid-auto-rows: 100px;
}
```

In this example, we've defined two explicit columns and two explicit rows, and also set a size for the implicit grid tracks that will be created when new items are added.

#### Using Grid Templates

CSS Grid provides several shorthand properties for defining grid templates, including "grid-template" (which combines "grid-template-rows" and "grid-template-columns"), "grid-template-areas" (which lets you define the layout of the grid using named grid areas), and "grid-template-columns" (which lets you specify the width of each column using a repeat() function).

```

.container {
    display: grid;
    grid-template:
    "header header header" 50px
    "nav main aside" 1fr
    "footer footer footer" 50px /
    1fr 3fr 1fr;
}
```

In this example, we've used a grid template to create a layout with a header, navigation, main content area, and sidebar.

#### Grid Gap & Grid Auto Flow

The "grid-gap" property is a shorthand for "grid-row-gap" and "grid-column-gap". It lets you specify the size of the gap between rows and columns in your grid.

```
.container {
    display: grid;
    grid-gap: 10px;
}
```

In this example, we've added a 10px gap between all grid items. You can also use "grid-row-gap" and "grid-column-gap" to specify different gaps for rows and columns.

Finally, the "grid-auto-flow" property controls how new grid items are placed within the grid. The default value is "row", which means that new items will be added to the next available row. However, you can also set it to "column" to add items to the next available column instead.

```
.container {
    display: grid;
    grid-auto-flow: column;
}
```

In this example, we've changed the auto flow to "column", so new items will be added to the next available column instead of the next available row.

CSS Grid Layout is a powerful tool for creating complex layouts on the web. With just a few lines of CSS, you can define a grid container, specify its columns and rows, and place grid items exactly where you want them. By combining these techniques with other CSS properties and features, you can create sophisticated, responsive designs that work on any device.

### CSS Flexbox Layout

CSS Flexbox Layout is a powerful tool for creating flexible and responsive layouts on the web. It allows you to easily control the size, position, and flow of elements within a container. In this section, we'll cover the basics of Flexbox layout and how to use it to create dynamic designs.

Understanding Flexbox Containers & Items
The first thing to understand about Flexbox layout is that it works with two types of elements: containers and items. The container is the parent element that holds all the child elements or items. The items are the child elements that are laid out within the container.

```
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

In this example, the "container" is the parent element and the "items" are the child elements.

Setting Flexbox Properties for the Container
To create a Flexbox layout, you need to set the "display" property of the container to "flex". This tells the browser to treat the container as a Flexbox container.

```
.container {
    display: flex;
}
```

You can also use the "flex-direction" property to control the flow direction of the items within the container. The default value is "row", which means that the items are laid out from left to right. You can set it to "column" to lay out the items from top to bottom.

```
.container {
    display: flex;
    flex-direction: column;
}
```

In this example, the items are laid out vertically instead of horizontally.

Setting Flexbox Properties for the Items
Once you've set up the container as a Flexbox container, you can use Flexbox properties to control the size, position, and flow of the items within the container.

The "flex-grow" property controls how much the item should grow to fill the available space. The default value is 0, which means that the item will not grow. You can set it to a value greater than 0 to make the item grow proportionally to the other items.

```
.item {
    flex-grow: 1;
}
```

In this example, all the items will grow to fill the available space equally.

The "flex-shrink" property controls how much the item should shrink when there is not enough space available. The default value is 1, which means that the item will shrink proportionally to the other items. You can set it to 0 to prevent the item from shrinking.

```
.item {
    flex-shrink: 0;
}
```

In this example, all the items will maintain their original size and not shrink.

The "flex-basis" property sets the initial size of the item before it grows or shrinks. By default, it is set to "auto", which means that the item will take its size from its content. You can set it to a specific value or a percentage to give the item an initial size.

```
.item {
    flex-basis: 50%;
}
```

In this example, all the items will have an initial size of 50% of the available space.

Flexbox Flow Direction, Alignment & Sizing

Flexbox also provides properties to control the flow direction, alignment, and sizing of the items within the container.

The "justify-content" property controls the horizontal alignment of the items within the container. The default value is "flex-start", which means that the items are aligned to the left. You can set it to "center" to center the items, "flex-end" to align them to the right, or "space-between" to distribute the items evenly along the main axis.

```
.container {
    display: flex;
    justify-content: center;
}
```

In this example, the items are centered within the container.

The "align-items" property controls the vertical alignment of the items within the container. The default value is "stretch", which means that the items are stretched to fill the height of the container. You can set it to "center" to center the items, "flex-start" to align them to the top, or "flex-end" to align them to the bottom.

```
.container {
    display: flex;
    align-items: center;
}
```

In this example, the items are centered vertically within the container.

The "align-self" property allows you to override the vertical alignment of an individual item within the container.

```
.item {
    align-self: flex-end;
}
```

In this example, the item will be aligned to the bottom of the container.

The "flex-wrap" property controls whether the items should wrap to a new line if there is not enough space. The default value is "nowrap", which means that the items will not wrap. You can set it to "wrap" to allow the items to wrap to a new line.

```

.container {
    display: flex;
    flex-wrap: wrap;
}

```

In this example, the items will wrap to a new line if there is not enough space.

Flexbox Wrap & Order
Flexbox also provides a property to control the order in which the items are laid out within the container.

The "order" property allows you to specify the order of an individual item within the container.

```
.item {
    order: 1;
}
```

In this example, the item will be laid out after all the other items with an order value of 0.

Overall, CSS Flexbox Layout provides a powerful set of tools for creating flexible and responsive layouts on the web. By understanding the properties and how they work together, you can create dynamic designs that adapt to different screen sizes and devices.

Good to Read:

- https://www.w3schools.com/css/css3_flexbox.asp
- https://www.w3schools.com/css/css\_grid.asp
- https://blog.logrocket.com/css-flexbox-vs-css-grid/
- https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
- https://blog.hubspot.com/website/css-grid-vs-flexbox

Games for CSS

- https://flukeout.github.io/
- https://rupl.github.io/unfold/
- https://cssgridgarden.com/
- https://flexboxfroggy.com/
- https://cssbattle.dev/
- https://cssgridgarden.com/
- https://css-diner.netlify.com/
