import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import home from "@/views/HomeSection";
import loginAccount from "@/views/loginAccount";
import community from "@/views/community";
import Games from "@/views/CheckedGames";
import notFound from "@/views/notFound";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/sign",
    name: "sign",
    component: loginAccount,
  },
  {
    path: "/registration",
    name: "registration",
    component: loginAccount,
  },
  {
    path: "/community",
    name: "community",
    component: community,
  },
  {
    path: "/game/:id",
    name: "games",
    component: Games,
  },
  {
    path: "*",
    name: "notFound",
    component: notFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
