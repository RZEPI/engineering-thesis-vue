import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TablePage from "./pages/TablePage.vue";
import NotFound from "./pages/NotFound.vue";
import RecursivePage from "./pages/RecursivePage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/RecursiveRendering", component: RecursivePage },
    { path: "/Table", component: TablePage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});
