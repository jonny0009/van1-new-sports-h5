<template>
  <div class="sport-page">
    <div class="my-scroll__content">
      <div class="betting-sport-nav">
        <TextButton text="推荐" :active="!leagueId" @click="clickLeague({})" />
        <ImageButton
          v-for="(item,idx) in firstLeaguesList"
          :key="idx"
          :text="item.leagueNameAbbr"
          :src="item.icon"
          :active="leagueId===item.leagueId"
          @click="clickLeague(item)"
        />
      </div>
    </div>
    <HomeMatchHandicap />
    <ChampionList v-if="championList.length" :champion-list="championList" />

    <div class="Button-MatchMore mt20">
      <span>
        查看更多比赛
      </span>
    </div>

    <div class="footerHeight"></div>
  </div></template>

<script lang="ts" setup>
import HomeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
import ChampionList from './champion/index.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import ImageButton from '@/components/Button/ImageButton/index.vue'
import { useRoute } from 'vue-router'
// import router from '@/router'
import { ref, onBeforeMount } from 'vue'
import { apiChampionpPlayTypes } from '@/api/champion'
import { firstLeagues, recommendEvents } from '@/api/home'

import { MarketInfo } from '@/entitys/MarketInfo'
const route = useRoute()
const chooseLeagueId: any = ref()
const leagueId: any = ref(route.query.leagueId)
const gameType: any = ref(route.query.type)
onBeforeMount(async () => {
  getFirstLeagues()
  getRecommendEvents()
  getChampionpPlayTypes()
})

const firstLeaguesList: any = ref([])
// 获取一级联赛
const getFirstLeagues = async () => {
  if (gameType.value) {
    const res:any = await firstLeagues({ gameType: gameType.value }) || {}
    if (res.code === 200 && res.data) {
      firstLeaguesList.value = res.data
    }
  }
}

const recommendList: any = ref([])
const earlyList: any = ref([])
// 获取推荐，早盘赛事
const getRecommendEvents = async () => {
  if (gameType.value) {
    const res:any = await recommendEvents({ gameType: gameType.value }) || {}
    if (res.code === 200 && res.data) {
      firstLeaguesList.value = res.data
    }
  }
}

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

const clickLeague = (item: any) => {
  // chooseLeagueId.value = item.leagueId
  if (item.leagueId) {
    window.location.href = '/sport?leagueId=' + item.leagueId + '&type=' + item.gameType
  } else {
    window.location.href = '/sport?type=' + gameType.value
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
      // margin-left: 21px;
      margin-bottom: 5px;
      width: 1600px;
      white-space: normal;
      position: relative;
      .textButton,
      .ImageButton{
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }

  }
}
</style>
