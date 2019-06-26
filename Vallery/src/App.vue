
<template>
  <div class="app-wrapper" :style="style">
    <Header :config="config" pageTitle="freeCodeCamp"/>
    <Panel :config="config" :items="items"/>
    <Showcase :config="config"/>
    <Modal :config="config"/>
    <Footer :config="config"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Panel from "./components/Panel.vue";
import Modal from "./components/Modal.vue";
import Showcase from "./components/Showcase.vue";

import dataset from "./data/sampleset.json";

export default Vue.extend({
  name: "app",
  components: {
    Header,
    Footer,
    Panel,
    Modal,
    Showcase
  },
  data: function(): object {
    return {
      ...dataset
    };
  },
  computed: {
    style(): string {
      const {
        config: { fontFamily }
      } = dataset;
      return `
        font-family: ${fontFamily}
      `;
    }
  }
});
</script>

<style lang="scss">
html {
  font-size: 10px;
  font-family: "Franklin Gothic Medium", "Futura", "Arial Condensed",
    "Helvetica", sans-serif;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>


