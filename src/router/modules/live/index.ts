import Layout from '@/layout/index.vue'
export default {
  path: '/broadcast',
  component: Layout,
  children: [
    {
      name: 'Broadcast',
      path: '',
      component: () => import('@/views/live/index.vue')
    },
    {
      name: 'BroadcastDetail',
      path: ':id',
      component: () => import('@/views/live/id.vue')
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
