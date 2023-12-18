import Layout from '@/layout/index.vue'
export default {
  path: '/game',
  component: Layout,
  redirect: '/game',
  children: [
    {
      path: '/game',
      component: () => import('@/views/game/index.vue'),
      name: 'game'
    }
  ]
}
