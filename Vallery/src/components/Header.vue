<template>
  <div class="header-wrapper" :style="style">
    <h1>{{pageTitle}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  props: {
    pageTitle: String,
    config: Object
  },
  computed: {
    style() {
      const {
        mainText,
        altText,
        darkAccent,
        accent,
        lightAccent,
        altAccent
      } = this.config;
      return `
        background-color: ${accent};
        color: ${mainText};
      `;
    }
  }
});
</script>


<style lang="scss">
.header-wrapper {
  background: red;
  font-size: 1.75rem;
  h1 {
    margin: 0;
    padding: 2.5rem;
    text-align: center;
  }
}
</style>

