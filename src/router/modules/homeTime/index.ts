import Layout from '@/layout/index.vue'
export default {
  path: '/homeTime',
  component: Layout,
  redirect: '/homeTime',
  children: [
    {
      path: '/homeTime',
      component: () => import('@/views/early/homeTime/index.vue'),
      name: 'HomeTime',
      meta: {
        showSportsTabsView: true,
        showRefresh: true
      }
    }
  ]
}

