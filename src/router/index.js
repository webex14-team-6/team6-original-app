import { createRouter, createWebHistory } from "vue-router"

const routes = [
<<<<<<< HEAD
=======
  /*{
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/AboutView.vue"),
  },*/
>>>>>>> origin/master
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
