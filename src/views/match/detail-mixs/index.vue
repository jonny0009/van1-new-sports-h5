<template>
  <div class="panel-mixs" ref="newContainer">
    <van-tabs v-model:active="tabActive" class="global-nav-vant-tabs" shrink line-height="0" @change="onChangeTabs">
      <van-tab v-for="tab in tabList" :key="tab.gameType" :name="tab.gameType">
        <template #title>
          <div class="tab-title">
            <span>{{ tab.gameTypeName }}</span>
          </div>
        </template>
        <DateTabs :data="dateList" @on-date="onChangeDate" />

        <van-list
          v-model:loading="loading"
          :finished="finished"
          :immediate-check="false"
          :finished-text="matchList.length == 0 ? '' : $t('live.noMore')"
          @load="fetchMatchList"
        >
          <!-- <template v-if="loading"> -->
          <!-- <MatchHandicap v-for="item in matchList" :key="item.gidm" :send-params="item" class="mb10" /> -->
          <div v-if="matchList.length">
            <van-sticky :offset-top="offsetTop" :container="newContainer" z-index="8">
              <playTitle :send-params="matchList[0]" />
            </van-sticky>
            <div v-for="(item, idx) in matchList" :key="idx">
              <MatchLive
                v-if="item.showtype === 'RB'"
                :play-title-toggle="false"
                :send-params="item"
                :tabType="'RB'"
                :class="{ mt10: idx !== 0 }"
                :ifMatchLive="true"
              />
              <MatchHandicap v-else :play-title-toggle="false" :send-params="item" class="mb10" :ifMatchLive="true" />
            </div>
          </div>
          <!-- </template> -->
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { Ref, defineAsyncComponent, onMounted, ref, computed } from 'vue'
import { comBoByGameTypeApi, matchConditionApi, matchListApi } from '@/api/live'
const DateTabs = defineAsyncComponent(() => import('./DateTabs.vue'))
const MatchHandicap = defineAsyncComponent(() => import('@/components/Match/MatchHandicap.vue'))
const playTitle = defineAsyncComponent(() => import('@/components/Title/playTitle/index.vue'))
const MatchLive = defineAsyncComponent(() => import('@/components/HomeMatch/MatchLive/index.vue'))

import store from '@/store'
const offsetTop = computed(() => {
  const offsetTop = store.state.app.globalBarHeaderHeight || 188
  // var offsetTopval = 48
  // if (offsetTop > 60) {
  //   offsetTopval = 48
  // } else {
  //   offsetTopval = offsetTop
  // }
  return offsetTop
})

onMounted(() => {
  fetchMatchCondition()
})

const tabList: Ref<any[]> = ref([])
const newContainer = ref(null)
const tabActive = ref()
const currentType = ref()
const onChangeTabs = (type: string) => {
  currentType.value = type
  dateList.value = []
  matchList.value = []
  fetchComBoByGameType()
}

const currentDate = ref()
const onChangeDate = (date: string) => {
  currentDate.value = date
  matchList.value = []
  onRefresh()
  fetchMatchList()
}

const fetchMatchCondition = async () => {
  const gameDate = ''
  const res: any = await matchConditionApi({ gameDate })
  if (res.code === 200) {
    tabList.value = res.data || []
  }
}

const dateList = ref([])
const fetchComBoByGameType = async () => {
  const params = { gameType: currentType.value }
  const res: any = await comBoByGameTypeApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    dateList.value = data.dateList || []
  }
}

let page = 0
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const matchList: Ref<any[]> = ref([])
const fetchMatchList = async () => {
  if (refreshing.value) {
    matchList.value = []
    refreshing.value = false
  }
  page++
  const params = {
    page: page,
    pageSize: 10,
    gameType: currentType.value,
    gameDate: currentDate.value
    // leagueIds: '',
  }
  const res: any = await matchListApi(params)
  if (res.code === 200) {
    const { baseData, total } = res.data || {}
    const results = [...baseData]
    results.forEach((item: any) => {
      matchList.value.push(item)
    })
    loading.value = false
    finished.value = matchList.value.length === total
  } else {
    finished.value = true
  }
}

const onRefresh = () => {
  page = 0
  finished.value = false
  loading.value = true
  fetchMatchList()
}
</script>

<style lang="scss" scoped>
.panel-mixs {
  padding: 20px 0;

  .van-list {
    padding: 0 16px;
  }
}
</style>
