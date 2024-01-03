import Layout from '@/layout/index.vue'
export default {
  path: '/broadcast',
  component: Layout,
  children: [
    {
      name: 'Live',
      path: '',
      component: () => import('@/views/live/index.vue')
    },
    {
      name: 'LiveId',
      path: ':id',
      component: () => import('@/views/live/id.vue')
    },
    {
      name: 'LiveBet',
      path: '/bet/:id',
      component: () => import('@/views/live/bet.vue')
    }
  ]
}
