import Layout from '@/layout/index.vue'
export default {
  path: '/sport/:type?',
  component: Layout,
  redirect: '/sport',
  children: [
    {
      path: '/sport/:type?',
      component: () => import('@/views/sport/index.vue'),
      name: 'Sport',
      meta: {
        showSportsTabsView: true,
        // showRefresh: true,
        KeepAlive: true,
        index: 6
      }
    }
  ]
}

