import Layout from '@/layout/index.vue'
export default {
  path: '/champion',
  component: Layout,
  redirect: '/champion',
  children: [
    {
      path: '/champion',
      component: () => import('@/views/champion/index.vue'),
      name: 'Champion'
    }
  ]
}

