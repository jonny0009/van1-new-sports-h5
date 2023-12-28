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
    <!-- 联赛 -->
    <template v-if="recommendList.length && leagueId">
      <ArrowTitle class="mt10 mb10" :src="leagueLogo" :text="leagueName" @returnSuccess="recommendCloseClick" />
      <template v-if="isOpenRecommend">
        <Loading v-if="!getRecommendEventsIsLoading" />
        <template v-else>
          <div v-if="recommendList.length" class="recommend-list">
            <HomeMatchHandicap v-for="(item,idx) in recommendList" v-show="isOpenRecommend" :key="idx" :send-params="item" />
          </div>
          <HomeEmpty v-else></HomeEmpty>
        </template>
      </template>
    </template>
    <!-- 推荐 -->
    <template v-if="!leagueId">
      <ArrowTitle class="mt10 mb10" :src="recommendIcon" :text="$t('sport.recommend')" @returnSuccess="recommendCloseClick" />
      <template v-if="isOpenRecommend">
        <Loading v-if="!getRecommendEventsIsLoading" />
        <template v-else>
          <div v-if="recommendList.length" class="recommend-list">
            <HomeMatchHandicap v-for="(item,idx) in recommendList" v-show="isOpenRecommend" :key="idx" :send-params="item" />
          </div>
          <HomeEmpty v-else></HomeEmpty>
        </template>
        <div v-if="!isLoadingRecommend && recommendList.length" class="Button-MatchMore mt20" :class="recommendLoadAll?'no-more':''" @click="moreRecommend">
          <span>
            {{ recommendLoadAll?$t('live.noMore'):$t('home.lookMoreMatch') }}
          </span>
        </div>
        <Loading v-if="isLoadingRecommend" />
      </template>
    </template>
    <!-- 早盘 -->
    <template v-if="!leagueId">
      <ArrowTitle class="mt10 mb10" :src="earlyIcon" :text="$t('sport.early')" @returnSuccess="earlyCloseClick" />
      <template v-if="isOpenEarly">
        <Loading v-if="!getRecommendEventsIsLoading" />
        <template v-else>
          <div v-if="earlyList.length" class="early-list">
            <HomeMatchHandicap v-for="(item,idx) in earlyList" v-show="isOpenEarly" :key="idx" :send-params="item" />
          </div>
          <HomeEmpty v-else></HomeEmpty>
        </template>
        <div v-if="!isLoadingEarly && earlyList.length" class="Button-MatchMore mt20" :class="earlyLoadAll?'no-more':''" @click="moreEarly">
          <span>
            {{ earlyLoadAll?$t('live.noMore'):$t('home.lookMoreMatch') }}
          </span>
        </div>
        <Loading v-if="isLoadingEarly" />
      </template>

    </template>
    <!-- 冠军 -->
    <ChampionList v-if="championList.length && leagueId" :champion-list="championList" />

    <!-- <div class="Button-MatchMore mt20">
      <span>
        {{ $t('home.lookMoreMatch') }}
      </span>
    </div> -->

    <div class="footerHeight"></div>
  </div></template>

<script lang="ts" setup>

import earlyIcon from '@/assets/images/home/title-time.png'

import recommendIcon from '@/assets/images/home/title-recommend.png'
import ChampionList from './champion/index.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import { useRoute, useRouter } from 'vue-router'
import router from '@/router'
import { ref, onBeforeMount, computed, watch } from 'vue'
import { apiChampionpPlayTypes } from '@/api/champion'
import { firstLeagues, recommendEvents } from '@/api/home'

import { MarketInfo } from '@/entitys/MarketInfo'
const { currentRoute } = useRouter()
const route = useRoute()

const leagueId: any = ref(route.query.leagueId)
const gameType: any = ref(route.params.type)
const leagueLogo: any = ref()
const leagueName: any = ref()
const isOpenRecommend: any = ref(true)
const recommendPage: any = ref(1)
const recommendPageSize: any = ref(10)
const earlyPage: any = ref(1)
const earlyPageSize: any = ref(10)
const earlyLoadAll: any = ref(false)
const recommendLoadAll: any = ref(false)
const recommendCloseClick = (val:any) => {
  isOpenRecommend.value = !val
}

const isOpenEarly: any = ref(true)
const earlyCloseClick = (val:any) => {
  isOpenEarly.value = !val
}

onBeforeMount(async () => {
  getFirstLeagues()
  initData()
})

watch(
  () => currentRoute.value,
  (route: any) => {
    gameType.value = route.params.type
    leagueId.value = ''
    recommendPage.value = 1
    earlyPage.value = 1
    console.log(gameType.value)
    getFirstLeagues()
    initData()
  }
)

const initData = async () => {
  if (leagueId.value) {
    // 按联赛查询
    const leagueParames:any = ref({ gameType: gameType.value, leagueId: leagueId.value, page: 1, pageSize: 20 })
    getRecommendEvents(leagueParames.value)
    getChampionpPlayTypes()
  } else {
    // 推荐
    const recommendParames:any = ref({ gameType: gameType.value, gradeType: 1,
      page: recommendPage.value, pageSize: recommendPageSize.value })
    getRecommendEvents(recommendParames.value)
    // 早盘
    const earlyParames:any = ref({ gameType: gameType.value, gradeType: 2,
      page: earlyPage.value, pageSize: earlyPageSize.value })
    getRecommendEvents(earlyParames.value)
  }
}

const firstLeaguesList: any = ref([])
// 获取一级联赛
const getFirstLeagues = async () => {
  if (gameType.value) {
    const res:any = await firstLeagues({ gameType: gameType.value }) || {}
    if (res.code === 200 && res.data) {
      firstLeaguesList.value = res.data
    } else {
      firstLeaguesList.value = []
    }
  }
}

// 早盘更多
const isLoadingEarly: any = ref(false)
const moreEarly = async () => {
  if (earlyLoadAll.value) {
    return
  }
  earlyPage.value = earlyPage.value + 1
  const earlyParames:any = ref({ gameType: gameType.value, gradeType: 2,
    page: earlyPage.value, pageSize: earlyPageSize.value })
  isLoadingEarly.value = true
  const res:any = await recommendEvents(earlyParames.value) || {}
  if (res.code === 200 && res.data?.baseData && res.data?.baseData.length) {
    earlyList.value.push(...res.data.baseData)
    console.log(earlyList.value.length)
  }
  if (earlyList.value.length < earlyPage.value * earlyPageSize.value) {
    earlyLoadAll.value = true
  } else {
    earlyLoadAll.value = false
  }
  isLoadingEarly.value = false
}

// 推荐更多
const isLoadingRecommend: any = ref(false)
const moreRecommend = async () => {
  if (recommendLoadAll.value) {
    return
  }
  recommendPage.value = recommendPage.value + 1
  const recommendParames:any = ref({ gameType: gameType.value, gradeType: 1,
    page: recommendPage.value, pageSize: recommendPageSize.value })
  isLoadingRecommend.value = true
  const res:any = await recommendEvents(recommendParames.value) || {}
  if (res.code === 200 && res.data?.baseData && res.data?.baseData.length) {
    recommendList.value.push(...res.data.baseData)
  }
  if (recommendList.value.length < recommendPage.value * recommendPageSize.value) {
    recommendLoadAll.value = true
  } else {
    recommendLoadAll.value = false
  }
  isLoadingRecommend.value = false
}

const recommendList: any = ref([])
const earlyList: any = ref([])
const getRecommendEventsIsLoading = ref(false)
// 获取推荐，早盘赛事
const getRecommendEvents = async (params:any) => {
  if (gameType.value) {
    getRecommendEventsIsLoading.value = false
    const res:any = await recommendEvents(params) || {}
    getRecommendEventsIsLoading.value = true
    if (res.code === 200 && res.data?.baseData && res.data?.baseData.length) {
      recommendList.value = res.data.baseData || []
      if (res.data.baseData.length) {
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
      const gameDetail:any = res?.data?.gameDetail || []
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
  leagueId.value = item.leagueId
  initData()
  // if (item.leagueId) {
  //   router.push({
  //     name: 'Sport',
  //     query: {
  //       leagueId: item.leagueId
  //     },
  //     params: {
  //       type: item.gameType
  //     }
  //   })
  // } else {
  //   router.push({
  //     name: 'Sport',
  //     params: {
  //       type: item.gameType
  //     }
  //   })
  // }
}

</script>

<style lang="scss" scoped>
.sport-page{
  padding: 0 36px;
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
      max-height: 140px;
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
