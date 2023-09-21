import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../views/TodoList.vue";
import CompletedTasks from "@/views/CompletedTasks.vue";
import LoginPage from '@/views/LoginPage.vue'; 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TodoList,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: "/completati",
    name: "CompletedTasks",
    component: CompletedTasks,
  },
  {
    path: "/todolist",
    name: "TodoList",
    component: TodoList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
