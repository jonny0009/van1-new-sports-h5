<template>
  <div id="main">
    <GlobalHeader v-if="!$route.meta.hideGlobalHeaderView" @betShow="betShow" />
    <GlobalRefresh>
      <DoubleRowNav v-if="homeStyle === 3" />
      <GlobalSportsTabsView v-if="$route.meta.showSportsTabsView" />
      <GlobalBarTabsView v-if="$route.meta.showBarTabsView" class="pb5 pt15" />
      <AppMain ref="appContent" />
    </GlobalRefresh>
    <BettingSlip v-if="betShowState && !$route.meta.hideGlobalBottomBet" ref="bettingSlip" />
    <GlobalFooter v-if="homeStyle === 1" @valueChange="betShow" />
    <van-back-top
      v-if="backTopShow"
      bottom="100"
      right="20"
      class="GlobalTop"
      :class="{
        showBettingSlip: betShowState,
        showBettingSlipHomeStyle: homeStyle === 1
      }"
    >
      <van-icon name="down" />
    </van-back-top>
  </div>
</template>
<script lang="ts" setup>
import GlobalRefresh from './components/GlobalRefresh/index.vue'
import DoubleRowNav from './components/DoubleRowNav/index.vue'
import GlobalHeader from './components/GlobalHeader/index.vue'
import GlobalSportsTabsView from './components/GlobalSportsTabsView/index.vue'
import GlobalBarTabsView from './components/GlobalBarTabsView/index.vue'
import AppMain from './components/AppMain.vue'
import GlobalFooter from './components/GlobalFooter/index.vue'
import BettingSlip from '@/components/BettingSlip/index.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch, onMounted, onActivated, onUpdated, nextTick } from 'vue'
import store from '@/store'
const appContent = ref()

const route = useRoute()
const { currentRoute } = useRouter()
const unShow: any = ref(['game', 'Casino'])
const heightNumY: any = ref(0)
const indexNum: any = ref(0)
const betShowState: any = ref(!unShow.value.includes(route.name))

const scrollNum = computed(() => store.state.user.scrollNumY)
const homeStyle = computed(() => store.state.app.merchantConfig.homeStyle || 2)
const locationHeight = computed(() => store.state.user.locationHeight)
const KeepAlive = computed(() => currentRoute.value.meta.KeepAlive)
const pageIndex: any = computed(() => currentRoute.value.meta.index)

// 获取的体育项
const sportsListArr = computed(() => store.state.match.sportsListArr)
const sportsList = computed(() => {
  const newSportsA = sportsListArr.value.filter((e: any) => {
    return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType) && e.num * 1
  })
  let newSportsB: any = []
  if (newSportsA.length) {
    const newSportsC = newSportsA.map((e: any, index: any) => {
      return {
        routerPath: `/sport/${e.gameType}`,
        indexNum: 8 + index
      }
    })
    newSportsB = [...newSportsC]
  }
  return newSportsB
})

const bettingSlip = ref()

watch(
  () => route.path,
  (to) => {
    console.log('path', to)
    const obj = sportsList.value.find((item: any) => {
      if (item.routerPath === to) {
        return item
      }
    })
    if (homeStyle.value !== 2 && obj) {
      if (obj.indexNum > indexNum.value) {
        appContent.value.transitionName = 'fade-right'
        indexNum.value = obj.indexNum
      } else {
        appContent.value.transitionName = 'fade-left'
        indexNum.value = obj.indexNum
      }
      return
    }
    if (pageIndex.value > indexNum.value) {
      appContent.value.transitionName = 'fade-right'
      indexNum.value = pageIndex.value
    } else {
      appContent.value.transitionName = 'fade-left'
      indexNum.value = pageIndex.value
    }
  }
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUpdated(() => {
  if (KeepAlive.value && locationHeight.value) {
    // getPageMove()
    setTimeout(() => {
      getPageMove()
    }, 50)
  }
})

// 缓存
onActivated(() => {})

// 坐标
const handleScroll = () => {
  if (currentRoute.value.meta.KeepAlive) {
    // 触发保存
    store.dispatch('user/getScrollNumY', window.scrollY)
  }
}

const betShow = (value: any) => {
  if (value === 'bottomHome') {
    if (bettingSlip.value) {
      bettingSlip.value.open = false
    }
    return
  }
  bettingSlip.value.open = true
}

const ifShowFixedBet = () => {
  if (betShowState.value) {
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
    betShowState.value = !unShow.value.includes(name)
    ifShowFixedBet()
  },
  { immediate: true }
)

watch(scrollNum, (newValue, oldValue) => {
  // console.log(`doubleCount发生变化，新值为：${newValue}，旧值为：${oldValue}`);
  if (newValue) {
    heightNumY.value = newValue
  } else {
    heightNumY.value = oldValue
  }
})

const getPageMove = () => {
  nextTick(() => {
    window.scrollTo({
      top: heightNumY.value
      // behavior: "smooth"
    })
  })
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
  &.showBettingSlipHomeStyle {
    bottom: 198px !important;
  }
}
</style>
