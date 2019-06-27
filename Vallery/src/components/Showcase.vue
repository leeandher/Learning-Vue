<template>
  <div class="showcase-wrapper">
    <h4>{{selectedItem.title}}</h4>
    <p>{{selectedItem.description}}</p>
    <!-- <img :src="selectedItem.largeImage" :alt="selectedItem.title"> -->
    <iframe
      :title="selectedItem.title"
      id="showcase-frame"
      width="300"
      height="200"
      :src="selectedItem.link"
    ></iframe>
    <a :href="selectedItem.link" target="_blank">Link!</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Showcase",
  props: {
    config: Object,
    selectedItem: Object
  },
  computed: {
    style(): string {
      const { lightAccent } = this.config;
      return `
        background: ${lightAccent}
      `;
    }
  }
});
</script>


<style lang="scss">
.showcase-wrapper {
  background: yellow;
  font-size: 1.75rem;
}
</style>

