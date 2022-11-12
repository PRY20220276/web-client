import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("../../IdentityAccessManagement/views/Login")
  },
  {
    path: '/login',
    component: () => import("../../IdentityAccessManagement/views/Login")
  },
  {
    path: '/register',
    component: () => import("../../IdentityAccessManagement/views/Register")
  },
  {
    path: '/services',
    component: () => import("../../VideoProjectLifecycle/views/Services")
  },
  {
    path: '/gallery',
    component: () => import("../../AssetManagement/views/Gallery")
  },
  {

    path: '/steps',
    component: () => import("../../VideoProjectLifecycle/views/Steps"),
    children: [
      { 
        path: '',
        component: () => import("../../VideoProjectLifecycle/components/LoadVideo.component.vue")
      },
      {
        path: '/steps/information',
        component: () => import("../../VideoProjectLifecycle/components/Information.component.vue")
      },
      {
        path: '/steps/confirmation',
        component: () => import("../../VideoProjectLifecycle/components/Confirmation.component.vue")
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router