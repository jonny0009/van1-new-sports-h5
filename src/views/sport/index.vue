<template>
  <div class="sport-page">
    sport-page<br>
    sport-page<br>
    sport-page<br>

    <ChampionList v-if="championList.length" :champion-list="championList" />
  </div></template>

<script lang="ts" setup>
import ChampionList from './champion/index.vue'
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import { apiChampionpPlayTypes } from '@/api/champion'
import { MarketInfo } from '@/entitys/MarketInfo'

onBeforeMount(async () => {
  console.log(leagueId.value)
  getChampionpPlayTypes()
})

const route = useRoute()
const leagueId: any = ref(route.query.leagueId)
const championList: any = ref([])

// 获取冠军
const getChampionpPlayTypes = async () => {
  if (leagueId.value) {
    const res:any = await apiChampionpPlayTypes({ page: 1, pageSize: 10, leagueIds: leagueId.value }) || {}
    if (res.code === 200 && res.data) {
      const gameDetail:any = res.data.gameDetail
      const champions = gameDetail.map((details:any) => {
        const { systemId, gameId, gidm, gameType } = details
        const playType = details.champion.playType
        const championType = details.champion.championType
        const sw = details.champion.sw
        details.champion.ratioData = details.champion.ratioData.map((ratioInfo:any) => {
          // 整理下单所需参数实体类
          ratioInfo.marketInfo = new MarketInfo({ ...ratioInfo, systemId, gameId, gidm, gameType, playType, sw, championType })
          return ratioInfo
        })
        return details
      })
      championList.value = champions
    }
  } else {
    championList.value = []
  }
}

</script>

<style lang="scss">
.sport-page{
  padding: 0 36px 350px;
}
</style>
