import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/shindan",
    name: "shindan",
    component: () => import("../views/OsakeShindan.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
