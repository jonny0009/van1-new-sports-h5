import Layout from '@/layout/index.vue'
export default {
  path: '/test1',
  component: Layout,
  redirect: '/test1',
  children: [
    {
      path: '/test1',
      component: () => import('@/views/test1/index.vue'),
      name: 'Test1'
    }
  ]
}

