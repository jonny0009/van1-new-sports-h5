<template>
  <div class="sport-page">
    <div class="my-scroll__content">
      <div class="betting-sport-nav">
        <TextButton text="推荐" :active="true" />
        <ImageButton v-for="(item, idx) in [1,2,3,4,5]" :key="idx" text="和恢复顶顶顶帆帆" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" :active="true" />
      </div>
    </div>
    <MatchLive />
    <ChampionList v-if="championList.length" :champion-list="championList" />
  </div></template>

<script lang="ts" setup>
import MatchLive from '@/components/HomeMatch/MatchLive/index.vue'
import ChampionList from './champion/index.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import ImageButton from '@/components/Button/ImageButton/index.vue'
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
  .my-scroll__content{
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      height: 0;
      display: none;
    }
    .betting-sport-nav{
      margin-top: 26px;
      margin-left: 21px;
      margin-bottom: 5px;
      width: 1000px;
      white-space: normal;
      position: relative;
      .ImageButton{
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }

  }
}
</style>
