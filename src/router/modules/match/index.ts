import Layout from '@/layout/index.vue'
export default {
  path: '/match',
  component: Layout,
  children: [
    {
      name: 'Match',
      path: '',
      component: () => import('@/views/match/list.vue'),
      meta: {
        showSportsTabsView: true
      }
    },

    // 详情
    {
      name: 'MatchDetail',
      path: '/match/:id',
      redirect: (to: any) => {
        return { name: 'MatchBets', params: { id: to.params.id } }
      },
      component: () => import('@/views/match/detail.vue'),
      meta: {
        showheadGoBack: true
      },
      children: [
        {
          name: 'MatchBets',
          path: 'bets',
          component: () => import('@/views/match/detail-bets/index.vue')
        },
        {
          name: 'MatchWith',
          path: 'with',
          component: () => import('@/views/match/detail-with/index.vue')
        },
        {
          name: 'MatchMixs',
          path: 'mixs',
          component: () => import('@/views/match/detail-mixs/index.vue')
        },
        {
          name: 'MatchData',
          path: 'data',
          component: () => import('@/views/match/detail-data/index.vue')
        },
        {
          name: 'MatchMore',
          path: 'more',
          component: () => import('@/views/match/detail-more/index.vue')
        }
      ]
    }

    // {
    //   name: 'MatchBetting',
    //   path: '/bet/:id',
    //   component: () => import('@/views/live/bet.vue'),
    //   meta: {
    //     showheadGoBack: true
    //   }
    // }
  ]
}
