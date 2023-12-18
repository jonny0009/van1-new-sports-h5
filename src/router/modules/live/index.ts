import Layout from '@/layout/index.vue'
export default {
  path: '/live',
  component: Layout,
  redirect: '/live',
  children: [
    {
      path: '/live',
      component: () => import('@/views/live/index.vue'),
      name: 'live'
    }
  ]
}
