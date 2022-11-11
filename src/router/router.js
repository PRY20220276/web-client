import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("../views/Login")
  },
  {
    path: '/login',
    component: () => import("../views/Login")
  },
  {
    path: '/register',
    component: () => import("../views/Register")
  },
  {
    path: '/services',
    component: () => import("../views/Services")
  },
  {
    path: '/gallery',
    component: () => import("../views/Gallery")
  },
  {

    path: '/steps',
    component: () => import("../views/Steps"),
    children: [
      { 
        path: '',
        component: () => import("../components/LoadVideo")
      },
      {
        path: '/steps/information',
        component: () => import("../components/Information")
      },
      {
        path: '/steps/confirmation',
        component: () => import("../components/Confirmation")
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router