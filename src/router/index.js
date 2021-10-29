import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import home from "@/views/HomeSection";
/* import registration from "@/views/registration";
import sign from "@/views/registration"; */
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  /*
  {
    path: "/sign",
    name: "sign",
    component: sign,
  },
    {
    path: "/registration",
    name: "registration",
    component: registration,
  }, */
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
