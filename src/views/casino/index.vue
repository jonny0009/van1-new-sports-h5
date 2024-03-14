<template>
  <div class="casino-page" :class="{ 'has-bet': showFixedBet }">
    <div class="maintenance-view" v-if="maintenanceState">
      <div class="maintenance-icon" :style="{ backgroundImage: `url(${bg})` }"></div>
      <div class="maintenance-title">赌场维护中...</div>
      <div class="maintenance-subtitle" v-if="timerState">预计维护倒计时</div>
      <div class="maintenance-timer" v-if="timerState">{{ timerStr }}</div>
      <div class="go-btn" @click="goHome">去首页</div>
    </div>
    <template v-else>
      <GoodRoad :list="list" :loading="loading" />
      <LotterRoad :list="list1" :loading="loading1" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import GoodRoad from './GoodRoad/index.vue'
import LotterRoad from './LotterRoad/index.vue'
import store from '@/store'
import { getBacGoodRoads, realTableList } from '@/api/home'
import { onBeforeMount, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import bule from '@/assets/images/home/casino/maintenance-1.png'
import purple from '@/assets/images/home/casino/maintenance-2.png'
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
  list.value = datas.slice(0, 2)
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
</style>
