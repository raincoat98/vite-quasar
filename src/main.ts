import { createApp } from "vue";

import App from "./App.vue";

import { Quasar } from "quasar";
// import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "./assets/tailwind.css";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});

app.mount("#app");
