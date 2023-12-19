import Layout from '@/layout/index.vue'
export default {
  path: '/live',
  component: Layout,
  children: [
    {
      name: 'Live',
      path: '',
      component: () => import('@/views/live/index.vue'),
    },
    {
      name: 'LiveId',
      path: ':id',
      component: () => import('@/views/live/id.vue'),
    },
    {
      name: 'LiveGame',
      path: 'game',
      component: () => import('@/views/live/game.vue'),
    },
  ]
}

