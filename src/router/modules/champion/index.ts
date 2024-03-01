import Layout from '@/layout/index.vue'
export default {
  path: '/champion',
  component: Layout,
  redirect: '/champion',
  children: [
    {
      path: '/champion',
      component: () => import('@/views/champion/index.vue'),
      name: 'Champion',
      meta: {
        showSportsTabsView: true,
        showBarTabsView: true,
        index:3,
        // showRefresh: true,
        KeepAlive:true
      }
    }
  ]
}

