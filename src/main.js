import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "/node_modules/bootstrap/dist/css/bootstrap.min.css";
Vue.use(BootstrapVue);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
