<template>
  <GlobalHeader />
  <GlobalRefresh>
    <GlobalSportsTabsView v-if="$route.meta.showSportsTabsView" />
    <GlobalBarTabsView v-if="$route.meta.showBarTabsView" class="pb10" />
    <AppMain />
  </GlobalRefresh>
  <!-- <GlobalFooter /> -->
  <BettingSlip v-if="betShow && isOpen" ref="bettingSlip" @close="betClose" />
  <van-back-top
    v-if="backTopShow"
    bottom="100"
    right="20"
    class="GlobalTop"
    :class="{
      showBettingSlip: betShow && isOpen
    }"
  >
    <van-icon name="down" />
  </van-back-top>
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
import { computed, ref, watch } from 'vue'
import store from '@/store'
const { currentRoute } = useRouter()
const betShow: any = ref(true)
const unShow: any = ref(['game'])
const markets = computed(() => store.state.betting.markets)
const isOpen = ref(markets.value.length > 0)
const bettingSlip = ref()
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
const betClose = (state: boolean) => {
  if (!state && markets.value.length === 0) {
    isOpen.value = false
  }
  ifShowFixedBet()
}

const backTopShow = computed(() => {
  const route: any = currentRoute.value
  const routeNames = ['BroadcastDetail']
  return !routeNames.includes(route.name)
})
</script>
<style lang="scss">
.GlobalTop {
  background: var(--color-primary);
  right: 40px !important;
  bottom: 100px !important;

  .van-icon {
    transform: rotate(180deg);
    font-weight: 600;
  }

  &.showBettingSlip {
    bottom: 200px !important;
  }
}
</style>
