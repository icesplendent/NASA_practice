import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../router";
import VueSmoothScroll from "v-smooth-scroll";

createApp(App)
  .use(router)
  .use(VueSmoothScroll, {
    duration: 400,
    offset: -50,
    updateHistory: false,
  })
  .mount("#app");
