<template>
  <div class="betting-option-wrap" :class="{ selected }" @click="touchMarket">
    <slot :selected="selected"></slot>
  </div>
</template>
<script setup lang="ts">
import { MarketInfo } from '@/entitys/MarketInfo'
import store from '@/store'
import Subscriber from '@/utils/subscriber'
import { computed } from 'vue'
const props = defineProps({
  marketInfo: {
    type: Object,
    default: () => { }
  }
})
const markets = computed(() => store.state.betting.markets)
const selected = computed(() => !!markets.value.find((marketInfo: MarketInfo) => marketInfo.playOnlyId === props.marketInfo.playOnlyId))

const touchMarket = (event: any) => {
  const target = event.target
  // 唯一值
  const { playOnlyId } = props.marketInfo
  // 判断是否存在
  const find = markets.value.find(
    (marketInfo: MarketInfo) => marketInfo.playOnlyId === playOnlyId
  )
  if (find) {
    store.dispatch('betting/deleteMarket', props.marketInfo.playOnlyId)
  } else {
    Subscriber.emit('EVENT_BET_BALL', target)
    store.dispatch('betting/addMarket', props.marketInfo)
  }
}

// console.log(props.marketInfo)

</script>

<style scoped lang="scss">
.betting-option-wrap {
  display: inline-block;
}
</style>
