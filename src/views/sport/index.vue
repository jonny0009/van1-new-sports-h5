<template>
  <div class="sport-page">
    <!--
      公共 体育项
    -->
    <SportsTabs ref="refSportsTabs" class="tabs-top" @returnSportsSuccess="returnSportsSuccess" />
    <!--
      公共 联赛
    -->
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
      <!-- 新tab -->
      <div class="my-scroll__content">
        <div class="tabs-cut tabs-cut-2">
          <div class="league-num tabs-cut-1" :class="ifLeagueNum ? 'league-num-1' : ''" @click="clickLeagueNum">
            <span> {{ $t(`user.whole`) }}</span>
            <span class="league-match-num">{{ LeaguesInfo.total || 0 }}</span>
            <SvgIcon name="user-down" class="icon-svg-1" />
          </div>
          <TextButton class="tabs-cut-1" :text="$t('sport.recommend')" :active="!leagueId" @click="handleRecommend()" />
          <ImageButton
            v-for="(item, index) in firstLeaguesList.slice(0, firstLeaguesList.length > 1 ? Math.floor(firstLeaguesList.length / 2) : 1)"
            :key="index" class="tabs-cut-1" :text="item.leagueName" :src="item.leagueLogo"
            :active="leagueId === item.leagueId" type="6" :count="item.gameTypeCount || '0'"
            :ifCount="Number(item.gameTypeCount) || 0" :if-circle="true" @click="handleChangeLeagueId(item)" />
        </div>
        <div class="tabs-cut tabs-cut-3" v-if="firstLeaguesList.length > 1">
          <ImageButton v-for="(item, index) in firstLeaguesList.slice(Math.floor(firstLeaguesList.length / 2))"
            :key="index" class="tabs-cut-1" :text="item.leagueName" :src="item.leagueLogo"
            :active="leagueId === item.leagueId" type="6" :count="item.gameTypeCount || '0'"
            :ifCount="Number(item.gameTypeCount) || 0" :if-circle="true" @click="handleChangeLeagueId(item)" />
        </div>
      </div>
      <!-- <Loading v-if="!firstLeaguesList.length" /> -->
      <!-- 地区联赛折叠 -->
      <van-collapse v-if="ifLeagueNum" v-model="activeCollapseNames" accordion :border="false" @change="collapseChange">
        <van-collapse-item v-for="(value, key) in groupedArrays" :key="key" :name="value.countryId" :border="false">
          <template #title>
            <div class="collapseAll">
              <img v-img="value.countryFlag" type="1" class="collapse-name" />
              <span class="collapse-title">{{ value.countryCn || 'International' }}</span>
              <span class="collapse-num">{{ value.leagueCount }}</span>
            </div>
          </template>
          <div v-for="(item, index) in LeagueByCountryInfoArr" :key="index" class="collapse-concent">
            <div :class="item.gameTypeCount ? '' : 'collapse-concent-1'" @click="clickLeague(item)">
              {{ item.leagueName }}
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
      <!-- end==== -->
      <!-- 联赛轮播图 -->
      <Slideshow v-if="commonMatchesList.length && closeSlideshow" ref="slideshow"
        :common-matches-list="commonMatchesList">
      </Slideshow>
      <template v-if="!leagueId">
        <!-- 推荐 -->
        <van-collapse v-model="activeNamesB" accordion :border="false" class="GlobalCollapse">
          <van-collapse-item name="b1">
            <template #title>
              <ArrowTitle v-if="recommendList.length || (!getRecommendEventsIsLoading || isLoadingRecommend)"
                ref="leagueArrowTitle" class="mt10 mb10 goodArrowTitle" :src="recommendIcon"
                :text="$t('sport.recommend')" />
            </template>
            <Loading v-if="!getRecommendEventsIsLoading || isLoadingRecommend" />
            <template v-else>
              <template v-if="recommendList.length">
                <div class="recommend-list">
                  <div ref="newContainerRecommend">
                    <template v-for="(item, idx) in recommendList" :key="idx">
                      <van-sticky :offset-top="offsetTop" :container="newContainerRecommend" z-index="8"
                        :class="{ 'mt10': idx !== 0 }">
                        <playTitle :send-params="item" />
                      </van-sticky>
                      <HomeMatchHandicap v-for="(item1, idx) in item.list" :play-title-toggle="false" :send-params="item1"
                        :class="{ 'mt10': idx !== 0 }" />
                    </template>
                  </div>
                </div>
                <div class="Button-MatchMore mt20 mb20" :class="recommendLoadAll ? 'no-more' : ''" @click="moreRecommend">
                  <span>
                    {{ recommendLoadAll ? $t('live.noMore') : $t('home.lookMoreMatch') }}
                  </span>
                </div>
              </template>
              <!-- <HomeEmpty v-else></HomeEmpty> -->
            </template>
          </van-collapse-item>
        </van-collapse>

        <!-- 早盘 -->
        <van-collapse v-model="activeNamesC" accordion :border="false" class="GlobalCollapse">
          <van-collapse-item name="c1">
            <template #title>
              <ArrowTitle ref="leagueArrowTitle" class="mt10 mb10 latestArrowTitle" :src="earlyIcon"
                :text="$t('sport.early')" />
            </template>
            <Loading v-if="!getRecommendEventsIsLoading || isLoadingEarly" />
            <template v-else>
              <template v-if="earlyList.length">
                <div class="early-list">
                  <!-- <HomeMatchHandicap v-for="(item, idx) in earlyList" :key="idx" :send-params="item" /> -->
                  <div ref="newContainer">
                    <template v-for="(item, idx) in earlyList" :key="idx">
                      <van-sticky :offset-top="offsetTop" :container="newContainer" z-index="8"
                        :class="{ 'mt10': idx !== 0 }">
                        <playTitle :send-params="item" />
                      </van-sticky>
                      <HomeMatchHandicap v-for="(item1, idx) in item.list" :play-title-toggle="false" :send-params="item1"
                        :class="{ 'mt10': idx !== 0 }" />
                    </template>
                  </div>
                </div>
                <div class="Button-MatchMore mt20 mb20" :class="earlyLoadAll ? 'no-more' : ''" @click="moreEarly">
                  <span>
                    {{ earlyLoadAll ? $t('live.noMore') : $t('home.lookMoreMatch') }}
                  </span>
                </div>
              </template>
              <HomeEmpty v-else></HomeEmpty>
            </template>
          </van-collapse-item>
        </van-collapse>

      </template>
      <template v-if="leagueId">

        <!-- 联赛 -->
        <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
          <van-collapse-item name="1">
            <template #title>
              <ArrowTitle ref="leagueArrowTitle" class="mt10 mb10" :src="leagueLogo" type="6" :text="leagueName" />
            </template>
            <Loading v-if="!getRecommendEventsIsLoading" />
            <template v-else>
              <div v-if="recommendList.length" class="recommend-list">
                <!-- <HomeMatchHandicap v-for="(item, idx) in recommendList" :key="idx" :send-params="item" /> -->
                <div ref="newContainerRecommend">
                  <template v-for="(item, idx) in recommendList" :key="idx">
                    <van-sticky :offset-top="offsetTop" :container="newContainerRecommend" z-index="8"
                      :class="{ 'mt10': idx !== 0 }">
                      <playTitle :send-params="item" />
                    </van-sticky>
                    <HomeMatchHandicap v-for="(item1, idx) in item.list" :play-title-toggle="false" :send-params="item1"
                      :class="{ 'mt10': idx !== 0 }" />
                  </template>
                </div>
              </div>
              <HomeEmpty v-else></HomeEmpty>
            </template>
          </van-collapse-item>
        </van-collapse>

        <!-- 冠军 -->
        <ChampionList ref="championGuessing" :champion-list="championList" :champion-list-loading="championListLoading" />

      </template>
    </van-pull-refresh>

    <FooterHeight />

  </div>
</template>
<script lang="ts" setup>
import earlyIcon from '@/assets/images/home/title-time.png'
import recommendIcon from '@/assets/images/home/title-recommend.png'
import ChampionList from './champion/index.vue'
import Slideshow from './slideshow/index.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import playTitle from '@/components/Title/playTitle/index.vue'
// useRouter
import { useRoute, } from 'vue-router'
// onBeforeMount, watch,
import { ref, computed, nextTick, onMounted, onActivated, watch } from 'vue'
// import router from '@/router'
import { apiChampionpPlayTypes } from '@/api/champion'
import { recommendLeague, commonMatches, homeCommonMatches, searchCountryInfo, searchLeagueByCountryInfo } from '@/api/home'
import { MarketInfo } from '@/entitys/MarketInfo'
import moment from 'moment'

// const { currentRoute } = useRouter()
const route: any = useRoute()
const gameType1 = computed(() => {
  return route.params?.type || 'FT'
})
const gameType = ref<any>(gameType1.value)
const refSportsTabs = ref()
const returnSportsSuccess = (item: any) => {
  // router.push({
  //   name: 'Sport',
  //   params: {
  //     type: item
  //   }
  // })
  // 新增
  activeNamesB.value = 'b1'
  activeNamesC.value = 'c1'
  leagueArrowTitle?.value?.changeClick(false)
  ifLeagueNum.value = false
  closeSlideshow.value = true
  activeCollapseNames.value = ''
  commonMatchesList.value = []
  // end=====
  gameType.value = item
  store.dispatch('user/getLocationHeight', false)
  getRecommendEventsIsLoading.value = false
  initList()
}
const activeNames = ref('1')
const activeNamesB = ref('b1')
const activeNamesC = ref('c1')
const activeCollapseNames = ref('')

const championGuessing = ref<any>()
const leagueArrowTitle = ref<any>()

const leagueId: any = ref(route.query.leagueId)
const leagueLogo: any = ref()
const leagueName: any = ref()
const recommendPage: any = ref(1)
const recommendPageSize: any = ref(10)
const earlyPage: any = ref(1)
const earlyPageSize: any = ref(10)
const earlyLoadAll: any = ref(false)
const recommendLoadAll: any = ref(false)
const isRefreshLoading = ref(false)
const newContainer = ref(null)
const newContainerRecommend = ref(null)

import store from '@/store'

const locationHeight = computed(() => store.state.user.locationHeight)
const ifSearchDo = computed(() => store.state.user.ifSearchDo)
const offsetTop = computed(() => {
  const offsetTop = store.state.app.globalBarHeaderHeight || 48
  var offsetTopval = 48
  if (offsetTop > 60) {
    offsetTopval = 48
  } else {
    offsetTopval = offsetTop
  }
  return offsetTopval
})

onMounted(() => {
  // 初始化
  // initList()
})
// 监听搜索操作
watch(
  () => ifSearchDo.value,
  (newValue: any) => {
    if (newValue) {
      gameType.value = route.params?.type || 'FT'
      groupedArrays.value = []
      firstLeaguesList.value = []
      championListLoading.value = true
      ifLeagueNum.value = false
      closeSlideshow.value = false
      getCommonMatches()
      const countryId = route.query?.countryId || ''
      leagueId.value = newValue 
      if (countryId) {
        getLeagueByCountryInfo(countryId, 2)
      } else {
        getFirstLeagues()
      }
      getSearchCountryInfo()
      nextTick(() => {
        refSportsTabs.value?.setSports(gameType.value)
      })
    }
  }
)
// 手风琴展开
const LeagueByCountryInfoArr: any = ref([])

const collapseChange = (countryId: any) => {
  LeagueByCountryInfoArr.value = []
  if (countryId) {
    getLeagueByCountryInfo(countryId, 1)
  }
}

// 获取国家联赛信息
const getLeagueByCountryInfo = async (countryId: any, num: any) => {
  const leagueByCountryParams: any = ref({
    countryId,
    groupId: 3,
    showType: 'FAST',
    gameType: gameType.value,
  })
  const res: any = await searchLeagueByCountryInfo(leagueByCountryParams.value) || {}
  if (res.code === 200 && res.data) {
    LeagueByCountryInfoArr.value = res.data || []
    if (num === 2) {
      const leagueIdObj = res.data.find((e: any) => {
        return e.leagueId === leagueId.value
      })
      firstLeaguesList.value = res.data.filter((item: any) => {
        return item.leagueId !== leagueId.value
      })
      firstLeaguesList.value.unshift(leagueIdObj)
      initData()
    }

  } else {
    LeagueByCountryInfoArr.value = []
  }
}

const onRefresh = () => {
  closeSlideshow.value = false
  isRefreshLoading.value = false
  // ifLeagueNum.value = false
  initList()
}
// 初始化方法
const initList = () => {
  leagueId.value = ''
  recommendPage.value = 1
  earlyPage.value = 1
  getFirstLeagues()
  getCommonMatches()
  getSearchCountryInfo()
}
// 获取国家信息
const groupedArrays: any = ref([])
const LeaguesInfo: any = ref({})
const getSearchCountryInfo = async () => {
  activeCollapseNames.value = ''
  const CountryInfoParams: any = ref({
    gameType: gameType.value,
    showtype: 'FAST',
    page: 1,
    row: 999
  })
  const res: any = await searchCountryInfo(CountryInfoParams.value) || {}
  if (res.code === 200 && res.data) {
    LeaguesInfo.value = res.data
    groupedArrays.value = res.data?.countryData || []
  } else {
    groupedArrays.value = []
  }
}

// 获取联赛轮播
const commonMatchesList: any = ref([])
const getCommonMatches = async () => {
  const commonMatchesParams: any = ref({
    gradeType: 1,
    gameTypeSon: '',
    showtype: 'FAST',
    // timeStage: 0,
    gameSort: 3,
    // dateStage: 0,
    // isNovice: 'Y',
    // onlyFavorite: 0,
    gameType: gameType.value, page: 1, pageSize: 5
  })
  const res: any = await homeCommonMatches(commonMatchesParams.value) || {}
  if (res.code === 200 && res.data) {
    commonMatchesList.value = res.data.games || []
  } else {
    commonMatchesList.value = []
  }
}

const initData = async () => {
  if (leagueId.value) {
    // 按联赛查询
    ifLeagueNum.value = false
    const leagueParames: any = ref({
      gradeType: 1,
      gameTypeSon: '',
      showtype: 'FAST',
      timeStage: 0,
      gameSort: 3,
      dateStage: 0,
      isNovice: 'Y',
      onlyFavorite: 0,
      gameType: gameType.value, leagueIds: leagueId.value, page: 1, pageSize: 20
    })
    getRecommendEvents(leagueParames.value)
    getChampionpPlayTypes()
  } else {
    // 推荐
    const recommendParames: any = ref({
      gradeType: 1,
      gameTypeSon: '',
      gameType: gameType.value,
      showtype: 'FAST',
      timeStage: 0,
      gameSort: 3,
      dateStage: 0,
      isNovice: 'Y',
      leagueIds: leagueIdArr.value.join() || -1,
      // leagueIds: '',
      onlyFavorite: 0,
      page: 1,
      pageSize: 10
    })
    getRecommendEvents(recommendParames.value)
    // 早盘
    const earlyParames: any = ref({
      gradeType: 2,
      gameTypeSon: '',
      gameType: gameType.value,
      showtype: 'FAST',
      timeStage: 0,
      gameSort: 3,
      dateStage: 0,
      isNovice: 'Y',
      filterLeagueIds: leagueIdArr.value.join(),
      leagueIds: '',
      onlyFavorite: 0,
      page: 1,
      pageSize: 10
    })
    getRecommendEvents(earlyParames.value)
  }
}
const firstLeaguesList: any = ref([])
// 联赛Ids
const leagueIdArr: any = ref([])
// 获取一级联赛 / 更换fuByGameType 接口
const getFirstLeagues = async () => {
  // firstLeaguesList.value = []
  if (gameType.value) {
    // showType：FT-今日 FU-早盘 RB-滚球 
    const res: any = await recommendLeague({ gameType: gameType.value, showType: 'FAST' }) || {}
    if (res.code === 200 && res.data) {
      firstLeaguesList.value = res.data.list || []
      // 联赛ID
      const leagueIdObj = firstLeaguesList.value.find((item: any) => {
        return item.leagueId === leagueId.value
      })
      if (!leagueIdObj) {
        leagueId.value = ''
        closeSlideshow.value = true
      }
      leagueIdArr.value = []
      firstLeaguesList.value.map((n: any) => {
        if (n.leagueId) {
          leagueIdArr.value.push(n.leagueId)
        }
      })
      initData()
    } else {
      firstLeaguesList.value = []
    }

  }
}
// 早盘更多
const isLoadingEarly: any = ref(false)
const earlyListArr: any = ref([])
const moreEarly = async () => {
  if (earlyLoadAll.value) {
    return
  }
  earlyPage.value = earlyPage.value + 1
  const earlyParames: any = ref({
    gameTypeSon: '',
    showtype: 'FAST',
    timeStage: 0,
    gameSort: 3,
    dateStage: 0,
    isNovice: 'Y',
    filterLeagueIds: leagueIdArr.value.join(),
    leagueIds: '',
    onlyFavorite: 0,
    gameType: gameType.value, gradeType: 2,
    page: earlyPage.value, pageSize: earlyPageSize.value
  })
  isLoadingEarly.value = true
  const res: any = await commonMatches(earlyParames.value) || {}
  if (res.code === 200 && res.data?.matchList?.baseData && res.data?.matchList?.baseData.length) {
    // earlyList.value.push(...res.data.matchList.baseData)
    earlyListArr.value.push(...res.data.matchList.baseData)
    const listObj: any = {}
    const listArr: any = []
    const sortArr = earlyListArr.value.sort((a: any, b: any) => {
      return a.gameDate - b.gameDate
    })
    sortArr.map((item: any) => {
      const date = moment(item.gameDate).format('YYYY/MM/DD')
      if (listObj[date]) {
        listObj[date].list.push(item)
      } else {
        listObj[date] = {
          gameDate: item.gameDate,
          list: [item]
        }
      }
    })
    Object.keys(listObj).map(item => {
      listArr.push(JSON.parse(JSON.stringify(listObj[item])))
    })

    earlyList.value = listArr
  }
  if (earlyListArr.value.length < earlyPage.value * earlyPageSize.value) {
    earlyLoadAll.value = true
  } else {
    earlyLoadAll.value = false
  }
  isLoadingEarly.value = false
}
// 推荐更多
const recommendListArr: any = ref([])
const isLoadingRecommend: any = ref(false)
const moreRecommend = async () => {
  if (recommendLoadAll.value) {
    return
  }
  recommendPage.value = recommendPage.value + 1
  const recommendParames: any = ref({
    gameTypeSon: '',
    showtype: 'FAST',
    timeStage: 0,
    gameSort: 3,
    dateStage: 0,
    isNovice: 'Y',
    leagueIds: leagueIdArr.value.join() || -1,
    // leagueIds: '',
    onlyFavorite: 0,
    gameType: gameType.value, gradeType: 1,
    page: recommendPage.value, pageSize: recommendPageSize.value
  })
  isLoadingRecommend.value = true
  const res: any = await commonMatches(recommendParames.value) || {}
  if (res.code === 200 && res.data?.matchList?.baseData && res.data?.matchList?.baseData.length) {
    recommendListArr.value.push(...res.data.matchList.baseData)
    const listObj: any = {}
    const listArr: any = []
    const sortArr = recommendListArr.value.sort((a: any, b: any) => {
      return a.gameDate - b.gameDate
    })
    sortArr.map((item: any) => {
      const date = moment(item.gameDate).format('YYYY/MM/DD')
      if (listObj[date]) {
        listObj[date].list.push(item)
      } else {
        listObj[date] = {
          gameDate: item.gameDate,
          list: [item]
        }
      }
    })
    Object.keys(listObj).map(item => {
      listArr.push(JSON.parse(JSON.stringify(listObj[item])))
    })

    recommendList.value = listArr



  }
  if (recommendListArr.value.length < recommendPage.value * recommendPageSize.value) {
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
const getRecommendEvents = async (params: any) => {
  if (gameType.value) {
    getRecommendEventsIsLoading.value = false
    const res: any = await commonMatches(params) || {}
    getRecommendEventsIsLoading.value = true
    let listFlag: any = []
    if (res.code === 200 && res.data?.matchList?.baseData && res.data?.matchList?.baseData.length) {
      listFlag = res.data.matchList.baseData
    }
    // 推荐 - 选择联赛
    if (params.gradeType === 1 || leagueId.value) {
      if (listFlag.length) {
        leagueLogo.value = listFlag[0].leagueLogo
        leagueName.value = listFlag[0].leagueShortName
        recommendListArr.value = listFlag
        const listObj: any = {}
        const listArr: any = []
        const sortArr = recommendListArr.value.sort((a: any, b: any) => {
          return a.gameDate - b.gameDate
        })
        sortArr.map((item: any) => {
          const date = moment(item.gameDate).format('YYYY/MM/DD')
          if (listObj[date]) {
            listObj[date].list.push(item)
          } else {
            listObj[date] = {
              date: date,
              gameDate: item.gameDate,
              list: [item]
            }
          }
        })
        Object.keys(listObj).map(item => {
          listArr.push(JSON.parse(JSON.stringify(listObj[item])))
        })
        recommendList.value = listArr
      } else {
        leagueLogo.value = ''
        leagueName.value = ''
        recommendList.value = []
      }
    } else if (params.gradeType === 2) {
      if (listFlag.length) {
        earlyListArr.value = listFlag
        const listObj: any = {}
        const listArr: any = []
        const sortArr = earlyListArr.value.sort((a: any, b: any) => {
          return a.gameDate - b.gameDate
        })
        sortArr.map((item: any) => {
          const date = moment(item.gameDate).format('YYYY/MM/DD')
          if (listObj[date]) {
            listObj[date].list.push(item)
          } else {
            listObj[date] = {
              date: date,
              gameDate: item.gameDate,
              list: [item]
            }
          }
        })
        Object.keys(listObj).map(item => {
          listArr.push(JSON.parse(JSON.stringify(listObj[item])))
        })
        earlyList.value = listArr
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
    const res: any = await apiChampionpPlayTypes({ page: 1, pageSize: 10, leagueIds: leagueId.value }) || {}
    championListLoading.value = false
    if (res.code === 200 && res.data) {
      const gameDetail: any = res?.data?.gameDetail || []
      const champions = gameDetail.map((details: any) => {
        const { systemId, gameId, gidm, gameType } = details
        const playType = details.champion.playType
        const championType = details.champion.championType
        const sw = details.champion.sw
        details.champion.ratioData = details.champion.ratioData.map((ratioInfo: any) => {
          // 整理下单所需参数实体类
          ratioInfo.marketInfo = new MarketInfo({ ...ratioInfo, systemId, gameId, gidm, gameType, playType, sw, championType })
          return ratioInfo
        }).sort((a: any, b: any) => a.ior - b.ior)
        return details
      })
      championList.value = champions
    }
  } else {
    championList.value = []
  }
}
const clickLeague = (item: any) => {
  if (!item.gameTypeCount) return
  activeCollapseNames.value = ''
  firstLeaguesList.value = []
  leagueArrowTitle?.value?.changeClick(false)
  championGuessing?.value?.CloseClick(false)
  //  判断推荐联赛里面是否有地区联赛
  const leagueIdObj = LeagueByCountryInfoArr.value.find((e: any) => {
    return e.leagueId === item.leagueId
  })
  leagueId.value = item.leagueId
  firstLeaguesList.value = LeagueByCountryInfoArr.value.filter((i: any) => {
    return i.leagueId !== item.leagueId
  })
  firstLeaguesList.value.unshift(leagueIdObj)

  initData()
}

const closeSlideshow: any = ref(true)
const ifLeagueNum: any = ref(false)
const clickLeagueNum = () => {
  ifLeagueNum.value = !ifLeagueNum.value
  closeSlideshow.value = false
}
const handleRecommend = () => {
  leagueId.value = ''
  closeSlideshow.value = true
  getFirstLeagues()
}
const handleChangeLeagueId = (item: any) => {
  if (!item.gameTypeCount) return
  closeSlideshow.value = false
  activeNames.value = '1'
  leagueArrowTitle?.value?.changeClick(false)
  championGuessing?.value?.CloseClick(false)
  leagueId.value = item.leagueId


  if (item.countryId) {
    getLeagueByCountryInfo(item.countryId, 2)
    return
  }
  initData()
}

onActivated(async () => {
  if (locationHeight.value) return
  gameType.value = route.params?.type || 'FT'
  groupedArrays.value = []
  firstLeaguesList.value = []
  championListLoading.value = true
  ifLeagueNum.value = false
  closeSlideshow.value = false
  getCommonMatches()
  const countryId = route.query?.countryId || ''
  leagueId.value = route.query?.leagueId || ''
  if (countryId) {
    getLeagueByCountryInfo(countryId, 2)
  } else {
    getFirstLeagues()
  }
  getSearchCountryInfo()
  nextTick(() => {
    refSportsTabs.value?.setSports(gameType.value)
  })
  // 是否冠军赛
  const isChampion = route.query?.ischampion || ''
  if (isChampion === 'yes') {
    activeNames.value = '2'
    leagueArrowTitle?.value?.changeClick(true)
    championGuessing?.value?.CloseClick(false)
  } else {
    activeNames.value = '1'
    leagueArrowTitle?.value?.changeClick(false)
    championGuessing?.value?.CloseClick(false)
  }
})
</script>
<style lang="scss" scoped>
.sport-page {
  padding: 0 36px;

  .tabs-top {
    padding-top: 30px;
  }

  .my-scroll__content {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;


    &::-webkit-scrollbar {
      height: 0;
      display: none;
    }



    .betting-sport-nav {
      margin-top: 26px;
      margin-bottom: 5px;
      width: 100%;
      max-height: 140px;
      white-space: normal;
      position: relative;
      display: flex;
      align-items: center;
      // flex-wrap: wrap;

      .textButton,
      .ImageButton {
        margin-left: 10px;
        margin-bottom: 10px;
      }

    }
  }

  // 联赛切换栏
  .tabs-cut {
    .league-num {
      white-space: nowrap;
      display: inline-block;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 24px;
      font-weight: 600;
      color: var(--color-global-minButtonCl);
      background: var(--color-global-buttonBg);
      box-shadow: var(--color-global-buttonShadow);
      transition: all 0.3s;

      .league-match-num {
        color: var(--color-text-3);
        margin: 0 12px;
      }

      .icon-svg-1 {
        font-size: 20px;
        color: var(--color-text-1);
      }

    }

    .league-num-1 {
      background: var(--color-global-buttonPrimaryBg);
      color: #fff;
      transition: all 0.3s;
      // margin-top: -10px;

      .league-match-num {
        color: #FFF;
        margin: 0 12px;
      }

      .icon-svg-1 {
        font-size: 20px;
        color: #FFF;
        transform: rotate(180deg);
        transition: all .2s;
      }

    }

    .tabs-cut-1 {
      // margin-left: -30px;
      margin-right: 10px;
    }
  }

  .tabs-cut-2 {
    margin-top: 20px;
    display: flex;
    margin-bottom: 2px;

  }

  .tabs-cut-3 {
    margin-top: 26px;
    margin-bottom: 10px;
    display: flex;
  }


  // 地区联赛折叠
  .van-collapse-item {
    :deep(.van-collapse-item__title) {
      background: none;

      .van-icon-arrow {
        color: var(--color-text-3);
        font-weight: 800;
        // display: none;
      }

    }

    :deep(.van-collapse-item__content) {
      padding: 0;
    }
  }

  .collapseAll {
    display: flex;
    align-items: center;

    .collapse-name {
      height: 58px;
      width: 58px;
      border-radius: 50%;
      overflow: hidden;

    }

    .collapse-title {
      font-size: 24px;
      color: var(--color-text-5);
      font-weight: 600;
      margin-left: 10px;

    }

    .collapse-num {
      font-size: 24px;
      color: var(--color-text-3);
      font-weight: 600;
      margin-left: 10px;

    }

  }

  .collapse-concent {
    margin-left: 100px;
    color: var(--color-text-5);
    font-weight: 600;
    white-space: nowrap; //规定段落中的文本不进行换行
    text-overflow: ellipsis;
    margin-bottom: 17px;

    &-1 {
      color: var(--color-loadingcl);
    }
  }

  :deep(.van-tabs__nav--complete) {
    background-color: var(--color-background-color);
  }
}
</style>
