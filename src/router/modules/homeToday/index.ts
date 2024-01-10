import Layout from '@/layout/index.vue'
export default {
  path: '/homeToday',
  component: Layout,
  redirect: '/homeToday',
  children: [
    {
      path: '/homeToday',
      component: () => import('@/views/early/homeToday/index.vue'),
      name: 'HomeToday',
      meta: {
        showSportsTabsView: true,
        showBarTabsView: true,
        showRefresh: true
      }
    }
  ]
}

