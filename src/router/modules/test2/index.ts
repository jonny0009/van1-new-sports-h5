import Layout from '@/layout/index.vue'
export default {
  path: '/test2',
  component: Layout,
  redirect: '/test2',
  children: [
    {
      path: '/test2',
      component: () => import('@/views/test2/index.vue'),
      name: 'Test2'
    }
  ]
}

