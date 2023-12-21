<template>
  <div class="sport-page">
    <div class="my-scroll__content">
      <div class="betting-sport-nav">
        <TextButton :text="$t('sport.recommend')" :active="!leagueId" @click="clickLeague({})" />
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
    <div v-if="recommendList.length" class="recommend-list">
      <ArrowTitle v-if="leagueId" class="mt10 mb10" :src="leagueLogo" :text="leagueName" @returnSuccess="recommendCloseClick" />
      <ArrowTitle v-else class="mt10 mb10" :src="recommendIcon" :text="$t('sport.recommend')" @returnSuccess="recommendCloseClick" />
      <HomeMatchHandicap v-for="(item,idx) in recommendList" v-show="isOpenRecommend" :key="idx" :send-params="item" />
    </div>

    <div v-if="earlyList.length" class="early-list">
      <ArrowTitle class="mt10 mb10" :src="earlyIcon" :text="$t('sport.early')" @returnSuccess="earlyCloseClick" />
      <HomeMatchHandicap v-for="(item,idx) in earlyList" v-show="isOpenEarly" :key="idx" :send-params="item" />
    </div>
    <ChampionList v-if="championList.length" :champion-list="championList" />
    <!-- <div class="Button-MatchMore mt20">
      <span>
        查看更多比赛
      </span>
    </div> -->

    <div class="footerHeight"></div>
  </div></template>

<script lang="ts" setup>

import earlyIcon from '@/assets/images/home/title-time.png'

import recommendIcon from '@/assets/images/home/title-recommend.png'
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
// const chooseLeagueId: any = ref()
const leagueId: any = ref(route.query.leagueId)
const gameType: any = ref(route.query.type)

const leagueLogo: any = ref()
const leagueName: any = ref()

const isOpenRecommend: any = ref(true)
const recommendCloseClick = (val:any) => {
  console.log(val)
  isOpenRecommend.value = !val
}

const isOpenEarly: any = ref(true)
const earlyCloseClick = (val:any) => {
  console.log(val)
  isOpenEarly.value = !val
}

onBeforeMount(async () => {
  getFirstLeagues()

  if (leagueId.value) {
    // 按联赛查询
    const leagueParames:any = ref({ gameType: gameType.value, leagueId: leagueId.value, page: 1, pageSize: 20 })
    getRecommendEvents(leagueParames.value)
  } else {
    // 推荐
    const recommendParames:any = ref({ gameType: gameType.value, gradeType: 1, page: 1, pageSize: 20 })
    getRecommendEvents(recommendParames.value)
    // 早盘
    const earlyParames:any = ref({ gameType: gameType.value, gradeType: 2, page: 1, pageSize: 20 })
    getRecommendEvents(earlyParames.value)
  }

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
const getRecommendEvents = async (params:any) => {
  if (gameType.value) {
    const res:any = await recommendEvents(params) || {}
    if (res.code === 200 && res.data) {
      recommendList.value = res.data.baseData || []
      if (res.data.baseData || res.data.baseData.length) {
        leagueLogo.value = res.data.baseData[0].leagueLogo
        leagueName.value = res.data.baseData[0].leagueShortName
      }
      if (!leagueId.value) {
        earlyList.value = res.data.baseData || []
      } else {
        earlyList.value = []
      }
    } else {
      recommendList.value = []
      earlyList.value = []
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
        }).sort((a:any, b:any) => a.ior - b.ior)
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

<style lang="scss" scoped>
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
