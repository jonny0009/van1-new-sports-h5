import Layout from '@/layout/index.vue'
export default {
  path: '/sportToday',
  component: Layout,
  redirect: '/sportToday',
  children: [
    {
      path: '/sportToday',
      component: () => import('@/views/sportToday/index.vue'),
      name: 'sportToday',
      meta: {
        showSportsTabsView: true,
        showRefresh: true
      }
    }
  ]
}

