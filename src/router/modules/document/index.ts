import Layout from '@/layout/index.vue'
export default {
  path: '/document',
  component: Layout,
  redirect: '/document',
  children: [
    {
      path: '/document',
      component: () => import('@/views/document/index.vue'),
      name: 'document'
    }
  ]
}

