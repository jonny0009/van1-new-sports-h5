<template>
  <!-- 提前结算 -->
  <div v-if="item.creditState === 0">
    <div v-if="Number(props.item.cashoutType) === 2" class="ahead-btn">
      <span>{{ $t('user.affirmPend') }}...</span>
    </div>
    <div v-else-if="!item.btnLogin && earlyMoney(item)" class="ahead-btn" @click="handleFinal(item)">
      <span>{{ $t('user.aheadFinal') }}</span>
      <CurrencyComp />
      <span v-points="earlyMoney(item)"></span>
    </div>
    <div v-else-if="item.btnLogin && earlyMoney(item)" class="ahead-btn">
      <span>{{ $t('user.aheadFinal') }}</span>
      <CurrencyComp />
      <span v-points="earlyMoney(item)"></span>
      <span class="loading-icon"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, reactive } from 'vue'
import CurrencyComp from '@/components/Currency/index.vue'
import store from '@/store'
import { computed } from 'vue'
const aheadOrderList = computed(() => store.state.user.aheadOrderList || [])
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

// 提前结算
const handleFinal = (item: any) => {
  item.btnLogin = true
  const params: any = {
    amount: earlyMoney(item, 2),
    orderId: item.orderId
  }
  store.dispatch('user/handleConfirmCashout', params)
}
const earlyMoney = (item: any, type?: any) => {
  if (aheadOrderList.value.length) {
    const item1 = aheadOrderList.value.find((e: any) => e.orderId === item.orderId)
    if (item1) {
      if (type === 2) {
        return item1.realCashoutMax
      }
      return item1.cashoutMax
    }
    return 0
  }
  return 0
}
</script>

<style lang="scss" scoped>
// 提前结算
.ahead-btn {
  margin-top: 13px;
  width: 100%;
  height: 70px;
  background-color: var(--color-bet-iortext);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 600;

  .img_1 {
    margin: 0 8px;
    font-weight: 500;
  }

  .loading-icon {
    margin-left: 10px;
    display: inline-block;
    height: 30px;
    width: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/loading.png');
    animation: bet-loading 3s linear infinite;
  }

  @keyframes bet-loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    75% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
}
</style>
