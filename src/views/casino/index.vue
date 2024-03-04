<template>
  <div class="casino-page" :class="{ 'has-bet': showFixedBet }">
    <GoodRoad />
    <LotterRoad />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import GoodRoad from './GoodRoad/index.vue'
import LotterRoad from './LotterRoad/index.vue'
import store from '@/store'

const showFixedBet = computed(() => store.state.app.showFixedBet)
</script>
<style lang="scss" scoped>
.casino-page {
  height: 100%;
  padding-bottom: 88px;
  &.has-bet {
    padding-bottom: calc(88px + 96px);
  }
}
</style>
