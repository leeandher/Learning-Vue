<template>
  <div class="footer-wrapper" :style="style">
    <div class="link-wrapper">
      <a href="http://www.leander.xyz/contact">
        <fa-icon icon="at"/>
      </a>
      <a href="http://github.com/leeandher">
        <fa-icon :icon="['fab', 'github']"/>
      </a>
      <a href="https://www.linkedin.com/in/leander-rodrigues/">
        <fa-icon :icon="['fab', 'linkedin']"/>
      </a>
      <a href="https://stackoverflow.com/users/story/10996907">
        <fa-icon :icon="['fab', 'stack-overflow']"/>
      </a>
      <a href="https://www.hackerrank.com/LeeAndHer">
        <fa-icon :icon="['fab', 'hackerrank']"/>
      </a>
    </div>
    <p class="tag">
      🛠️ with ❤️ and 🎵 by
      <a href="https://www.leander.xyz">👨‍💻Leander👨‍💻</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  props: ["config"],
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


<style lang="scss" scoped>
.footer-wrapper {
  font-size: 1.55rem;
  min-height: 200px;
}
.tag {
  margin: 0;
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
  }
}
.link-wrapper {
  text-align: center;
  padding: 2rem;
  a {
    display: inline-block;
    position: relative;
    margin: 1rem;
    color: inherit;
    width: 75px;
    height: 75px;
    &:before {
      content: "";
      position: absolute;
      background: white;
      transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 0%;
    }
    &:hover:before {
      max-height: 100%;
    }
  }
  svg {
    font-size: 3rem;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
</style>

