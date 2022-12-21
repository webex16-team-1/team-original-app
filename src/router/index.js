import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import DetailView from "../views/DetailView.vue"
import TweetView from "../views/TweetView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/detail",
    name: "Detail",
    component: DetailView,
  },

  {
    path: "/tweet",
    name: "Tweet",
    component: TweetView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
