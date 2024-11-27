import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TablePage from "./pages/TablePage.vue";
import NotFound from "./pages/NotFound.vue";
import GridPage from "./pages/GridPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/table", component: TablePage },
    { path: "/grid", component: GridPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});
