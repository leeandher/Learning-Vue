
<template>
  <div class="app-wrapper">
    <Header/>
    <Panel/>
    <Showcase/>
    <Modal/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Panel from "./components/Panel.vue";
import Modal from "./components/Modal.vue";
import Showcase from "./components/Showcase.vue";

export default Vue.extend({
  name: "app",
  components: {
    Header,
    Footer,
    Panel,
    Modal,
    Showcase
  },
  data: function() {
    return {
      pageTitle: "IT Works!"
    };
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


