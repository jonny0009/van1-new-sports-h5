<template>
  <GlobalHeader />
  <GlobalRefresh>
    <GlobalSportsTabsView v-if="$route.meta.showSportsTabsView" />
    <GlobalBarTabsView v-if="$route.meta.showBarTabsView" class="mt10 mb10" />
    <AppMain />
  </GlobalRefresh>
  <GlobalFooter />
  <BettingSlip />
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
<style lang="scss" scoped>
.layout-wrapper {
}
</style>
