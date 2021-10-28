import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import home from "@/views/headerSection";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/about",
    name: "About",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
