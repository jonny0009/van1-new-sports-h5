export default {
  path: '/svideo/:videoId',
  name: 'Svideo',
  component: () => import('@/views/shortVideo/index.vue')
}
