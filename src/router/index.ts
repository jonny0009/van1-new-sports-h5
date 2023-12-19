import { createRouter, createWebHistory } from 'vue-router'
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
  {
    path: '/login',
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
    path: '/search',
    component: () => import('@/views/search/index.vue'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/503',
    name: '503',
    component: () => import('@/views/error-page/503.vue'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home'
      }
    ]
  },
  {
    path: '/user',
    component: () => import('@/views/user/index.vue'),
    // redirect: '/user',
    hidden: true,
    children: [
      {
        path: '/user/notice',
        component: () => import('@/views/user/notice.vue'),
        name: 'Notice',
        hidden: true
      },
      {
        path: '/user/noticeDetail',
        component: () => import('@/views/user/noticeDetail.vue'),
        name: 'NoticeDetail',
        hidden: true
      },
      {
        path: '/user/edit',
        component: () => import('@/views/user/edit.vue'),
        name: 'Edit',
        hidden: true
      },
      {
        path: '/user/result',
        component: () => import('@/views/user/result.vue'),
        name: 'Result',
        hidden: true
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
