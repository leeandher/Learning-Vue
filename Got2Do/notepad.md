# Vue.js Fundamentals (March 2019)

**Vue.js** is an open-source front-end framework for JavaScript developed by Evan You back in February 2014. These notes are barely going to scratch the surface at all, but are a good reference on how to get up and running if you've never used Vue before this point. That being said, this isn't a good note if you want to see advanced use-cases, or see nifty cool things it can do, but we'll get there eventually.

---

## Getting Started

By far, the easiest way to start programming with Vue, is to just add it as a static script tag to your base `.html` webpage using a CDN:

```html
<script src="https://unpkg.com/vue"></script>
```

With just that, you can now start putting your Vue code into it's own `<script />` tag anywhere after that import. To setup our Vue instance, we simply use it's constructor:

```js
const MyNewApp = new Vue({
  //some Vue shenanigans
})
```

Congrats, you have a new Vue instance up and running!

---

## Properties

There's ~~probably~~ definitely a bunch more properties on the Vue instance we can access, but for this note, I'm only going to discuss `el`, `data`, `computed` and `methods`, since they ~~are~~ might be the fundamentals (I really don't know much about Vue yet, I just started learning).

@ = v-on
: = v-bind

v-for: loops
v-model: 2 way databinding
only expressions in {{}}
data comes from vue-instance

every js event is handled (hover click, etc)

object class syntax

`:class="{strikeout: item.completed}"`

- obj prop is the name of the class to toggle
- value is conditional connected to

Array class syntax

`:class="[item.completed ? 'strikeout' : '']`

- ternary based on conditional
- default classes can be added as default elements of ar as a seperate property

computed properties

//todo add a button to make it priority
