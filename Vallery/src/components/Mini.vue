<template>
  <div class="mini-grid-wrapper" @click="selectItem(index)">
    <h4>{{title}}</h4>
    <p>{{description}}</p>
    <img :src="image" :alt="title">
    <a :href="link" target="_blank">Link!</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Mini",
  props: {
    title: String,
    image: String,
    description: String,
    link: String,
    index: Number,
    selectItem: Function
  },
  methods: {
    test(i) {
      console.log(i);
      this.selectItem(i);
    }
  }
});
</script>


<style lang="scss">
.mini-grid-wrapper {
  font-size: 1.75rem;
  border: 2px solid red;
  display: grid;
}
</style>

