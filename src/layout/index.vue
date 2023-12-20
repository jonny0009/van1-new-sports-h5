<template>
  <GlobalHeader />
  <GlobalRefresh>
    <sportsTabsView v-if="$route.meta.showSportsTabsView" />
    <barTabsView v-if="$route.meta.showBarTabsView" class="mt10 mb10" />
    <AppMain />
  </GlobalRefresh>
  <GlobalFooter />
  <BettingSlip />
</template>
<script lang="ts" setup>
import GlobalRefresh from './components/GlobalRefresh/index.vue'
import GlobalHeader from './components/GlobalHeader/index.vue'
import sportsTabsView from './components/GlobalHeader/components/sportsTabsView/index.vue'
import barTabsView from './components/GlobalHeader/components/barTabsView/index.vue'
import AppMain from './components/AppMain.vue'
import GlobalFooter from './components/GlobalFooter/index.vue'
import BettingSlip from '@/components/BettingSlip/index.vue'
</script>
<style lang="scss" scoped>
.layout-wrapper {
}
</style>
