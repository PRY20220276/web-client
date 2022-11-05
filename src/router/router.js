import { createRouter, createWebHistory } from 'vue-router'

// routes
import Login from "../views/Login"
import Register from "../views/Register"
import Services from "../views/Services"
import Gallery from "../views/Gallery"

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/services', component: Services },
  { path: '/gallery', component: Gallery },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router