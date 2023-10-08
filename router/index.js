import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/home.vue";
import Game from "../src/views/game.vue";
import Collection from "../src/views/collection.vue";
import Contact from "../src/views/contact.vue";
import howToPlay from "../src/views/howToPlay.vue";
import Reference from "../src/views/reference.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/instr",
    name: "Instruction",
    component: howToPlay,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  ,
  {
    path: "/ref",
    name: "Reference",
    component: Reference,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
