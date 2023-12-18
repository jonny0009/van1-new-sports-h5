<template>
  <GlobalHeader />
  <AppMain />
  <GlobalFooter />
  <BettingSlip />
</template>
<script lang="ts" setup>
import GlobalHeader from './components/GlobalHeader/index.vue'
import AppMain from './components/AppMain.vue'
import GlobalFooter from './components/GlobalFooter/index.vue'
import BettingSlip from '@/components/BettingSlip/index.vue'
</script>
<style lang="scss" scoped>
.layout-wrapper {
}
</style>
