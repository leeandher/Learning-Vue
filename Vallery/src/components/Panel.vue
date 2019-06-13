<template>
  <div class="panel-wrapper">{{test}}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Panel"
});
</script>

<style lang="scss">
.panel-wrapper {
  border: 2px solid red;
}
</style>


