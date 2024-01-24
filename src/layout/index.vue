<template>
  <div id="main">
    <GlobalHeader v-if="!$route.meta.hideGlobalHeaderView" />
    <GlobalRefresh>
      <GlobalSportsTabsView v-if="$route.meta.showSportsTabsView" />
      <GlobalBarTabsView v-if="$route.meta.showBarTabsView" class="pb10 pt20" />
      <AppMain />
    </GlobalRefresh>
    <!-- <GlobalFooter /> -->
    <BettingSlip v-if="betShow && isOpen && !$route.meta.hideGlobalBottomBet" ref="bettingSlip" @close="betClose" />
    <van-back-top v-if="backTopShow" bottom="100" right="20" class="GlobalTop" :class="{
      showBettingSlip: betShow && isOpen
    }">
      <van-icon name="down" />
    </van-back-top>
  </div>
</template>
<script lang="ts" setup>
import GlobalRefresh from './components/GlobalRefresh/index.vue'
import GlobalHeader from './components/GlobalHeader/index.vue'
import GlobalSportsTabsView from './components/GlobalSportsTabsView/index.vue'
import GlobalBarTabsView from './components/GlobalBarTabsView/index.vue'
import AppMain from './components/AppMain.vue'
// import GlobalFooter from './components/GlobalFooter/index.vue'
import BettingSlip from '@/components/BettingSlip/index.vue'
import { useRouter } from 'vue-router'
import { computed, ref, watch, onMounted, onActivated, onUpdated, nextTick } from 'vue'
import store from '@/store'
const { currentRoute } = useRouter()
const betShow: any = ref(true)
const unShow: any = ref(['game'])
const heightNumY: any = ref(0)

const markets = computed(() => store.state.betting.markets)
const scrollNum = computed(() => store.state.user.scrollNumY)
// const ifKeepCache = computed(() => store.state.user.keepCache)
const locationHeight = computed(() => store.state.user.locationHeight)
const KeepAlive = computed(() => currentRoute.value.meta.KeepAlive)

const isOpen = ref(markets.value.length > 0)
const bettingSlip = ref()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUpdated(() => {
  if (KeepAlive.value && locationHeight.value) {
    // getPageMove()
    setTimeout(() => {
      getPageMove()
    }, 50);
  }
})

// 缓存
onActivated(() => {  })

// 坐标
const handleScroll = () => {
  if (currentRoute.value.meta.KeepAlive) {
    // 触发保存
    store.dispatch('user/getScrollNumY', window.scrollY)
  }
}


const ifShowFixedBet = () => {
  if (betShow.value && isOpen.value) {
    store.dispatch('app/setKeyValue', {
      key: 'showFixedBet',
      value: true
    })
  } else {
    store.dispatch('app/setKeyValue', {
      key: 'showFixedBet',
      value: false
    })
  }
}
watch(
  () => currentRoute.value,
  (route: any) => {
    const name: string = route.name
    betShow.value = !unShow.value.includes(name)
    ifShowFixedBet()
  },
  { immediate: true }
)
watch(
  () => markets.value.length,
  () => {
    if (markets.value.length) {
      isOpen.value = true
    } else if (!bettingSlip.value.open && markets.value.length === 0) {
      isOpen.value = false
    }
    ifShowFixedBet()
  }
)
watch(scrollNum, (newValue, oldValue) => {
  // console.log(`doubleCount发生变化，新值为：${newValue}，旧值为：${oldValue}`);
  if (newValue) {
    heightNumY.value = newValue
  } else {
    heightNumY.value = oldValue
  }
});

const getPageMove = () => {
  nextTick(() => {
    window.scrollTo({
      top: heightNumY.value,
      // behavior: "smooth"
    })
  })
}
const betClose = (state: boolean) => {
  if (!state && markets.value.length === 0) {
    isOpen.value = false
  }
  ifShowFixedBet()
}

const backTopShow = computed(() => {
  const route: any = currentRoute.value
  const notNeeds = ['MatchBets', 'MatchWith', 'MatchMixs', 'MatchData', 'MatchOther']
  return !notNeeds.includes(route.name)
})
</script>
<style lang="scss">
.GlobalTop {
  background: var(--color-primary);
  right: 40px !important;
  bottom: 40px !important;

  .van-icon {
    transform: rotate(180deg);
    font-weight: 600;
  }

  &.showBettingSlip {
    bottom: 120px !important;
  }
}
</style>
