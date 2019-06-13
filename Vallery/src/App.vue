
<template>
  <div class="app-wrapper">
    <h1 class="page-title">{{pageTitle}}</h1>
    <Panel/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Panel from "./components/Panel.vue";

export default Vue.extend({
  name: "app",
  components: {
    Panel
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


