import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TablePage from "./pages/TablePage.vue";
import NotFound from "./pages/NotFound.vue";
import GridPage from "./pages/GridPage.vue";
import FlexboxPage from "./pages/FlexboxPage.vue";
import AnimationPage from "./pages/AnimationPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/table", component: TablePage },
    { path: "/grid", component: GridPage },
    { path: "/flexbox", component: FlexboxPage },
    { path: "/animation", component: AnimationPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});
