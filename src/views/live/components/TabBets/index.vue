<template>
  <div class="panel-bet">
    <div class="no-data" v-if="betPlayList.length === 0">
      <EmptyIcon />
    </div>
    <van-collapse v-else v-model="activeNames">
      <van-collapse-item v-for="(play, i) in betPlayList" :key="i" :name="`${i + 1}`" :border="false">
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
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted, watch } from 'vue'
import { MarketInfo } from '@/entitys/MarketInfo'
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  }
})

const activeNames = ref(['1'])
const betPlayList: Ref<any[]> = ref([])
const getBetData = () => {
  const { detail, gameType, systemId, homeTeam, awayTeam } = props.matchInfo
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
  () => props.matchInfo,
  () => {
    getBetData()
  }
)

onMounted(() => {
  getBetData()
})
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  justify-content: center;
  padding: 100px 0 0 0;
}
.panel-bet {
  padding: 0 36px;
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
      .van-icon-arrow {
        color: #1f2630;
        font-weight: 700;
      }
    }
    :deep(.van-collapse-item__content) {
      background: none;
      padding: 0;
    }
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
</style>
