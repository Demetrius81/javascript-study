import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
import CatalogPage from "../views/CatalogPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import ContactsDetailsComponent from "../components/ContactsDetailsComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
  {
    path: "/catalog/:id",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/contacts/details",
    name: "contactsdetails",
    component: ContactsDetailsComponent,
  },
  {
    path: "*",
    name: "notfound",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
