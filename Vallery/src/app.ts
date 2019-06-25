import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub, faStackOverflow, faHackerrank, faAt);
Vue.component("fa-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
