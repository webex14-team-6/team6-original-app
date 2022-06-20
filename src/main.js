import { createApp } from "vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"
import { MotionPlugin } from "@vueuse/motion"
import "./index.css"

createApp(App).use(router).use(MotionPlugin).mount("#app")
