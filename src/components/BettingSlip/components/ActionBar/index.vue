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
    <div v-if="errorTips" class="error-tips">
      {{ errorTips }}
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
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import store from '@/store'
const errorTips = ref()
const errorTimer = ref()
const hitState = computed(() => store.state.betting.hitState)
const betsGolds = computed(() => store.getters['betting/betsGolds'])
const betsProfit = computed(() => store.getters['betting/betsProfit'])

const clear = () => {
  store.dispatch('betting/clearMarkets')
}
const buy = () => {
  store.dispatch('betting/marketBetting').catch((err: any) => {
    error(err || t('betting.errorTips'))
  })
}
const error = (err: string) => {
  errorTips.value = err
  clearTimeout(errorTimer.value)
  errorTimer.value = setTimeout(() => {
    errorTips.value = ''
  }, 3000)
}
</script>
<style lang="scss" scoped>
.action-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 38px 20px;

  .error-tips {
    position: absolute;
    left: 0;
    bottom: 120px;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background: rgba(0, 0, 0, 0.40);
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }

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
      height: auto;
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
