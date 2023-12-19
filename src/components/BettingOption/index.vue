<template>
  <div class="betting-option-wrap" @click="touchMarket">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import Subscriber from '@/utils/Subscriber'
const props = defineProps({
  marketInfo: {
    type: String,
    default: function () {
      return ''
    }
  }
})
const touchMarket = (event:any) => {
  const target = event.target
  Subscriber.emit('EVENT_BET_BALL', target)
}

console.log(props.marketInfo)

</script>

<style scoped lang="scss">
.betting-option-wrap {
  display: inline-block;
}
</style>
