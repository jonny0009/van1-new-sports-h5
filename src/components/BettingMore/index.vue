<template>
  <van-popup
    v-model:show="showPopup"
    class="betting-more-popup"
    position="right"
    :overlay="false"
    :style="{ zIndex: 96 }"
  >
    <div class="betting-more-container">
      <van-pull-refresh v-model="loading" @refresh="getPlayData">
        <div class="team">
          <div class="team-header">
            <div class="league">
              <SvgIcon name="live-football" />
              <span>{{ moreParams.leagueName }}</span>
            </div>
            <div class="date">{{ formatToDate(moreParams.gameDate, 'MM-DD HH:mm') }}</div>
          </div>
          <div class="team-box">
            <div class="team-player host">
              <div class="img-num">
                <img v-img="moreParams.homeLogo" :type="2" alt="" />
                <span>{{ setMatch.getScore(moreParams, 'H') }}</span>
              </div>
              <strong>{{ moreParams.homeTeam }}</strong>
            </div>
            <div class="team-score" @click="gotoLive">
              <span class="default" v-html="setMatch.showRBTime(moreParams)"></span>
              <span class="icons" v-if="moreParams.showtype == 'RB'">
                <SvgIcon name="live-play" />
              </span>
            </div>
            <div class="team-player away">
              <div class="img-num">
                <span>{{ setMatch.getScore(moreParams, 'C') }}</span>
                <img v-img="moreParams.awayLogo" :type="2" alt="" />
              </div>
              <strong>{{ moreParams.awayTeam }}</strong>
            </div>
          </div>
        </div>

        <div class="bettings">
          <Loading v-if="isLoading" />
          <div v-else-if="betPlayListComputed.length === 0" class="no-data">
            <EmptyIcon />
          </div>
          <van-collapse v-else v-model="activeNames">
            <!-- <van-collapse-item title="竞猜分析" name="-1" :border="false">
              <BetAnalyze />
            </van-collapse-item> -->

            <van-collapse-item
              v-for="(play, index) in betPlayListComputed"
              :key="index"
              :name="index + ''"
              :border="false"
            >
              <template #title>
                <span v-play="play.playInfo"></span>
              </template>
              <div class="bet" :class="getBetCol(play.dataInfo)">
                <BettingOption
                  v-for="(item, ind) in play.dataInfo.ratioData"
                  :key="ind"
                  class="bet-item"
                  :market-info="item"
                >
                  <template #default="scope">
                    <div class="bet-top">
                      <span class="name">{{ item.ratioMatch || item.ratioName }}</span>
                      <span class="tag">{{ item.ratioTag }}</span>
                    </div>
                    <div class="bet-bot">
                      <img v-if="scope.lock" class="lock" src="@/assets/images/live/lock.png" alt="" />
                      <template v-else>
                        <span class="num">{{ item.vior }}</span>
                        <span v-show="false" class="ico">
                          <img src="@/assets/images/live/sub.png" alt="" />
                        </span>
                      </template>
                    </div>
                  </template>
                </BettingOption>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </van-pull-refresh>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import { computed, Ref, ref, watch } from 'vue'
import { formatToDate } from '@/utils/date'
import { matcheInfo } from '@/api/live'
import { MarketInfo } from '@/entitys/MarketInfo'
import { useMatch } from '@/utils/useMatch'
import store from '@/store'
import router from '@/router'
// import BetAnalyze from './BetAnalyze.vue'

const setMatch = useMatch()
const showPopup = computed(() => store.state.betting.moreShow)
const moreParams = computed(() => {
  return store.state.betting.moreParams
})
watch(
  () => showPopup.value,
  (flag: boolean) => {
    if (flag) {
      isLoading.value = true
      betPlayList.value = []
    }
  }
)
watch(
  () => moreParams.value,
  () => {
    getPlayData()
  }
)

const gotoLive = () => {
  const { showtype, gidm } = moreParams.value
  if (showtype == 'RB') {
    router.push(`/live/${gidm}`)
    store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })
  }
}

const loading = ref(false)
const isLoading = ref(false)
const activeNames = ref(['0'])
const getPlayData = async () => {
  const gidm = moreParams.value.gidm
  const res: any = await matcheInfo({ gidm })
  if (res.code == 200) {
    buildBetList(res.data)
    loading.value = false
    isLoading.value = false
  }
}
const betPlayList: Ref<any[]> = ref([])
const buildBetList = (data: any) => {
  const { detail, gameType, systemId, homeTeam, awayTeam } = data
  if (detail && detail.length > 0) {
    const dataList = detail.map((ele: any) => {
      const { playData, game } = ele

      const result = playData.map((item: any) => {
        const dataInfo = { ...item }
        const playInfo = {
          gameType: gameType,
          playType: dataInfo.playType,
          championType: game.championType,
          session: game.session
        }
        dataInfo.ratioData = item.ratioData.map((ratioInfo: any) => {
          return new MarketInfo({
            ...ratioInfo,
            systemId: systemId,
            gameType: gameType,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            gameId: game.gameId,
            gidm: game.gidm,
            playType: dataInfo.playType,
            sw: dataInfo.sw,
            championType: dataInfo.championType,
            ratio: dataInfo.ratio || '0'
          })
        })
        return { playInfo, dataInfo }
      })

      return result
    })
    betPlayList.value = dataList.flat()
  } else {
    betPlayList.value = []
  }
}

const betPlayListComputed = computed(() => {
  const noExist = ['HDNB2', 'HDNB', 'HTS2', 'HW3', 'W3_conner', 'W3', 'PD_conner', 'HT_conner', 'T_conner']
  return betPlayList.value.filter((item) => !noExist.includes(item.dataInfo.playType))
})

const getBetCol = (dataInfo: any) => {
  const { ratioData } = dataInfo
  if (ratioData.length === 3) {
    return 'col-3'
  }
  return 'col-2'
}
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  justify-content: center;
  padding: 50px 0 0 0;
}
.betting-more-popup {
  width: 100%;
  height: 100%;
  padding-top: 96px;
  padding-bottom: calc(88px + 96px);
}
.betting-more-container {
  padding: 0 36px;
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
    .van-hairline--top-bottom:after {
      border: none;
    }
    .van-collapse-item {
      background: #eff1f2;
      border-radius: 10px;
      margin-bottom: 20px;
      :deep(.van-collapse-item__title) {
        background: none;
        color: #1f2630;
        font-weight: 700;
        font-size: 24px;
        .van-icon-arrow {
          color: #1f2630;
          font-weight: 700;
          font-size: 24px;
        }
      }
      :deep(.van-collapse-item__content) {
        background: none;
        padding: 0;
      }
    }

    .bet {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      padding: 0 20px 20px 20px;
      display: grid;
      grid-gap: 20px;
      &.col-2 {
        grid-template-columns: 1fr 1fr;
      }
      &.col-3 {
        grid-template-columns: 1fr 1fr 1fr;
      }
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #ffffff;
        color: #546371;
        border-radius: 20px;
        height: 94px;
        overflow: hidden;
        &.selected {
          background: #7643fd;
          color: #fff;
        }
      }
      &-top {
        display: flex;
        justify-content: center;
        font-size: 24px;
        letter-spacing: 0;
        font-weight: 500;
        padding: 0 20px;
        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .tag {
          margin-left: 6px;
        }
      }
      &-bot {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        margin-top: 4px;
        img {
          display: block;
          width: 100%;
        }
        .ico {
          width: 22px;
          margin-left: 12px;
        }
        .lock {
          width: 22px;
        }
      }
    }
  }
}
</style>
