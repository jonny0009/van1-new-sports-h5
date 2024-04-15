import Layout from '@/layout/index.vue'
export default {
  path: '/svideo',
  component: Layout,
  children: [
    {
      path: '/svideo',
      name: 'Svideo',
      component: () => import('@/views/shortVideo/index.vue'),
      meta: {
        hideGlobalHeaderView: true,
        showSportsTabsView: false,
        KeepAlive: true,
        key: 'matchId',
        index: 11
      }
    }
  ]
}
