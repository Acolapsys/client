import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, {key} from "./store";
import './assets/scss/style.scss'
import registerComponents  from "@/utils/global-components"


const app = createApp(App)
registerComponents(app)

app.use(store, key).use(router).mount("#app");
