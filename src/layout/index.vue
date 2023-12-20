<template>
  <GlobalHeader />
  <GlobalRefresh>
    <GlobalSportsTabsView v-if="$route.meta.showSportsTabsView" />
    <GlobalBarTabsView v-if="$route.meta.showBarTabsView" class="mt10 mb10" />
    <AppMain />
  </GlobalRefresh>
  <GlobalFooter />
  <BettingSlip />
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
</script>
<style lang="scss" >
.GlobalTop {
  background: #7642fe;
  .van-icon{
    transform: rotate(180deg);
    font-weight: 600;
  }
}
</style>
