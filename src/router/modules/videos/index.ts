export default {
  path: '/shortVideo/:videoId',
  name: 'ShortVideo',
  component: () => import('@/views/shortVideo/index.vue')
}
