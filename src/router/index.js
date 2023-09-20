import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompletedTasks from "@/views/CompletedTasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/completati",
    name: "CompletedTasks",
    component: CompletedTasks,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
