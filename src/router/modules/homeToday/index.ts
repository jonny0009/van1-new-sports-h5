import Layout from '@/layout/index.vue'
export default {
  path: '/homeToday',
  component: Layout,
  redirect: '/homeToday',
  children: [
    {
      path: '/homeToday',
      component: () => import('@/views/homeToday/index.vue'),
      name: 'HomeToday',
      meta: {
        showSportsTabsView: true,
        showRefresh: true
      }
    }
  ]
}

