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
