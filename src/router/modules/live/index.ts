/** 该文件废弃 */

import Layout from '@/layout/index.vue'
export default {
  path: '/live',
  component: Layout,
  children: [
    {
      name: 'Live',
      path: '',
      component: () => import('@/views/live/index.vue')
    },
    {
      name: 'LiveDetail',
      path: ':id',
      component: () => import('@/views/live/id.vue'),
      meta: {
        showheadGoBack: true
      }
    },
    {
      name: 'LiveBetting',
      path: '/bet/:id',
      component: () => import('@/views/live/bet.vue'),
      meta: {
        showheadGoBack: true
      }
    }
  ]
}
