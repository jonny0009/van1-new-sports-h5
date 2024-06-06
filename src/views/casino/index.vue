<template>
  <div class="casino-page" :class="{ 'has-bet': showFixedBet }">
    <div v-if="maintenanceState" class="maintenance-view">
      <div class="maintenance-icon" :style="{ backgroundImage: `url(${bg})` }"></div>
      <div class="maintenance-title">{{ $t('home.casinoTitleObj.title3') }}</div>
      <div v-if="timerState" class="maintenance-subtitle">{{ $t('home.casinoTitleObj.title4') }}</div>
      <div v-if="timerState" class="maintenance-timer">{{ timerStr }}</div>
      <div class="go-btn" @click="goHome">{{ $t('home.casinoTitleObj.gohome') }}</div>
    </div>
    <template v-else>
      <div class="header-area">
        <div class="btns">
          <!-- <div class="multiple-units" @click="miTablesShow">
            <span class="units-icon mi-bet"></span>
            <span class="units-title">{{ $t('home.miBet') }}</span>
          </div> -->
          <div class="multiple-units" @click="goodRoadShow">
            <span class="units-icon"></span>
            <span class="units-title">{{ $t('home.mulBet') }}</span>
          </div>
        </div>
      </div>

      <GoodRoad v-if="list.length" :list="list" :loading="loading" />
      <LotterRoad :list="list1" :loading="loading1" />

      <van-popup v-model:show="show" round position="bottom" teleport="body" :style="{ height: '84%' }" @close="url = ''">
        <iframe ref="iframeRef" width="100%" height="100%" style="border: none" :src="url" frameborder="0"></iframe>
      </van-popup>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch, onBeforeMount, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store'
import { closeToast, showLoadingToast } from 'vant'
import { getBacGoodRoads, realTableList, getBJGameUrl } from '@/api/home'
import { getBrowserLanguage } from '@/utils'
import { BaccaratUtils } from '@/utils/BaccaratUtils'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import bule from '@/assets/images/home/casino/maintenance-1.png'
import purple from '@/assets/images/home/casino/maintenance-2.png'
import GoodRoad from './GoodRoad/index.vue'
import LotterRoad from './LotterRoad/index.vue'

const showFixedBet = computed(() => store.state.app.showFixedBet)
const theme = computed(() => store.state.app.theme)
const bg = computed(() => {
  if (theme.value === 'blue') {
    return bule
  }
  return purple
})
const maintenanceState: any = ref(false)
const timerState: any = ref(false)
const maintenanceData: any = ref({})
const list: any = ref([])
const list1: any = ref([])
const timer: any = ref()
const timerStr: any = ref('')
const loading = ref(true)
const loading1 = ref(true)

const show = ref(false)
const iframeRef = ref()
const baccaratUtils = ref()
const url = ref('')

onBeforeMount(() => {
  getList()
  getList1()
})
onUnmounted(() => {
  clearInterval(timer.value)
})
clearInterval(timer.value)
timer.value = setInterval(() => {
  getList()
  getList1()
}, 10 * 1000)

const getList = async () => {
  const res = await getBacGoodRoads()
  loading.value = false

  const datas: any[] = res?.data || []
  if (datas && datas.length) {
    const listArg = datas.filter((i: any) => i.goodRoadType !== 4)
    list.value = listArg.slice(0, 2)
  }
}

const getList1 = async () => {
  const res = await realTableList()
  loading1.value = false

  if (res?.data?.code === 503) {
    maintenanceState.value = true
    maintenanceData.value = res?.data?.data
  } else {
    maintenanceState.value = false
  }
  list1.value = res?.data?.data || []
}

watch(
  () => maintenanceState.value,
  () => {
    if (maintenanceState.value) {
      countdown()
    }
  }
)

const countdown = () => {
  // 设置截止时间
  const endTime = maintenanceData.value.endTime.replace(/-/g, '/')
  const end = new Date(endTime).getTime()
  if (Date.now() > end) {
    timerState.value = false
    return false
  }
  timerState.value = true
  // 获取当前时间
  const date = new Date()
  const now = date.getTime()
  // 时间差
  const differTime = end - now
  // 定义变量,h,m,s保存倒计时的时间
  let h, m, s
  if (differTime >= 0) {
    h = Math.floor(differTime / 1000 / 60 / 60)
    m = Math.floor((differTime / 1000 / 60) % 60)
    s = Math.floor((differTime / 1000) % 60)
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    timerStr.value = `${h}:${m}:${s}`
    setTimeout(countdown, 1000)
  }
}

const $router = useRouter()
const goHome = () => {
  $router.push('/home')
}

const handleClose: any = () => {
  show.value = false
  url.value = ''
}
const handleUpdateBalance = () => {
  store.dispatch('user/getCurrency')
}

const miTablesShow = async () => {
  show.value = !show.value
  const params = {
    supplierId: 'aigame',
    gameKey: 'VIR_BAC',
    openType: 2,
    dirType: 1,
    appType: 2
  }
  showLoadingToast({
    duration: 20000,
    message: t('home.loading')
  })
  const gres: any = await getBJGameUrl(params).finally(() => {
    closeToast()
  })

  if (!baccaratUtils.value) {
    baccaratUtils.value = new BaccaratUtils(iframeRef.value, { handleClose, handleUpdateBalance })
  }

  if (gres?.code === 200) {
    const lang = localStorage.getItem('locale') || getBrowserLanguage()
    const gameUrl = gres.data['url'].replace('&isAi=1', '')
    url.value = `${gameUrl}&language=${lang}`
  }
}

const goodRoadShow = async () => {
  show.value = !show.value
  const params = {
    supplierId: 'aigame',
    gameKey: 'BAC-V2.0',
    openType: 2,
    dirType: 1,
    terType: 2
  }
  showLoadingToast({
    duration: 20000,
    message: t('home.loading')
  })
  const gres: any = await getBJGameUrl(params).finally(() => {
    closeToast()
  })

  if (!baccaratUtils.value) {
    baccaratUtils.value = new BaccaratUtils(iframeRef.value, { handleClose, handleUpdateBalance })
  }

  if (gres?.code === 200) {
    const lang = localStorage.getItem('locale') || getBrowserLanguage()
    const gameUrl = gres.data['url'].replace('&isAi=1', '')
    url.value = `${gameUrl}&language=${lang}#/multiple`
  }
}
</script>
<style lang="scss" scoped>
.casino-page {
  height: 100%;
  padding-bottom: 88px;

  &.has-bet {
    padding-bottom: calc(88px + 96px);
  }

  .maintenance-view {
    text-align: center;
    margin-top: 200px;
    .maintenance-icon {
      margin: auto;
      width: 427px;
      height: 320px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .maintenance-title {
      margin-top: 36px;
      font-size: 32px;
      font-weight: 600;
      color: var(--color-casino-maintenance-title);
    }
    .maintenance-subtitle {
      margin-top: 20px;
      font-size: 28px;
      font-weight: 500;
      color: var(--color-casino-maintenance-subtitle);
    }

    .maintenance-timer {
      margin-top: 30px;
      font-size: 60px;
      font-weight: bold;
      color: var(--color-casino-maintenance-timer);
    }

    .go-btn {
      margin: 70px auto 0;
      width: 200px;
      line-height: 68px;
      font-size: 32px;
      font-weight: 600;
      color: #fff;
      border-radius: 34px;
      background-image: linear-gradient(
        0deg,
        var(--color-casino-gohome-gradient-1) 30%,
        var(--color-casino-gohome-gradient-2) 100%
      );
    }
  }
}
  .header-area {
   position: relative;
  }
  .btns {
    display: flex;
    align-items: center;
    position: absolute;
    right: 35px;
    top: 30px;
  }
  .multiple-units {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 68px;
    background-color: rgb(72, 141, 210);
    border-radius: 8px;

    &:first-child {
      margin-right: 20px;
    }

    .units-icon {
      display: inline-block;
      width: 28px;
      height: 28px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-image: url(@/assets/images/home/casino/multiple.png);

      &.mi-bet {
        background-image: url(@/assets/images/home/casino/mi.svg);
      }
    }

    .units-title {
      margin-left: 5px;
      font-size: 25px;
      color: #fff;
    }
  }
</style>
