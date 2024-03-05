import Layout from '@/layout/index.vue'
export default {
  path: '/casino',
  component: Layout,
  redirect: '/casino',
  children: [
    {
      path: '/casino',
      component: () => import('@/views/casino/index.vue'),
      name: 'Casino',
      meta: {
        showSportsTabsView: true,
        showRefresh: true,
        KeepAlive: true,
        index: 8
      }
    }
  ]
}

