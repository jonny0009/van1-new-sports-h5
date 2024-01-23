import Layout from '@/layout/index.vue'
export default {
  path: '/sportlive',
  component: Layout,
  redirect: '/sportlive',
  children: [
    {
      path: '/sportlive',
      component: () => import('@/views/sportlive/index.vue'),
      name: 'Sportlive',
      meta: {
        showSportsTabsView: true,
        showRefresh: true,
        KeepAlive:true
      }
    }
  ]
}

