import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router.js";
import store from "./store/store.js";

// style
import "./assets/style/reset.css";

createApp(App).use(store).use(router).mount("#app");
