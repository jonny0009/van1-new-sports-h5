<template>
  <div ref="newContainer">
    <swipeLive class="mt10" />
    <div class="tabs-cut">
      <van-tabs :duration="0.2" v-model:active="active" shrink line-height="0" :animated="ifAnimated"
        @change="onChangeTabs" :swipe-threshold="3" @click-tab="ifAnimated = true">
        <van-tab v-for="(item, index) in gameTypeList" :key="index" :name="item.gameType">
          <template #title>
            <TextButton v-if="index === 0" :text="$t('sport.all')" :active="!gameType" class="tabs-cut-1" />
            <SportsButton v-else class="tabs-cut-1" :text="item.gameType" :active="active === item.gameType"
              :class="item.gameType" :count="item.count" show-count />
          </template>
          <div class="sportlive">
            <Loading v-if="!isLoading" />
            <template v-else>
              <template v-for="(item, idx) in commonMatchesList" :key="idx">
                <van-sticky v-if="idx === 0" :offset-top="offsetTop" :container="newContainer" z-index="5">
                  <playTitle :class="{ 'mt20': idx !== 0 }" :send-params="item" />
                </van-sticky>
                <MatchLive :play-title-toggle="false" :send-params="item" :tabType="'RB'"
                  :class="{ 'mt10': idx !== 0 }" />
              </template>
              <HomeEmpty v-if="!commonMatchesList.length"></HomeEmpty>
            </template>
            <div v-if="commonMatchesList.length" class="Button-MatchMore mt10" @click="noMoreclick">
              <span>
                {{ $t('live.noMore') }}
              </span>
            </div>
            <FooterHeight />
          </div>
        </van-tab>
      </van-tabs>
    </div>
   
  </div>
</template>
<script lang="ts" setup>
import TextButton from '@/components/Button/TextButton/index.vue'
import MatchLive from '@/components/HomeMatch/MatchLive/index.vue'
import playTitle from '@/components/Title/playTitle/index.vue'
import swipeLive from './swipeLive/index.vue'
import store from '@/store'
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
import { ref, onBeforeMount, onActivated, onDeactivated, onBeforeUnmount, computed, watch } from 'vue'
import { apiRBCondition, apiCommonMatches } from '@/api/home'
const gameType: any = ref()
const isLoading = ref(false)
const newContainer = ref(null)
const init = async (toggleLoading: any = true) => {
  await getApiRBCondition()
  await getApiCommonMatches(toggleLoading)
}
const active = ref('')
const ifAnimated: any = ref(true)

const showGameTypeList: any = ref([''])
const gameTypeList: any = ref([])
const getApiRBCondition = async () => {
  const res: any = (await apiRBCondition({})) || {}
  if (res.code === 200 && res.data) {
    const dataList = res.data || []
    gameTypeList.value = dataList.filter((t: any) => !showGameTypeList.value.includes(t.gameType))
    gameTypeList.value = [{ gameType: '' }, ...gameTypeList.value]
  }
}
const commonMatchesList: any = ref([])
const getApiCommonMatches = async (toggleLoading: any = true) => {
  const params = {
    gameType: gameType.value || '',
    showtype: 'RB',
    timeStage: 0,
    dateStage: 0,
    gameSort: 1,
    isNovice: 'Y',
    onlyFavorite: 0,
    leagueIds: '',
    gameTypeSon: '',
    page: 1,
    pageSize: 200
  }
  if (toggleLoading) {
    isLoading.value = false
  }
  const res: any = (await apiCommonMatches(params)) || {}
  if (toggleLoading) {
    isLoading.value = true
  }
  if (res.code === 200 && res.data?.matchList?.baseData) {
    const dataList = res.data?.matchList?.baseData || []
    commonMatchesList.value = dataList.filter((t: any) => !showGameTypeList.value.includes(t.gameType))
  } else {
    commonMatchesList.value = []
  }
}
const noMoreclick = () => {
  return
}
const onChangeTabs = (item: any) => {
  // gameType.value = item.gameType
  commonMatchesList.value = []
  gameType.value = item
  getApiCommonMatches()
}
onBeforeMount(() => {
  startInterval()
  isLoading.value = false
  init()
})
onActivated(() => {
  startInterval()
})
onDeactivated(() => {
  setClearInterval()
})
onBeforeUnmount(() => {
  setClearInterval()
  store.dispatch('home/setKeyValue', {
    key: 'RrefShow',
    value: true
  })
  store.dispatch('home/setKeyValue', {
    key: 'OUrefShow',
    value: true
  })
  store.dispatch('home/setKeyValue', {
    key: 'MrefShow',
    value: true
  })
})
const pushSwitch: any = computed(() => store.state.app.businessConfig.pushSwitch)
watch(pushSwitch, () => {
  startInterval()
})
const scrollNum = computed(() => store.state.user.scrollNumY)
watch(() => scrollNum.value, (newValue) => {
  if (newValue) {
    ifAnimated.value = false
  }
})
const IntervalTimer: any = ref()
const startInterval = () => {
  clearTimeout(IntervalTimer)
  IntervalTimer.value = setTimeout(() => {
    setIntervalSendData()
  }, 100)
}
const setIntervalDate: any = ref((10 + 5) * 1000)
const setIntervalSendData = () => {
  if (+pushSwitch.value === 1) {
    setIntervalDate.value = 2 * 60 * 1000
  }
  setClearInterval()
  setIntervalTimer.value = setInterval(() => {
    init(false)
  }, setIntervalDate.value)
}
const setIntervalTimer: any = ref()
const setClearInterval = () => {
  clearInterval(setIntervalTimer.value)
}
const timeout: any = ref('')
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => { }, 100)
  }
})
</script>
<style lang="scss" scoped>
.tabs-cut {
  padding: 0 40px;
  margin-top: 10px;
}

.tabs-cut-1 {
  margin-left: -30px;
  margin-right: 10px;
}
:deep(.van-tabs__line) {
  display: none;
}

:deep(.van-tabs__nav--complete) {
  background-color: var(--color-background-color);
}

.sportlive {
  // padding: 0 40px;
  margin-top: 10px;
}

.sportlive-Match-Tabs {
  padding: 20px 0;
  display: flex;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }

  .textButton {
    margin-right: 20px;
    flex-shrink: 1;
  }

  .SportsButton {
    margin-right: 20px;
    flex-shrink: 1;
  }
}</style>
