import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter from 'vue-router';

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import("@/IdentityAccessManagement/views/Login.vue")
  },
  {
    path: '/login',
    component: () => import("@/IdentityAccessManagement/views/Login.vue")
  },
  {
    path: '/register',
    component: () => import("@/IdentityAccessManagement/views/Register.vue")
  },
  {
    path: '/services',
    component: () => import("@/VideoProjectLifecycle/views/Services.vue")
  },
  {
    path: '/gallery',
    component: () => import("@/AssetManagement/views/Gallery.vue")
  },
  {
    path: '/steps',
    component: () => import("@/VideoProjectLifecycle/views/Steps.vue"),
    children: [
      { 
        path: '',
        component: () => import("@/VideoProjectLifecycle/components/LoadVideo.component.vue")
      },
      {
        path: '/steps/information',
        component: () => import("@/VideoProjectLifecycle/components/Information.component.vue")
      },
      {
        path: '/steps/confirmation',
        component: () => import("@/VideoProjectLifecycle/components/Confirmation.component.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router