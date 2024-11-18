import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TablePage from "./pages/TablePage.vue";
import NotFound from "./pages/NotFound.vue";
import AnimationPage from "./pages/AnimationPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/Table", component: TablePage },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/Animation", component: AnimationPage },
  ],
  linkActiveClass: "active",
});
