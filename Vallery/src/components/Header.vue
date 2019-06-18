<template>
  <div class="header-wrapper">
    <h1>This is the title</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header"
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

