
<template>
  <div class="app-wrap">
    <h1 class="page-title">{{pageTitle}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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


