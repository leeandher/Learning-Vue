# Vue.js Fundamentals (March 2019)

**Vue.js** is an open-source front-end framework for JavaScript developed by Evan You back in February 2014. These notes are barely going to scratch the surface at all, but are a good reference on how to get up and running if you've never used Vue before this point. That being said, this isn't a good note if you want to see advanced use-cases, or see nifty cool things it can do, but we'll get there eventually.

---

## Getting Started

By far, the easiest way to start programming with Vue, is to just add it as a static script tag to your base `.html` webpage using a CDN:

```html
<script src="https://unpkg.com/vue"></script>
```

With just that, you can now start putting your Vue code into it's own `<script/>` tag anywhere after that import. To setup our Vue instance, we simply use it's constructor:

```js
const MyNewApp = new Vue({
  //some Vue shenanigans
})
```

Congrats, you have a new Vue instance up and running!

---

## Properties

There's ~~probably~~ definitely a bunch more properties on the Vue instance we can access, but for this note, I'm only going to discuss:

- `el`
- `data`
- `computed`
- `methods`

They ~~are~~ might be the fundamentals (I really don't know much about Vue yet, I just started learning). We'll go through them one-by-one.

---

## El

'El' is short for 'Element', which tells Vue which DOM element to mount the application onto. The Vue instance (with all it's data and DOM manipulation) will control the children of this element. This can be any element you like, but keep in mind that you won't be able to dynamically access anything of your Vue shenanigans from sibling/parent elements to the one you specify.

Here's an example:

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/vue"></script>
  <script>
    new Vue({
      el: '#root'
    })
  </script>
</html>
```

---

## Data

The `data` property contains all the data that we want this page of our application to have access to. Since Vue was made by smart developers, the simple import lets it speak directly to our DOM, and access our data via _templates_, and makes our app _reactive_.

That means that our data determines our webpage, and any modification to our data will re-render our page using a Virtual DOM to optimize/minimize the amount of real DOM manipulations.

Our data is passed directly into our application, and we can access it using the _double moustache_ syntax. We just wrap the property we want to read with `{{}}`, and Vue will do the heavy lifting to render it out at runtime. It should be noted though, you can only pass in _one expression_, similar to React. You know what that means, no semi-colons for expressions, no if statements, and lots of ternaries.

We can access any of our data using a special system of tags known as **directives**. There are way too many of these guys to go through each one of them without copy/pasting documentation, so we'll just talk about a few, and how they work. A _directive_ in Vue looks very similar to a standard HTML attribute, except that it begins with `v-`, to tell our Vue instance to treat that DOM element as special, depending on the type of directive.

For example, if we use the **v-model** directive on an `<input>` tag, we can enable two-way data-binding with our Vue with some property of data we pass to it. Check out this example:

```html
<h1>The value is {{someCoolProperty}}</h1>
<input v-model="someCoolProperty" />
<script>
  new Vue({
    data: {
      someCoolProperty: 'default!'
    }
  })
</script>
```

In the DOM, we'll see a title of `The value is default!`, with an input filled out already containing `default!`. Our data filled out the template! The cooler part, is that the `v-model` directive's two-way data-binding, lets us type whatever we want into the `input` and it'll automatically refresh/re-render our `h1` header, since we're actually modifying the application's data. We'll talk more about specific directives later on!

---

## Methods

---

## Computed

---

## Directives

v-for: loops
v-bind: events

### Event Handling

every js event is handled (hover click, etc)

### Class Syntax

object class syntax

`:class="{strikeout: item.completed}"`

- obj prop is the name of the class to toggle
- value is conditional connected to

Array class syntax

`:class="[item.completed ? 'strikeout' : '']`

- ternary based on conditional
- default classes can be added as default elements of ar as a seperate property

### Shorthand

@ = v-on
: = v-bind

---
