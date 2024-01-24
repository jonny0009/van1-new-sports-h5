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
    path: '/search',
    component: () => import('@/layout/index.vue'),
    redirect: '/search',
    children: [
      {
        path: '/search',
        component: () => import('@/views/search/index.vue'),
        name: 'Search',
        meta: {
          hideGlobalHeaderView:true,
          hideGlobalBottomBet:true
        }
      }
    ]
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@/views/error-page/404.vue'),
  //   hidden: true
  // },
  {
    path: '/503',
    name: '503',
    component: () => import('@/views/error-page/503.vue'),
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
          KeepAlive:true
        }
      }
    ]
  },
  {
    path: '/user',
    component: () => import('@/views/user/index.vue'),
    // redirect: '/user/userRecord',
    hidden: true,
    children: [
      {
        path: '/user/notice',
        component: () => import('@/views/user/notice/index.vue'),
        name: 'Notice',
        hidden: true
      },
      {
        path: '/user/noticeDetail',
        component: () => import('@/views/user/notice/noticeDetail.vue'),
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
        path: '/user/contactUs',
        component: () => import('@/views/user/contactUs.vue'),
        name: 'ContactUs',
        hidden: true
      },
      {
        path: '/user/result',
        component: () => import('@/views/user/result/index.vue'),
        name: 'Result',
        hidden: true
      },
      {
        path: '/user/userInfo',
        component: () => import('@/views/user/userinfo/index.vue'),
        name: 'UserInfo',
        hidden: true
      },
      {
        path: '/user/editUser',
        component: () => import('@/views/user/userCenter/editUser.vue'),
        name: 'EditInfo',
        hidden: true
      },
      {
        path: '/user/editName',
        component: () => import('@/views/user/userCenter/editName.vue'),
        name: 'EditName',
        hidden: true
      },
      {
        path: '/user/elseFocus',
        component: () => import('@/views/user/elseFocus/index.vue'),
        name: 'ElseFocus',
        hidden: true
      },
      {
        path: '/user/selfFocus',
        component: () => import('@/views/user/selfFocus/index.vue'),
        name: 'SelfFocus',
        hidden: true
      },
      {
        path: '/user/elseInfo',
        component: () => import('@/views/user/userCenter/elseInfo.vue'),
        name: 'ElseInfo',
        hidden: true
      },
      {
        path: '/user/editImg',
        component: () => import('@/views/user/userCenter/editImg.vue'),
        name: 'EditImg',
        hidden: true
      }
    ]
  },

  ...modules,
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
