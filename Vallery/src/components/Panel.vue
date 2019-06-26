<template>
  <div class="panel-wrapper" :style="style">
    <div class="mini-wrap" v-for="({title, description, image, link}, index) in items" :key="index">
      <Mini :title="title" :description="description" :image="image" :link="link"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mini from "./Mini.vue";

export default Vue.extend({
  name: "Panel",
  props: {
    config: Object,
    items: [Object]
  },
  components: {
    Mini
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
.panel-wrapper {
  background: orange;
  position: relative;
  font-size: 1.75rem;
  border: 2px solid blue;
  flex-flow: row;
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-track-piece,
  ::-webkit-scrollbar-button {
    background: red;
    border: 2px solid green;
  }
}
.mini-wrap {
  flex: 1;
  margin: 1rem;
  flex-basis: 300px;
  min-width: 300px;
  img {
    max-width: 128px;
  }
}
</style>

