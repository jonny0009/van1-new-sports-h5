import Layout from '@/layout/index.vue'

// key 不要删 解决子路由切换 同级组件刷新问题
export default {
  path: '/match',
  component: Layout,
  meta: {
    key: 'matchId'
  },
  children: [
    {
      name: 'Match',
      path: '',
      component: () => import('@/views/match/list.vue'),
      meta: {
        showSportsTabsView: true,
        KeepAlive: true,
        key: 'matchId',
        index: 7
      }
    },
    // 短视频全屏
    {
      path: '/svideo',
      name: 'Svideo',
      component: () => import('@/views/shortVideo/index.vue'),
      meta: {
        hideSportsTabsView: true,
        hideGlobalHeaderView: true,
        showSportsTabsView: false,
        KeepAlive: false,
        key: 'matchId',
        index: 99
      }
    },
    // 直播详情
    {
      name: 'MatchDetail',
      path: '/match/:id',
      redirect: (to: any) => {
        return { name: 'MatchBets', params: { id: to.params.id } }
      },
      component: () => import('@/views/match/detail.vue'),
      meta: {
        showheadGoBack: true,
        key: 'matchId',
        KeepAlive: false,
        index: 999
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
          name: 'MatchOther',
          path: 'other',
          component: () => import('@/views/match/detail-other/index.vue')
        }
      ]
    },

    // 赛事详情
    {
      name: 'MatchMore',
      path: 'more/:id',
      component: () => import('@/views/match/more.vue'),
      meta: {
        showheadGoBack: true,
        index: 999
      }
    }
  ]
}
