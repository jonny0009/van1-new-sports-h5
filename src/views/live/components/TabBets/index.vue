<template>
  <div class="panel-bet">
    <div v-if="Object.keys(betPlayMap).length === 0" class="no-data">
      <EmptyIcon />
    </div>
    <van-collapse v-else v-model="activeNames">
      <van-collapse-item v-for="(play, i) in Object.keys(betPlayMap)" :key="i" :name="`${i + 1}`" :border="false">
        <template #title>
          <span v-play="betPlayMap[play].playInfo"></span>
        </template>
        <div :class="['bet', betPlayMap[play].ratioList?.length === 3 ? 'col-3' : 'col-2']">
          <BettingOption
            class="bet-item"
            v-for="(item, ind) in betPlayMap[play].ratioList"
            :key="ind"
            :market-info="item"
          >
            <template #default="scope">
              <div class="bet-top">
                <span class="name">{{ item.ratioMatch || item.ratioName }}</span>
                <span class="tag">{{ item.ratioTag }}</span>
              </div>
              <div class="bet-bot">
                <img class="lock" v-if="scope.lock" src="@/assets/images/live/lock.png" alt="" />
                <div class="odds" v-else>
                  <i
                    class="vior-down"
                    v-if="matchInfo.showtype == 'RB'"
                    :class="{ 'change-odds': scope.iorChange === 'down-ior' }"
                  ></i>
                  <span class="num">{{ item.vior }}</span>
                  <i
                    class="vior-up"
                    v-if="matchInfo.showtype == 'RB'"
                    :class="{ 'change-odds': scope.iorChange === 'up-ior' }"
                  ></i>
                </div>
              </div>
            </template>
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
  const { detail, gameType, systemId, homeTeamAbbr, awayTeamAbbr } = props.matchInfo
  if (detail && detail.length > 0) {
    const playDataList: any[] = []
    detail.forEach((ele: any) => {
      const { playData, game } = ele
      for (const item of playData) {
        const dataInfo = { ...item }
        const playInfo = {
          gameType: gameType,
          homeTeam: homeTeamAbbr,
          awayTeam: awayTeamAbbr,
          playType: dataInfo.playType,
          championType: game.championType,
          session: game.session
        }
        const ratioList = dataInfo.ratioData.map((ratioInfo: any) => {
          return new MarketInfo({
            ...ratioInfo,
            systemId: systemId,
            gameType: gameType,
            homeTeam: homeTeamAbbr,
            awayTeam: awayTeamAbbr,
            gameId: game.gameId,
            gidm: game.gidm,
            playType: dataInfo.playType,
            sw: dataInfo.sw,
            championType: dataInfo.championType,
            ratio: dataInfo.ratio
          })
        })
        playDataList.push({
          typeTemp: `${playInfo.playType}-${playInfo.session}`,
          playInfo,
          ratioList
        })
      }
    })
    const noExist = ['HDNB2', 'HDNB', 'HTS2', 'HW3', 'W3_conner', 'W3', 'PD_conner', 'HT_conner', 'T_conner']
    betPlayList.value = playDataList.filter((item) => !noExist.includes(item.playInfo.playType))
  }
}

const betPlayMap = computed(() => {
  const playTypeList = betPlayList.value.map((m: any) => m.typeTemp)
  const playTypeData = Array.from(new Set(playTypeList))

  const resultMap: any = {}
  playTypeData.forEach((type: string) => {
    resultMap[type] = {
      typeTemp: type,
      ratioList: []
    }
    for (const item of betPlayList.value) {
      if (item.typeTemp == type) {
        resultMap[type].playInfo = item.playInfo
        resultMap[type].ratioList.push(...item.ratioList)
      }
    }
  })

  return resultMap
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
    .odds {
      display: flex;
      align-items: center;
      .num {
        margin: 0 10px;
      }
    }
    .lock {
      width: 22px;
    }
  }
}
</style>
