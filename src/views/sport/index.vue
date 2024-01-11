<template>
  <div class="sport-page">
    <!--
      公共 体育项
    -->
    <SportsTabs ref="refSportsTabs" class="pt20" @returnSportsSuccess="returnSportsSuccess" />
    <!--
      公共 联赛
    -->
    <div v-if="firstLeaguesList.length" class="my-scroll__content">
      <div class="betting-sport-nav">
        <TextButton :text="$t('sport.all')" :active="!leagueId" @click="clickLeague({})" />
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

    <template v-if="!leagueId">

      <!-- 推荐 -->
      <van-collapse v-model="activeNamesB" accordion :border="false" class="GlobalCollapse">
        <van-collapse-item name="b1">
          <template #title>
            <ArrowTitle class="mt10 mb10 goodArrowTitle" :src="recommendIcon" :text="$t('sport.recommend')" />
          </template>
          <Loading v-if="!getRecommendEventsIsLoading || isLoadingRecommend" />
          <template v-else>
            <template v-if="recommendList.length">
              <div class="recommend-list">
                <HomeMatchHandicap v-for="(item,idx) in recommendList" :key="idx" :send-params="item" />
              </div>
              <div class="Button-MatchMore mt20 mb20" :class="recommendLoadAll?'no-more':''" @click="moreRecommend">
                <span>
                  {{ recommendLoadAll ? $t('live.noMore') : $t('home.lookMoreMatch') }}
                </span>
              </div>
            </template>
            <HomeEmpty v-else></HomeEmpty>
          </template>
        </van-collapse-item>
      </van-collapse>

      <!-- 早盘 -->
      <van-collapse v-model="activeNamesC" accordion :border="false" class="GlobalCollapse">
        <van-collapse-item name="c1">
          <template #title>
            <ArrowTitle class="mt10 mb10 latestArrowTitle" :src="earlyIcon" :text="$t('sport.early')" />
          </template>
          <Loading v-if="!getRecommendEventsIsLoading || isLoadingEarly" />
          <template v-else>
            <template v-if="earlyList.length">
              <div class="early-list">
                <HomeMatchHandicap v-for="(item,idx) in earlyList" :key="idx" :send-params="item" />
              </div>
              <div class="Button-MatchMore mt20 mb20" :class="earlyLoadAll?'no-more':''" @click="moreEarly">
                <span>
                  {{ earlyLoadAll?$t('live.noMore'):$t('home.lookMoreMatch') }}
                </span>
              </div>
            </template>
            <HomeEmpty v-else></HomeEmpty>
          </template>
        </van-collapse-item>
      </van-collapse>

    </template>
    <template v-else>

      <!-- 联赛 -->
      <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
        <van-collapse-item name="1">
          <template #title>
            <ArrowTitle class="mt10 mb10" :src="leagueLogo" type="6" :text="leagueName" />
          </template>
          <Loading v-if="!getRecommendEventsIsLoading" />
          <template v-else>
            <div v-if="recommendList.length" class="recommend-list">
              <HomeMatchHandicap v-for="(item,idx) in recommendList" :key="idx" :send-params="item" />
            </div>
            <HomeEmpty v-else></HomeEmpty>
          </template>
        </van-collapse-item>
      </van-collapse>

      <!-- 冠军 -->
      <ChampionList :champion-list="championList" :champion-list-loading="championListLoading" />

    </template>

    <FooterHeight />

  </div>
</template>
<script lang="ts" setup>
import earlyIcon from '@/assets/images/home/title-time.png'
import recommendIcon from '@/assets/images/home/title-recommend.png'
import ChampionList from './champion/index.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, onBeforeMount, watch, computed, nextTick } from 'vue'
import router from '@/router'
import { apiChampionpPlayTypes } from '@/api/champion'
import { firstLeagues, recommendEvents } from '@/api/home'
import { MarketInfo } from '@/entitys/MarketInfo'
const refSportsTabs = ref('')
const returnSportsSuccess = (item:any) => {
  router.push({
    name: 'Sport',
    params: {
      type: item
    }
  })
}
const { currentRoute } = useRouter()
const route:any = useRoute()
const activeNames = ref('1')
const activeNamesB = ref('b1')
const activeNamesC = ref('c1')
const leagueId: any = ref(route.query.leagueId)
const gameType = computed(() => {
  return route.params?.type || 'FT'
})
const leagueLogo: any = ref()
const leagueName: any = ref()
const recommendPage: any = ref(1)
const recommendPageSize: any = ref(10)
const earlyPage: any = ref(1)
const earlyPageSize: any = ref(10)
const earlyLoadAll: any = ref(false)
const recommendLoadAll: any = ref(false)
watch(() => currentRoute.value, () => {
  leagueId.value = ''
  recommendPage.value = 1
  earlyPage.value = 1
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
    let listFlag:any = []
    if (res.code === 200 && res.data?.baseData && res.data?.baseData.length) {
      listFlag = res.data.baseData
    }
    // 推荐 - 选择联赛
    if (params.gradeType === 1 || leagueId.value) {
      if (listFlag.length) {
        leagueLogo.value = listFlag[0].leagueLogo
        leagueName.value = listFlag[0].leagueShortName
        recommendList.value = listFlag
      } else {
        leagueLogo.value = ''
        leagueName.value = ''
        recommendList.value = []
      }
    } else if (params.gradeType === 2) {
      if (listFlag.length) {
        earlyList.value = listFlag
      } else {
        earlyList.value = []
      }
    }
  }
}
const championList: any = ref([])
const championListLoading: any = ref(false)
// 获取冠军
const getChampionpPlayTypes = async () => {
  if (leagueId.value) {
    championListLoading.value = true
    const res:any = await apiChampionpPlayTypes({ page: 1, pageSize: 10, leagueIds: leagueId.value }) || {}
    championListLoading.value = false
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
}
onBeforeMount(async () => {
  getFirstLeagues()
  initData()
  nextTick(() => {
    refSportsTabs.value?.setSports(gameType.value)
  })
})
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
      margin-bottom: 5px;
      width: 100%;
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
