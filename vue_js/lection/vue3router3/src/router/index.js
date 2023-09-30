import { createRouter, createWebHashHistory } from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import AboutContent from "../views/AboutContent.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
  },
  {
    path: "/about",
    name: "about",
    component: AboutContent,
  },
  {
    path: "/*",
    name: "notfound",
    component: NotFound,
  },
];

// const routes = {
//   "/dashboard": DashBoard,
//   "/about": AboutContent,
//   "/*": NotFound,
// };

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
