// import Layout from '@/layout/index.vue'
export default {
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
}
