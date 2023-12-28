<template>
  <Singles v-for="( market, index ) in comboMarkets " :key="index" :market-info="market"></Singles>
  <div v-if="notComboMarkets.length" class="nothing-combo-wrap">
    <Singles v-for="( market, index ) in notComboMarkets " :key="index" :market-info="market"></Singles>
  </div>
  <div v-if="notComboMarkets.length" class="not-combo-tips">
    <span class="icon"></span>
    <span class="tips">已选内容无法进行组合</span>
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

  .Single-wrap {
    margin: 0 0 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

}

.not-combo-tips {
  margin: 25px 38px;
  display: flex;
  align-items: center;

  .icon {
    display: block;
    width: 22px;
    height: 22px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/exclamation.png');
  }

  .tips {
    margin-left: 21px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 500;
  }
}
</style>
