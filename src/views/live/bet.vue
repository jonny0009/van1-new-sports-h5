<template>
  <div class="bet-container">
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
            <img v-img="matchInfo.homeLogo" :type="2" alt="" />
            <span>{{ setMatch.getScore(matchInfo, 'H') }}</span>
          </div>
          <strong>{{ matchInfo.homeTeam }}</strong>
        </div>
        <div class="team-score" @click="gotoLive">
          <span class="default" v-html="setMatch.showRBTime(matchInfo)"></span>
          <span class="icons" v-if="matchInfo.showtype == 'RB'">
            <SvgIcon name="live-play" />
          </span>
        </div>
        <div class="team-player away">
          <div class="img-num">
            <span>{{ setMatch.getScore(matchInfo, 'C') }}</span>
            <img v-img="matchInfo.awayLogo" :type="2" alt="" />
          </div>
          <strong>{{ matchInfo.awayTeam }}</strong>
        </div>
      </div>
    </div>

    <div class="bettings">
      <Loading v-if="isLoading" />
      <div v-else-if="playBetList.length === 0" class="no-data">
        <EmptyIcon />
      </div>
      <BettingCollapse v-else :data-list="playBetList" :match-info="matchInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { matcheInfo } from '@/api/live'
import { useMatch } from '@/utils/useMatch'
import { useBetting } from '@/utils/useBetting'
import { formatToDate } from '@/utils/date'
import BettingCollapse from '@/components/BettingCollapse/index.vue'

const route = useRoute()
const router = useRouter()
const setMatch = useMatch()
const { getPlayGroupType } = useBetting()
onMounted(() => {
  getMatcheInfo()
  onInterval()
})

let intervalTimer: any = null
const onInterval = () => {
  unInterval()
  intervalTimer = setInterval(() => {
    getMatcheInfo(false)
  }, 5000)
}
const unInterval = () => {
  if (intervalTimer) {
    clearInterval(intervalTimer)
    intervalTimer = null
  }
}

const matchInfo: any = ref({})
const isLoading = ref(false)
const playBetList: Ref<any> = ref([])
const getMatcheInfo = async (toggle: boolean = true) => {
  isLoading.value = toggle
  const gidm = route.params['id']
  const res: any = await matcheInfo({ gidm })
  matchInfo.value = res.data || {}
  if (res.code == 200) {
    playBetList.value = await getPlayGroupType(matchInfo.value)
    isLoading.value = false
  }
}

const gotoLive = () => {
  const { showtype, gidm } = matchInfo.value
  if (showtype == 'RB') {
    router.push(`/live/${gidm}`)
  }
}
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  justify-content: center;
  padding: 50px 0 0 0;
}
.bet-container {
  padding: 0 36px;
  padding-bottom: calc(88px + 96px);
  .team {
    height: 252px;
    background: url('@/assets/images/live/game_mask.png') no-repeat;
    background-size: auto 100%;
    margin: 40px 0 20px 0;
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

  .bettings {
    padding-bottom: 30px;
  }
}
</style>
