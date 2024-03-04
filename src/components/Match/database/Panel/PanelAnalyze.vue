<template>
  <div class="analyze">
    <van-swipe indicator-color="#9417D5">

      <van-swipe-item
        v-for="item in list"
        :key="item"
      >

        <div class="analyze-header">
          <div class="host">
            <img
              src="@/assets/images/live/sub_d.png"
              alt=""
            />
            <span>{{ matchData.homeTeamShort || matchData.homeTeam }}</span>
          </div>
          <div class="away">
            <span>{{ matchData.awayTeamShort || matchData.awayTeam }}</span>
            <img
              src="@/assets/images/live/sub_u.png"
              alt=""
            />
          </div>
        </div>
        <div class="analyze-item">
          <div class="analyze-title">{{ item.name }} — {{ $t('user.NumberOfBets') }}</div>
          <div class="analyze-content">
            <section
              class="host"
              :style="{ flex: `${item.ratios[0].betCountRate * 100} 1 0%` }"
            >
              <div class="percent">{{ calcRatioPer(item.ratios[0].betCountRate) }}%</div>
              <div class="bar"></div>
              <div
                v-if="(item.ratios.length == 2 && item.ratios[0].betCountRate >= item.ratios[1].betCountRate) || (item.ratios.length == 3 && item.ratios[0].betCountRate >= item.ratios[1].betCountRate && item.ratios[0].betCountRate >= item.ratios[2].betCountRate)"
                class="value"
              >
                <span>{{ item.ratios[0].betCount }}</span>
              </div>
            </section>
            <section
              v-if="item.ratios.length === 3"
              class="draw"
              :style="{ flex: `${item.ratios[1].betCountRate * 100} 1 0%` }"
            >
              <div class="percent">{{ calcRatioPer(item.ratios[1].betCountRate) }}%</div>
              <div class="bar"></div>
              <div
                v-if="item.ratios[1].betCountRate > item.ratios[0].betCountRate && item.ratios[1].betCountRate > item.ratios[2].betCountRate"
                class="value"
              >
                <span>{{ item.ratios[1].betCount }}</span>
              </div>
            </section>
            <section
              class="away active"
              :style="{ flex: `${item.ratios[item.ratios.length - 1].betCountRate * 100} 1 0%` }"
            >
              <div class="percent">{{ calcRatioPer(item.ratios[item.ratios.length - 1].betCountRate) }}%</div>
              <div class="bar"></div>
              <div

                v-if="(item.ratios.length == 2 && item.ratios[1].betCountRate > item.ratios[0].betCountRate) || (item.ratios.length == 3 && item.ratios[2].betCountRate >= item.ratios[1].betCountRate && item.ratios[2].betCountRate > item.ratios[0].betCountRate)"
                class="value"
              >
                <span>{{ item.ratios[item.ratios.length - 1].betCount }}</span>
              </div>
            </section>
          </div>
        </div>
        <div class="analyze-item">
          <div class="analyze-title">{{ item.name }} — {{ $t('user.BetAmount') }}</div>
          <div class="analyze-content">
            <section
              class="host"
              :style="{ flex: `${item.ratios[0].betGoldRate * 100} 1 0%` }"
            >
              <div class="percent">{{ calcRatioPer(item.ratios[0].betGoldRate) }}%</div>
              <div class="bar"></div>
              <div
                v-if="(item.ratios.length == 2 && item.ratios[0].betCountRate >= item.ratios[1].betCountRate) || (item.ratios.length == 3 && item.ratios[0].betCountRate >= item.ratios[1].betCountRate && item.ratios[0].betCountRate >= item.ratios[2].betCountRate)"

                class="value"
              >
                <Currency /><span v-points="item.ratios[0].betGold"></span>
              </div>
            </section>
            <section
              v-if="item.ratios.length === 3"
              class="draw"
              :style="{ flex: `${item.ratios[1].betGoldRate * 100} 1 0%` }"
            >
              <div class="percent">{{ calcRatioPer(item.ratios[1].betGoldRate) }}%</div>
              <div class="bar"></div>
              <div

                v-if="item.ratios[1].betCountRate > item.ratios[0].betCountRate && item.ratios[1].betCountRate > item.ratios[2].betCountRate"

                class="value"
              >
                <Currency /><span v-points="item.ratios[1].betGold"></span>
              </div>
            </section>
            <section
              class="away active"
              :style="{ flex: `${item.ratios[item.ratios.length - 1].betGoldRate * 100} 1 0%` }"
            >
              <div class="percent">{{ calcRatioPer(item.ratios[item.ratios.length - 1].betGoldRate) }}%</div>
              <div class="bar"></div>
              <div
                v-if="(item.ratios.length == 2 && item.ratios[1].betCountRate > item.ratios[0].betCountRate) || (item.ratios.length == 3 && item.ratios[2].betCountRate >= item.ratios[1].betCountRate && item.ratios[2].betCountRate > item.ratios[0].betCountRate)"

                class="value"
              >
                <Currency /><span v-points="item.ratios[item.ratios.length - 1].betGold"></span>
              </div>
            </section>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import playName from '@/utils/playName'

import Currency from '@/components/Currency/index.vue'

const props = defineProps({
  data: {
    type: Array as any,
    default: () => []
  },
  matchData: {
    type: Object,
    default: () => {}
  }
})
const plays = ['RE', 'R', 'RM', 'M', 'ROU', 'OU']

const list = computed(() => {
  const showList: any[] = []
  const gameType = props.matchData.gameType
  const session = gameType === 'BK' ? '0' : ''
  plays.forEach((playType: any) => {
    const playList = props.data[playType]

    if (playList?.length) {
      const playData = window.aiRatioType[playType]
      const sorts = playData.sort
      const ratios = sorts.map((ratioType: any) => {
        const find = playList.find((play: any) => play.ratioType === ratioType)
        if (find) {
          return find
        }
        return {
          ...playList[0],
          betCountRate: 0,
          betGoldRate: 0,
          playType,
          ratioType
        }
      })
      console.log(ratios, '--')
      showList.push({
        name: playName({ gameType, playType, session }),
        ratios
      })
    }
  })

  return showList
})

const calcRatioPer = (num: any) => {
  return (num * 100)?.toFixed(2)
}
</script>

<style lang="scss" scoped>
.analyze {
  height: 420px;
  padding: 4px;
  font-size: 24px;
  .van-swipe {
    height: 100%;
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
        // visibility: hidden;
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

:deep(.van-swipe__indicator) {
  width: 20px;
  height: 8px;
  border-radius: 10px;
  background-color: #fff;
}

:deep(.van-swipe__indicator--active) {
  background-color: var(--color-primary) !important;
}
</style>
