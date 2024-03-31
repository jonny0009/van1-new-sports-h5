import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const modulesFiles = import.meta.globEager('./modules/*/*.ts')
const pathList: string[] = []
for (const path in modulesFiles) {
  pathList.push(path)
}

const modules = pathList.reduce((modules: any, modulePath: string) => {
  const value = modulesFiles[modulePath]
  if (value.default) {
    modules.push(value.default)
  }
  return modules
}, [])

export const constantRoutes: Array<any> = [
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/'
  // },
  {
    path: '/:pathMatch(.*)*',
    component: Layout,
    redirect: '/404',
    children: [
      {
        path: '/404',
        component: () => import('@/views/error-page/404.vue'),
        name: '404',
        meta: {
          hideGlobalHeaderView: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/sign_in',
    component: () => import('@/views/login/sign-in.vue'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/login/register.vue'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error-page/403.vue'),
    hidden: true
  },
  {
    path: '/503',
    name: '503',
    component: () => import('@/views/error-page/503.vue'),
    hidden: true
  },
  {
    path: '/shortVideo/:videoId',
    name: 'ShortVideo',
    component: () => import('@/views/shortVideo/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          showSportsTabsView: true,
          showBarTabsView: true,
          // showRefresh: true,
          KeepAlive: true,
          index: 1
        }
      }
    ]
  },

  ...modules
]

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
