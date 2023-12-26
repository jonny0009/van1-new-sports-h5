<template>
  <div class="panel-bet">
    <div v-if="betPlayListFilter.length === 0" class="no-data">
      <EmptyIcon />
    </div>
    <van-collapse v-else v-model="activeNames">
      <van-collapse-item v-for="(play, i) in betPlayListFilter" :key="i" :name="`${i + 1}`" :border="false">
        <template #title>
          <span v-play="play.playInfo"></span>
          <!-- {{ play.dataInfo.playType }} -->
        </template>
        <div class="bet" :class="getBetCol(play.dataInfo)">
          <BettingOption v-for="(item, ind) in play.dataInfo.ratioData" :key="ind" class="bet-item" :market-info="item">
            <div class="top">
              <span>{{ item.ratioName }}</span>
            </div>
            <div class="bot">
              <span class="num">{{ item.vior }}</span>
              <span v-show="false" class="ico">
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
import { computed } from 'vue'
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  }
})
watch(
  () => props.matchInfo,
  () => {
    getBetData()
  }
)
onMounted(() => {
  getBetData()
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
const betPlayListFilter = computed(() => {
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
