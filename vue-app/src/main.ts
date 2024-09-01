import { createApp } from "vue";
import "./style.css";
import App from './App.vue';
import {store, key} from './store/flexbox/.'
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(store, key);

app.mount("#app");
