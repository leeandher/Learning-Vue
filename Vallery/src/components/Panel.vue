<template>
  <div class="panel-wrapper" :style="style">
    <div class="mini-wrap" v-for="({title, description, image, link}, index) in items" :key="index">
      <Mini
        :title="title"
        :description="description"
        :image="image"
        :link="link"
        :index="index"
        :selectItem="selectItem"
      />
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
    items: Array,
    selectItem: Function
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
  font-size: 1.75rem;
  flex-flow: row;
  display: flex;
  overflow-x: scroll;
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

