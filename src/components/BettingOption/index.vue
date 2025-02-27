<template>
  <div class="betting-option-wrap" :class="{ selected }" @click="touchMarket">
    <slot :selected="selected" :lock="lock" :iorChange="marketInfo.iorChange"></slot>
  </div>
</template>
<script setup lang="ts">
import { MarketInfo } from '@/entitys/MarketInfo'
import store from '@/store'
import Subscriber from '@/utils/subscriber'
import { showToast } from 'vant'
import { computed, watch } from 'vue'
import { moneyFormat } from '@/utils/math'
const props = defineProps({
  marketInfo: {
    type: Object,
    default: () => {}
  },
  buyState: {
    type: Boolean,
    default: true
  }
})
const markets = computed(() => store.state.betting.markets)

const lock = computed(() => {
  const { ior, sw } = props.marketInfo || {}
  if (!ior || !Number(ior) || sw === 'N') {
    return true
  }
  return false
})
const selected = computed(
  () => !!markets.value.find((marketInfo: MarketInfo) => marketInfo.playOnlyId === props.marketInfo.playOnlyId)
)

// 监听赔率变化
watch(
  () => props.marketInfo,
  (newVal: any, oldVal: any) => {
    if (newVal.ior === void 0 || oldVal.ior === void 0) {
      return false
    }
    const newIor = newVal.ior * 1 || 0
    const oldIor = oldVal.ior * 1 || 0
    props.marketInfo.oldIor = moneyFormat(oldIor) || ''

    if (+newIor > +oldIor) {
      props.marketInfo.iorChange = 'up-ior'
      props.marketInfo.iorChangeTransition = 'up-ior'
    } else if (+newIor < +oldIor) {
      props.marketInfo.iorChange = 'down-ior'
      props.marketInfo.iorChangeTransition = 'down-ior'
    } else {
      props.marketInfo.iorChange = ''
      props.marketInfo.iorChangeTransition = ''
    }

    if (props.marketInfo.iorChange) {
      setTimeout(() => {
        props.marketInfo.iorChange = ''
      }, 5000)
    }
  }
)

const touchMarket = (event: any) => {
  if (lock.value || !props.buyState) {
    return false
  }
  const target = event.target
  // 唯一值
  const { playOnlyId } = props.marketInfo
  // 判断是否存在
  const find = markets.value.find((marketInfo: MarketInfo) => marketInfo.playOnlyId === playOnlyId)
  if (find) {
    store.dispatch('betting/deleteMarket', props.marketInfo.playOnlyId)
  } else {
    if (markets.value.length >= 10) {
      showToast('最多可添加10个选项!')
      return false
    }
    if (markets.value.length) {
      Subscriber.emit('EVENT_BET_BALL', target)
    }
    store.dispatch('betting/addMarket', props.marketInfo)
  }
}
</script>
