<template>
  <GlobalHeader />
  <GlobalRefresh>
    <GlobalSportsTabsView v-if="$route.meta.showSportsTabsView" />
    <GlobalBarTabsView v-if="$route.meta.showBarTabsView" class="mt10 mb10" />
    <AppMain />
  </GlobalRefresh>
  <GlobalFooter />
  <BettingSlip v-if="betShow && markets.length" />
  <BettingMore />
  <van-back-top bottom="100" right="20" class="GlobalTop">
    <van-icon name="down" />
  </van-back-top>
</template>
<script lang="ts" setup>
import GlobalRefresh from './components/GlobalRefresh/index.vue'
import GlobalHeader from './components/GlobalHeader/index.vue'
import GlobalSportsTabsView from './components/GlobalSportsTabsView/index.vue'
import GlobalBarTabsView from './components/GlobalBarTabsView/index.vue'
import AppMain from './components/AppMain.vue'
import GlobalFooter from './components/GlobalFooter/index.vue'
import BettingSlip from '@/components/BettingSlip/index.vue'
import BettingMore from '@/components/BettingMore/index.vue'
import { useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import store from '@/store'
const { currentRoute } = useRouter()
const betShow: any = ref(true)
const unShow: any = ref(['game'])
const markets = computed(() => store.state.betting.markets)
watch(
  () => currentRoute.value,
  (route: any) => {
    const name: string = route.name
    betShow.value = !unShow.value.includes(name)
  },
  { immediate: true }
)
</script>
<style lang="scss">
.GlobalTop {
  background: #7642fe;
  right: 40px !important;
  bottom: 200px !important;

  .van-icon {
    transform: rotate(180deg);
    font-weight: 600;
  }
}
</style>
