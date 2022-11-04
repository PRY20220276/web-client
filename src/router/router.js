import { createRouter, createWebHistory } from 'vue-router'

// routes
import Login from "../views/Login"
import Services from "../views/Services"
import Gallery from "../views/Gallery"

const routes = [
  { path: '/', component: Login },
  { path: '/services', component: Services },
  { path: '/gallery', component: Gallery },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router