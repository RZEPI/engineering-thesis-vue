import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TablePage from "./pages/TablePage.vue";
import NotFound from "./pages/NotFound.vue";
import RecursivePage from "./pages/RecursivePage.vue";
import GridPage from "./pages/GridPage.vue";
import FlexboxPage from "./pages/FlexboxPage.vue";
import AnimationPage from "./pages/AnimationPage.vue";
import CachePage from "./pages/CachePage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/table", component: TablePage },
    { path: "/recursive-rendering", component: RecursivePage },
    { path: "/grid", component: GridPage },
    { path: "/flexbox", component: FlexboxPage },
    { path: "/animation", component: AnimationPage },
    { path: "/cache", component: CachePage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});
