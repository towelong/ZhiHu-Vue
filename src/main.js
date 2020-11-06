import { createApp } from "vue"
import ElementUi from "element-plus"
import "element-plus/lib/theme-chalk/index.css"
import App from "./App.vue"
import router from "./router"

createApp(App)
    .use(router)
    .use(ElementUi)
    .mount("#app")
