<template>
  <div class="action-bar">
    <div class="bet-golds">
      <span class="title">{{ $t('betting.betGolds') }} ：</span>
      <span class="value">{{ betsGolds }}</span>
    </div>
    <div class="bet-profit">
      <span class="title">{{ $t('betting.betProfit') }} ：</span>
      <span class="value">{{ betsProfit }}</span>
    </div>
    <div class="confirm-button-wrap">
      <SvgIcon v-if="hitState === 1" name="betting-trash" class="delete-btn" @click="clear"></SvgIcon>
      <div v-if="hitState === 1" v-debounce="buy" class="confirm-button">{{ $t('betting.buy') }}</div>
      <div v-else class="confirm-button">
        <span class="loading-icon"></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import store from '@/store'
const hitState = computed(() => store.state.betting.hitState)
const betsGolds = computed(() => store.getters['betting/betsGolds'])
const betsProfit = computed(() => store.getters['betting/betsProfit'])

const clear = () => {
  store.dispatch('betting/clearMarkets')
}
const buy = () => {
  store.dispatch('betting/marketBetting')
}

</script>
<style lang="scss" scoped>
.action-bar {
  display: flex;
  flex-direction: column;
  padding: 50px 0 20px;

  .bet-golds {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #546371;
      letter-spacing: 0;
      font-weight: 500;
    }

    .value {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #546371;
      letter-spacing: 0;
      font-weight: 500;
    }
  }

  .bet-profit {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #546371;
      letter-spacing: 0;
      font-weight: 500;
    }

    .value {
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: #7642FD;
      letter-spacing: 0;
      font-weight: 600;
    }
  }

  .confirm-button-wrap {
    width: 0 50px;
    margin-top: 150px;
    position: relative;

    .delete-btn {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 37px;
    }

    .confirm-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 80px;
      margin: auto;
      text-align: center;
      background-color: #7440fe;
      color: #fff;
      border-radius: 40px;

      .loading-icon {
        display: inline-block;
        height: 60px;
        width: 60px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('@/assets/images/betting/loading.png');
        animation: bet-loading 3s linear infinite;
      }
    }
  }
}

@keyframes bet-loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  25% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  75% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}
</style>
