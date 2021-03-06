import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { goBackMixin } from "./mixins";
import "amfe-flexible";

import "./assets/css/index.less";

Vue.config.productionTip = false;

Vue.mixin(goBackMixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
