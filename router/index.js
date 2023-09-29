import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/home.vue";
import About from "../src/views/about.vue";
import Knowledge from "../src/views/knowledge.vue";
import Contact from "../src/views/contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/knowledge",
    name: "Knowledge",
    component: Knowledge,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
