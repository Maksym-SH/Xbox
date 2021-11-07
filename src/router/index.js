import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import home from "@/views/HomeSection";
import loginAccount from "@/views/loginAccount";
import community from "@/views/community";
import games from "@/views/CheckedGames";
import notFound from "@/views/notFound";
import console from "@/views/CheckedConsole";
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
    component: games,
  },
  {
    path: "/console/:id",
    name: "console",
    component: console,
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
