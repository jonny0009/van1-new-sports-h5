<template>
  <Singles v-for="( market, index ) in comboMarkets " :key="index" :market-info="market"></Singles>
  <div v-if="notComboMarkets.length" class="nothing-combo-wrap">
    <Singles v-for="( market, index ) in notComboMarkets " :key="index" :market-info="market"></Singles>
  </div>
</template>
<script lang="ts" setup>
import { MarketInfo } from '@/entitys/MarketInfo'
import store from '@/store'
import Singles from '../Single/index.vue'
import { computed } from 'vue'

const props = defineProps({
  markets: {
    type: Object,
    default: () => { }
  }
})
const comboMarketPlayOnlyIds = computed(() => store.getters['betting/comboMarketPlayOnlyIds'])
const comboMarkets = computed(() => props.markets.filter((market: MarketInfo) => comboMarketPlayOnlyIds.value.includes(market.playOnlyId)))
const notComboMarkets = computed(() => props.markets.filter((market: MarketInfo) => !comboMarketPlayOnlyIds.value.includes(market.playOnlyId)))

</script>
<style scoped lang="scss">
.nothing-combo-wrap {
  border: 6px solid rgba(250, 179, 7, 1);
  border-radius: 20px;
  margin: 25px 38px 10px;
  .Single-wrap{
    margin: 0 0 10px;
    &:last-child{
      margin-bottom: 0;
    }
  }
}
</style>
