<template>
  <div class="match-item-wrap" :style="{ backgroundImage: `url(${cover})` }">

    <not-started-tips
      v-if="notStarted"
      :match-info="matchInfo || {}"
      :live-info="liveInfo"
    />
    <video-box
      v-else-if="refreshState && (liveInfo.m3u8 || liveInfo.url)"
      :live-url="liveInfo.m3u8 || liveInfo.url"
      :controls="false"
      :type="2"
      @refresh="refresh"
      @touchVideo="goDetails"
    />
    <div v-if="!notStarted" class="live-info-wrap" @click="goDetails">
      <div v-if="type !== 3" class="anchor-info-wrap">
        <div class="anchor-info">
          <div class="anchor-avatar">
            <img :src="headPortrait" alt="" @error="avatarError = true" />
          </div>
          <div class="anchor-name text-overflow">{{ liveInfo.name }}</div>
        </div>
      </div>
      <div v-if="type === 2" class="free-live-content text-overflow">
        {{ liveInfo.liveTitle }}
      </div>
      <div v-else class="match-bets-wrap">
        <div class="match-info">
          <div class="team-name text-overflow right">{{ home }}</div>
          <div class="team-score">{{ score }}</div>
          <div class="team-name text-overflow left">{{ away }}</div>
        </div>
        <div v-if="getOneBets && getOneBets.length" class="bets-info">
          <div v-for="(bet, index) in getOneBets" :key="index" class="bet-item">
            <bet-item-cut
              :ratio-name="bet.ratioName"
              :play-type="bet.playType"
              class="bet-name"
            >
              {{ bet.ratioName }}
            </bet-item-cut>
            <bet-ior class="bet-ior" :bet-info="bet" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script  lang="ts" setup>

import VideoBox from './child/VideoBox'
import BetIor from './child/BetIor'
import BetItemCut from './child/BetItemCut'
import head from './child/assets/default-head.jpg'

import coverDj from './child/assets/dj.jpg'
import coverFt from './child/assets/ft.jpg'
import coverBk from './child/assets/bk.jpg'

import NotStartedTips from './child/NotStartedTips/index.vue'

// import homeIcon from './child/assets/icon_team_home.png'
// import awayIcon from './child/assets/icon_team_away.png'

import { imgUrlFormat } from '@/utils/index'

import { ratioDataSort } from './child/gameSort'

import { ref, computed, watch, onBeforeMount, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  liveInfo: {
    type: Object,
    default: () => {}
  },
  matchIndex: {
    type: Number,
    default: 0
  },
  activeIndex: {
    type: Number,
    default: 0
  }
})

const MPlayTypes = ref(['M', 'RM'])
const RPlayTypes = ref(['R', 'RE'])
const OUPlayTypes = ref(['OU', 'ROU'])
const MPlays = ref([])
const RPlays = ref([])
const OUPlay = ref([])
const refreshState = ref(false)
const avatarError = ref(false)

const headPortrait = computed(() => {
  if (props.liveInfo?.headPortrait && !avatarError.value) {
    return imgUrlFormat(props.liveInfo.headPortrait)
  }
  return head
})

const type = computed(() => {
  return props.liveInfo.recommendType
})

const cover = computed(() => {
  if (props.liveInfo.recommendType * 1 === 2 && props.liveInfo?.cover) {
    return imgUrlFormat(props.liveInfo.cover)
  }
  const { gameType } = matchInfo
  if (gameType === 'FT') {
    return coverFt
  }
  if (gameType === 'BK') {
    return coverBk
  }
  return coverDj
})

const matchInfo = computed(() => {
  return props.liveInfo.gameBasic || {}
})

const home = computed(() => {
  return matchInfo.value?.homeTeamAbbr || matchInfo.value?.homeTeam
})

const away = computed(() => {
  return matchInfo.value?.awayTeamAbbr || matchInfo.value?.awayTeam
})

// const homeLogo = computed(() => {
//   if (matchInfo.value?.homeLogo) {
//     return imgUrlFormat(matchInfo.value.homeLogo)
//   }
//   return homeIcon
// })

// const awayLogo = computed(() => {
//   if (matchInfo.value?.homeLogo) {
//     return imgUrlFormat(matchInfo.value.awayLogo)
//   }
//   return awayIcon
// })

const getOneBets = computed(() => {
  const play1 = MPlays.value.slice(0, 1)
  const play2 = RPlays.value.slice(0, 1)
  const play3 = OUPlay.value.slice(0, 1)
  const bets = [...play1, ...play2, ...play3]
  const onePlay = bets[0]
  if (!onePlay) {
    return false
  }
  const ratios = onePlay?.ratioData || []
  ratios.map(i => {
    if (i.ratioType === 'MH' || i.ratioType === 'RMH') {
      i.ratioName = '1'
    }
    if (i.ratioType === 'MN' || i.ratioType === 'RMN') {
      i.ratioName = 'x'
    }
    if (i.ratioType === 'MC' || i.ratioType === 'RMC') {
      i.ratioName = '2'
    }
  })
  let sortArray = []
  if (onePlay.playType === 'M' || onePlay.playType === 'RM') {
    sortArray = ['MH', 'RMH', 'MN', 'RMN', 'MC', 'RMC']
  }
  if (onePlay.playType === 'R' || onePlay.playType === 'RE') {
    sortArray = ['RH', 'RC', 'REH', 'REC']
  }
  if (onePlay.playType === 'OU' || onePlay.playType === 'ROU') {
    sortArray = ['OUC', 'OUH', 'ROUC', 'ROUH']
  }
  return ratios.sort((a, b) => {
    return sortArray.indexOf(a.ratioType) - sortArray.indexOf(b.ratioType)
  })
})
const score = computed(() => {
  if (
    matchInfo.value?.showType === 'FT' ||
        matchInfo.value?.showType === 'FU'
  ) {
    return 'vs'
  }
  return `${scoreH.value || 0}:${scoreA.value || 0}`
})

// const needPlays = computed(() => {
//   return [...MPlayTypes.value, ...RPlayTypes.value, ...OUPlayTypes.value]
// })

const notStarted = computed(() => {
  if (props.liveInfo.recommendType * 1 === 2) {
    return false
  }
  if (props.liveInfo.recommendType * 1 === 1) {
    return !props.liveInfo.status
  }
  if (props.liveInfo.recommendType * 1 === 3) {
    return (
      matchInfo.value?.showType === 'FT' || matchInfo.value?.showType === 'FU'
    )
  }
  return !props.liveInfo.m3u8 && !props.liveInfo.url
})

const gameInfo = computed(() => {
  return matchInfo.value.gameInfo
})

const scoreH = computed(() => {
  const { gameType } = matchInfo
  if (gameType === 'FT') {
    return gameInfo.value['sc_FT_H']
  }
  if (gameType === 'BK') {
    return gameInfo.value['sc_FT_H']
  }
  return gameInfo.value['sc_FT_H'] || gameInfo.value['sc_game_H'] || 0
})

const scoreA = computed(() => {
  const { gameType } = matchInfo
  if (gameType === 'FT') {
    return gameInfo.value['sc_FT_C']
  }
  if (gameType === 'BK') {
    return gameInfo.value['sc_FT_A']
  }
  return gameInfo.value['sc_FT_A'] || gameInfo.value['sc_FT_C'] || 0
})

watch(() => props.activeIndex, () => {
  if (props.activeIndex === props.matchIndex) {
    refreshState.value = true
  } else {
    refreshState.value = false
  }
})

watch(() => props.liveInfo, () => {
  init()
})

onBeforeMount(() => {
  if (props.activeIndex === props.matchIndex) {
    refreshState.value = true
  } else {
    refreshState.value = false
  }
  init()
})

const init = () => {
  MPlays.value = []
  RPlays.value = []
  OUPlay.value = []
  const { M, RM, R, RE, OU, ROU } = matchInfo
  M && MPlays.value.push(ratiosFilter(M))
  RM && MPlays.value.push(ratiosFilter(RM))
  R && RPlays.value.push(ratiosFilter(R))
  RE && RPlays.value.push(ratiosFilter(RE))
  OU && OUPlay.value.push(ratiosFilter(OU))
  ROU && OUPlay.value.push(ratiosFilter(ROU))
}

const ratiosFilter = (playInfo) => {
  const {
    gidm,
    homeTeam,
    awayTeam,
    leagueId,
    leagueName,
    gameType,
    gameTypeSon,
    showtype,
    gameDate,
    sourceCompany,
    systemId
  } = matchInfo
  const game = playInfo.game
  const { playType } = playInfo
  const { session, strong, hstrong, hgid, gameId } = game
  let suffix
  if (game?.suffix) {
    suffix = game.suffix
  }
  ratioDataSort(playInfo, {
    gameDate,
    homeTeam,
    awayTeam,
    leagueId,
    leagueName,
    playType,
    strong,
    hstrong,
    gidm,
    hgid,
    gameId,
    gameType,
    gameTypeSon,
    showtype,
    session,
    suffix,
    sourceCompany,
    systemId
  })

  return playInfo
}

const refresh = () => {
  refreshState.value = false
  nextTick(() => {
    refreshState.value = true
  })
}

const goDetails = () => {
  // if (props.liveInfo.recommendType * 1 === 2) {
  //   window.parent.postMessage(
  //     {
  //       event: 'AISPORT_H5_LIVING_FREE_DETAILS',
  //       data: {
  //         liveId: props.liveInfo.liveId,
  //         liveGame: props.liveInfo.liveGame || 'sports',
  //         anchorId: props.liveInfo.anchorId
  //       }
  //     },
  //     '*'
  //   )
  // } else {
  //   window.parent.postMessage(
  //     {
  //       event: 'AISPORT_H5_GAME_DETAILS',
  //       data: {
  //         gidm: props.liveInfo.gidm,
  //         anchorId: props.liveInfo.anchorId
  //       }
  //     },
  //     '*'
  //   )
  // }
}

</script>
<style lang="scss" scoped>
.match-item-wrap {
  position: relative;
  height: 188px;
  background: url(~@/assets/images/sportlive/cover.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;

  .live-info-wrap {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 10px;
    z-index: 99;
  }

  .anchor-info-wrap {
    .anchor-info {
      display: inline-block;
      position: relative;
      height: 24px;
      line-height: 24px;
      padding-left: 25px;
      padding-right: 8px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 18px;
      .anchor-avatar {
        position: absolute;
        left: 1px;
        top: 1px;
        width: 22px;
        height: 22px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .anchor-name {
        max-width: 200px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 400;
      }
    }
  }
  .free-live-content {
    font-size: 12px;
    color: #ffffff;
    line-height: 18px;
    font-weight: 400;
    padding: 0 3px;
  }
  .match-bets-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .match-info {
      display: flex;
      align-items: center;
      overflow: hidden;
      .team-name {
        max-width: 48px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 500;
        &.right {
          text-align: right;
        }
        &.left {
          text-align: left;
        }
      }
      .team-score {
        min-width: 30px;
        font-size: 14px;
        color: #ff4657;
        text-align: center;
        font-weight: 800;
        padding: 0 2px;
      }
    }
  }
  .bets-info {
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 180px;
    .bet-item {
      flex: 1;
      display: flex;
      align-items: center;
      width: 58px;
      height: 24px;
      padding: 4px 2px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      overflow: hidden;
      &:not(:first-child) {
        margin-left: 4px;
      }
      .bet-name {
        flex: 1;
        font-size: 12px;
        color: #ffffff;
        font-weight: 400;
      }
      .bet-ior {
        font-size: 11px;
        color: #ffffff;
        text-align: center;
        font-weight: 800;
      }
    }
  }
}
</style>
