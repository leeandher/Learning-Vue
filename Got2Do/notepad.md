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
      el: "#root",
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
      someCoolProperty: "default!",
    },
  })
</script>
```

In the DOM, we'll see a title of `The value is default!`, with an input filled out already containing `default!`. Our data filled out the template! The cooler part, is that the `v-model` directive's two-way data-binding, lets us type whatever we want into the `input` and it'll automatically refresh/re-render our `h1` header, since we're actually modifying the application's data. We'll talk more about specific directives later on!

---

## Methods

The `methods` property is pretty self-explanatory. You pass it an object containing any of the functions you need your application to have access to. These can be accessed the same way that data is, through the `{{}}` syntax, or via directives. Take a look at the following example:

```html
<p>{{ item.label }} - Due: {{ formatDate(item.createdAt) }}</p>
<script>
  new Vue({
    data: {
      item: {
        label: "Astronomy Test",
        createdAt: new Date(2012, 01, 15),
      },
    },
    methods: {
      formatDate: function(date) {
        return `${months[date.getMonth()]} ${date.getDate()}`
      },
    },
  })
</script>
```

This code would produce the following in a `<p>` tag:

```
Astronomy Test - Due: January 15
```

This is extremely useful for little things you want your application to do, almost like helper functions. Obviously though, as your needs get more and more complicated, you're probably going to want to offload them into separate files, but they are still just as simple to access them in your explanation.

There is one important thing you should note before using methods for everything. These will update for every re-render. If you have something thats relatively static, you should probably use _computed_ properties.

---

## Computed

Computed properties are pretty special, they compute data that your application can use. The one requirement is that all of your computed property functions must return a value, that way Vue knows what should be rendered on our page. Here's an example of a computed property:

```js
new Vue({
  // ...el, data, methods
  computed: {
    characterCount() {
      return this.newItem.length
    },
    sortedItems() {
      const sortedItems = []
      const priorityItems = []
      this.items
        .sort((a, b) => a.createdAt - b.createdAt)
        .forEach(item => {
          if (item.priority) {
            priorityItems.unshift(item)
          } else {
            sortedItems.unshift(item)
          }
        })
      return [...priorityItems, ...sortedItems]
    },
  },
})
```

These functions can be accessed in our application similar to how we access methods. You may be wondering how this is different from a normal `method` value. We can use methods for anything, like performing operations and state changes that might not actually return data, but computed values are meant for this. Additionally, they also have some impressive stuff going on under the hood. They're cached depending on their _reactive dependencies_ (the properties it uses). If the property they depend on cannot, or does not change, these will remain performant, and won't update. Remember, methods will re-run for every render of our application.

---

## Directives

Now that you have a general feel about the structure of the Vue Instance, we can dive into some more specifics. Directives. The little instruction attributes that we can attach to our DOM to Vue-ify them. You have the loop directive; `v-for`, or the conditionals: `v-if` and `v-else`. These guys come in all different shapes and sizes, but I'm not going to go into all those specifics. Instead, I'm going to give a sort of higher-level overview of how they work,

v-for: loops
v-bind: events

### Event Handling

There are plenty of situations in which we're going to want to listen for events happening on our DOM. With Vanilla JS, or jQuery the binding and unbinding would ve way more difficult than necessary, but luckily, we can make Vue do our event handling. The special`v-on` directive has access to all the DOM events we know and love, and lets us access our Vue instance through them! We can use `methods` to run function, or retrieve `computed` values or create logs. Check out the syntax below:

```html
<button v-on="loveVue">Click Me!</button>
<script>
  new Vue({
    methods: {
      loveVue: function(e) {
        console.log(e) // Log the event
        alert('Hello! -from Vue)
      },
    },
  })
</script>
```

Clicking out button will prompt the alert, and it barely took a line of code outside of our Vue Instance! This works with any and all of your standardized DOM events (ex. hover, submit, etc.).

### Class Syntax

Often times you're going to want to infer some styling via your data, Your data controls the flow of your application, so it also makes sense that it would determine how it looks as well. Thankfully, Vue comes in clutch again, with the class syntax, and `v-bind` directive. You can think of this directive as saying, "X element needs access to Y data.

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
