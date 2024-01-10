import Layout from '@/layout/index.vue'
export default {
  path: '/broadcast',
  component: Layout,
  children: [
    {
      name: 'Broadcast',
      path: '',
      component: () => import('@/views/live/index.vue'),
      meta: {
        showSportsTabsView: true
      }
    },
    {
      name: 'BroadcastDetail',
      path: ':id',
      component: () => import('@/views/live/id.vue'),
      meta: {
        showheadGoBack: true
      }
    },
    {
      name: 'BroadcastBetting',
      path: '/bet/:id',
      component: () => import('@/views/live/bet.vue'),
      meta: {
        showheadGoBack: true
      }
    }
  ]
}
