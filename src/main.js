import { createApp } from "vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"
import "./index.css"

createApp(App).use(router).mount("#app")
