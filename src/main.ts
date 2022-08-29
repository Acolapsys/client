import { createApp, Directive } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import "./assets/scss/style.scss";
import registerComponents from "@/utils/global-components";
import directives from "@/directives";

const app = createApp(App);
registerComponents(app);

Object.keys(directives).forEach((dKey) => {
  app.directive(dKey, (directives as { [dKey: string]: Directive })[dKey]);
});

app.use(store, key).use(router).mount("#app");
