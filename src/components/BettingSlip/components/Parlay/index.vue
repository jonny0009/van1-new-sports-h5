<template>
  <Singles v-for="market in comboMarkets" :key="market.playOnlyId" :market-info="market"></Singles>
  <div v-if="notComboMarkets.length" class="nothing-combo-wrap">
    <Singles v-for="market in notComboMarkets" :key="market.playOnlyId" ref="singles" :market-info="market"></Singles>
  </div>
  <div v-if="notComboMarkets.length" class="not-combo-tips">
    <span class="left">
      <span class="icon"></span>
      <span class="tips">{{ $t('betting.noComboTips') }}</span>
    </span>
    <div class="clear-btn" @click="clearBets">{{ $t('betting.OneClickClear') }}</div>
  </div>
</template>
<script lang="ts" setup>
import { MarketInfo } from '@/entitys/MarketInfo'
import store from '@/store'
import Singles from '../Single/index.vue'
import { computed, ref } from 'vue'
const singles = ref()
const props = defineProps({
  markets: {
    type: Object,
    default: () => {}
  }
})
const comboMarketPlayOnlyIds = computed(() => store.getters['betting/comboMarketPlayOnlyIds'])
const comboMarkets = computed(() =>
  props.markets.filter((market: MarketInfo) => comboMarketPlayOnlyIds.value.includes(market.playOnlyId))
)
const notComboMarkets = computed(() =>
  props.markets.filter((market: MarketInfo) => !comboMarketPlayOnlyIds.value.includes(market.playOnlyId))
)

const clearBets = () => {
  if (singles.value && singles.value.length) {
    singles.value.forEach((item: any) => {
      item?.remove()
    })
  }
}
</script>
<style scoped lang="scss">
.nothing-combo-wrap {
  border: 6px solid rgba(250, 179, 7, 1);
  border-radius: 28px;
  margin: 25px 38px 10px;

  .Single-wrap {
    margin: 0 0 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.not-combo-tips {
  margin: 10px 38px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
  }
  .clear-btn {
    margin-right: 10px;
    font-size: 24px;
    color: rgb(72, 163, 255);
  }

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
    margin-left: 10px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 500;
  }
}
</style>
