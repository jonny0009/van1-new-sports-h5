<template>
  <div class="betting-option-wrap" @click="touchMarket">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import Subscriber from '@/utils/Subscriber'
const touchMarket = (event) => {
  const target = event.target
  Subscriber.emit('EVENT_BET_BALL', target)
}
</script>

<style scoped lang="scss">
.betting-option-wrap {
  display: inline-block;
}
</style>
