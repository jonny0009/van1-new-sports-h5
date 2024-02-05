<template>
  <div class="bet-container" :class="{ 'has-bet': showFixedBet }">
    <!-- 赛事信息 -->
    <div class="team">
      <div class="team-header">
        <div class="league">
          <SvgIcon name="live-football" />
          <span>{{ matchInfo.leagueName }}</span>
        </div>
        <div class="date">{{ formatToDate(matchInfo.gameDate, 'MM-DD HH:mm') }}</div>
      </div>
      <div class="team-box">
        <div class="team-player host">
          <div class="img-num">
            <img v-img="matchInfo.homeLogo" :type="4" alt="" />
            <span>{{ setMatch.getScore(matchInfo, 'H') }}</span>
          </div>
          <strong>{{ matchInfo.homeTeam }}</strong>
        </div>
        <div class="team-score" @click="gotoLive">
          <span class="default" v-html="setMatch.showRBTime(matchInfo)"></span>
          <span v-if="matchInfo.showtype == 'RB'" class="icons">
            <SvgIcon name="live-play" />
          </span>
        </div>
        <div class="team-player away">
          <div class="img-num">
            <span>{{ setMatch.getScore(matchInfo, 'C') }}</span>
            <img v-img="matchInfo.awayLogo" :type="5" alt="" />
          </div>
          <strong>{{ matchInfo.awayTeam }}</strong>
        </div>
      </div>
    </div>
    <!-- end -->

    <div class="bet-menu">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="bet-menu__nav"
        :class="{ selected: menuType === item.type }"
        @click="onMenuClick(item)"
      >
        <SvgIcon :name="item.iconName" />
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
    <div class="bet-main">
      <BettingCollapse
        v-show="menuType === 0"
        :match-info="matchInfo"
        :group-list="playGroupBetList"
        :betting-list="playBettingList"
        :loading="apiLoading"
        @tab-change="findGroupById"
      />

      <MatchDatabase v-show="menuType === 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, computed, onBeforeMount, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { matcheInfo } from '@/api/live'
import { useMatch } from '@/utils/useMatch'
import { useBetting } from '@/utils/useBetting'
import { formatToDate } from '@/utils/date'
import BettingCollapse from '@/components/BettingCollapse/index.vue'
import MatchDatabase from '@/components/Match/database/index.vue'
import store from '@/store'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const setMatch = useMatch()
const { findGroupById, playGroupBetList, playBettingList, apiLoading } = useBetting()

const paramsId = computed(() => route.params['id'])
const showFixedBet = computed(() => store.state.app.showFixedBet)

const menuList = ref([
  { type: 0, title: t('live.bet'), iconName: 'live-bet' },
  { type: 1, title: t('live.dataBase'), iconName: 'live-data' }
])
const menuType = ref(0)
const onMenuClick = (item: any) => {
  menuType.value = item.type
}

const matchInfo: Ref<any> = ref({})
const getMatcheInfo = async () => {
  const gidm = paramsId.value
  const res = await matcheInfo({ gidm })
  const data = res.data || {}
  matchInfo.value = { ...data }
  if (data.detail && data.detail.length > 0) {
    const { game } = data.detail[0]
    const gameInfo = game.gameInfo || {}
    matchInfo.value.gameInfo = gameInfo
  }
  store.commit('match/SET_MATCH_INFO', matchInfo.value)
}

const gotoLive = () => {
  const { showtype, gidm } = matchInfo.value
  if (showtype == 'RB') {
    router.push(`/match/${gidm}`)
  }
}

let intervalTimer: any = null
const startInterval = () => {
  closeInterval()
  intervalTimer = setInterval(() => {
    getMatcheInfo()
    store.commit('match/SET_NEED_TIMER', true)
  }, 5000)
}
const closeInterval = () => {
  if (intervalTimer) {
    clearInterval(intervalTimer)
    intervalTimer = null
    store.commit('match/SET_NEED_TIMER', false)
  }
}

onBeforeMount(() => {
  getMatcheInfo()
  startInterval()
})

onUnmounted(() => {
  closeInterval()
})
</script>

<style lang="scss" scoped>
.bet-container {
  &.has-bet {
    padding-bottom: 96px;
  }
  .team {
    height: 252px;
    background: url('@/assets/images/live/game_mask.png') no-repeat;
    background-size: auto 100%;
    margin: 40px 36px 20px 36px;
    font-size: 24px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
    &-header {
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      color: #b4bbc2;
      .league {
        display: flex;
        align-items: center;
        > img {
          width: 24px;
          height: 24px;
          margin-right: 6px;
        }
        > span {
          max-width: 320px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .svg-icon {
          margin-right: 6px;
        }
      }
      .date {
        white-space: nowrap;
      }
    }
    &-box {
      display: flex;
      margin: 40px 0 0 0;
      padding: 0 33px;
    }

    &-player {
      width: 200px;
      display: flex;
      flex-direction: column;
      .img-num {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 17px;
        width: 100%;
        > img {
          display: block;
          width: 62px;
          height: 62px;
        }
        > span {
          font-size: 28px;
        }
      }
      strong {
        max-width: 200px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &.host {
        align-items: flex-start;
        .img-num > span {
          padding-right: 20px;
        }
      }
      &.away {
        align-items: flex-end;
        .img-num > span {
          padding-left: 20px;
        }
      }
    }

    &-score {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px 0 0 0;
      color: #b1b8bf;
      overflow: hidden;
      .icons {
        color: #f2f2f2;
        margin-top: 10px;
      }
      .svg-icon {
        font-size: 38px;
      }
    }
  }
}

.bet-container .bet {
  &-menu {
    display: flex;
    margin: 0 -12px;
    padding: 0 36px;
  }
  &-menu__nav {
    flex: 1;
    height: 64px;
    padding: 0 20px;
    background: var(--color-global-buttonBg);
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    font-size: 26px;
    font-weight: 800;
    transition: all 0.3s;
    margin: 0 12px;
    .svg-icon {
      color: var(--color-global-minButtonicoCl);
      font-size: 38px;
      margin: 0 22px 0 0;
    }
    &.selected {
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }

  &-main {
    padding: 30px 14px 0 14px;
  }
}
</style>
