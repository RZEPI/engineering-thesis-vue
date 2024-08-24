import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import FlexboxPage from "./pages/FlexboxPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/flexbox", component: FlexboxPage},
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});
