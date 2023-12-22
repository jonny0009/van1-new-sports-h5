<template>
  <van-popup
    class="betting-more-popup"
    v-model:show="showPopup"
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
              <img v-img="moreParams.homeLogo" :type="2" alt="" />
              <strong>{{ moreParams.homeTeam }}</strong>
            </div>
            <div class="team-score">
              <span class="default">未开始</span>
            </div>
            <div class="team-player away">
              <img v-img="moreParams.awayLogo" :type="2" alt="" />
              <strong>{{ moreParams.awayTeam }}</strong>
            </div>
          </div>
        </div>

        <div class="bettings">
          <Loading v-if="isLoading" />
          <div class="no-data" v-else-if="betPlayList.length === 0">
            <EmptyIcon />
          </div>
          <van-collapse v-else v-model="activeNames">
            <!-- <van-collapse-item title="竞猜分析" name="0" :border="false">
              <div class="analyze">
                <van-swipe indicator-color="#9417D5">
                  <van-swipe-item v-for="item in 3" :key="item">
                    <div class="analyze-header">
                      <div class="host">
                        <img src="@/assets/images/live/sub_d.png" alt="" />
                        <span>水晶宫 U21</span>
                      </div>
                      <div class="away">
                        <span>西汉姆 U21</span>
                        <img src="@/assets/images/live/sub_u.png" alt="" />
                      </div>
                    </div>
                    <div class="analyze-item">
                      <div class="analyze-title">独赢 — 投注次数</div>
                      <div class="analyze-content">
                        <section class="host" style="flex: 33.3 1 0%">
                          <div class="percent">33.3%</div>
                          <div class="bar"></div>
                          <div class="value">
                            <span>1</span>
                          </div>
                        </section>
                        <section class="draw" style="flex: 0 1 0%">
                          <div class="percent">0%</div>
                          <div class="bar"></div>
                          <div class="value">
                            <span>0</span>
                          </div>
                        </section>
                        <section class="away active" style="flex: 66.7 1 0%">
                          <div class="percent">66.7%</div>
                          <div class="bar"></div>
                          <div class="value">
                            <span>3</span>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div class="analyze-item">
                      <div class="analyze-title">独赢 — 投注次数</div>
                      <div class="analyze-content">
                        <section class="host" style="flex: 33.3 1 0%">
                          <div class="percent">33.3%</div>
                          <div class="bar"></div>
                          <div class="value">
                            <span>1</span>
                          </div>
                        </section>
                        <section class="draw" style="flex: 0 1 0%">
                          <div class="percent">0%</div>
                          <div class="bar"></div>
                          <div class="value">
                            <span>0</span>
                          </div>
                        </section>
                        <section class="away active" style="flex: 66.7 1 0%">
                          <div class="percent">66.7%</div>
                          <div class="bar"></div>
                          <div class="value">
                            <span>3</span>
                          </div>
                        </section>
                      </div>
                    </div>
                  </van-swipe-item>
                </van-swipe>
              </div>
            </van-collapse-item> -->

            <van-collapse-item v-for="(play, index) in betPlayList" :key="index" :name="index + ''" :border="false">
              <template #title>
                <span v-play="play.playInfo"></span>
              </template>
              <div class="bet">
                <BettingOption
                  class="bet-item"
                  v-for="(item, ind) in play.dataInfo?.ratioData"
                  :key="ind"
                  :market-info="item"
                >
                  <div class="top">
                    <span>{{ item.ratioName }}</span>
                  </div>
                  <div class="bot">
                    <span class="num">{{ item.ior }}</span>
                    <span class="ico" v-show="false">
                      <img src="@/assets/images/live/sub.png" alt="" />
                    </span>
                  </div>
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
import store from '@/store'

const showPopup = computed(() => store.state.betting.moreShow)
const moreParams = computed(() => store.state.betting.moreParams)

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
        .svg-icon {
          margin-right: 6px;
        }
      }
    }
    &-box {
      display: flex;
      margin: 40px 0 0 0;
      padding: 0 33px;
    }

    &-player {
      width: 220px;
      display: flex;
      flex-direction: column;
      img {
        display: block;
        width: 62px;
        height: 62px;
        margin-bottom: 17px;
      }
      strong {
        display: block;
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &.host {
        align-items: flex-start;
      }
      &.away {
        align-items: flex-end;
      }
    }

    &-score {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .default {
        color: #b1b8bf;
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
      display: flex;
      flex-wrap: wrap;
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 310px;
        height: 94px;
        background: #ffffff;
        color: #546371;
        border-radius: 20px;
        margin: 0 0 20px 20px;
        &.selected {
          background: #7643fd;
          color: #fff;
        }
      }
      .top {
        font-size: 24px;
        letter-spacing: 0;
        font-weight: 500;
        text-align: center;
      }
      .bot {
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

    .analyze {
      height: 420px;
      padding: 4px;
      font-size: 24px;
      .van-swipe {
        height: 100%;
        background: #ffffff;
        border-radius: 10px;
        .van-swipe-item {
          padding: 0 8px;
        }
      }

      &-header {
        padding: 16px 8px 10px 8px;
        border-bottom: 1px solid #e5ecf3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          display: flex;
          align-items: center;
          color: #546371;
          img {
            width: 24px;
            height: 24px;
          }
        }
        .host img {
          margin-right: 8px;
        }
        .away img {
          margin-left: 8px;
        }
      }

      &-title {
        font-weight: 800;
        color: #1f2630;
        padding: 16px 0;
        text-align: center;
      }

      &-content {
        display: flex;
        padding: 0 40px;
        > section {
          &:not(:first-child) {
            margin-left: 8px;
          }
          .bar {
            width: 100%;
            height: 8px;
            margin-top: 4px;
            transition: all 0.3s;
          }
          .value {
            visibility: hidden;
            font-size: 24px;
            line-height: 1.6;
            transition: all 0.3s;
          }
          .percent {
            font-weight: 800;
            font-size: 24px;
            line-height: 1.6;
          }
        }
        > section.host {
          color: #0065cd;
          .bar {
            background-color: #0065cd;
          }
        }
        > section.draw {
          color: #96a5aa;
          .bar {
            background-color: #96a5aa;
          }
        }
        > section.away {
          text-align: right;
          color: #cb0028;
          .bar {
            background-color: #cb0028;
          }
        }
        > section.active {
          .bar {
            height: 12px;
            margin-top: 0;
          }
          .value {
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>
