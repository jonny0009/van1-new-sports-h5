<template>
  <div v-if="mode === 2" ref="inputBtn" class="combo-input betting-slip-input" @click="inputTouch">
    <span class="currency"><van-icon name="balance-o" /></span>
    <div style="flex: 1 1 0%;"></div>
    <span class="amount" :class="{ selected:boardShow }">{{ comboAmount }}</span>
    <span v-show="boardShow" class="cursor">|</span>
  </div>
  <div class="action-bar">
    <div class="bet-golds">
      <span class="title">{{ $t('betting.betGolds') }} ：</span>
      <span v-points="golds" class="value"></span>
    </div>
    <div class="bet-profit">
      <span class="title">{{ $t('betting.betProfit') }} ：</span>
      <span v-points="profit" class="value"></span>
    </div>
    <div v-if="errorTips" class="error-tips">
      {{ errorTips }}
    </div>
    <div class="confirm-button-wrap">
      <SvgIcon v-if="hitState === 1" name="betting-trash" class="delete-btn" @click="clear"></SvgIcon>
      <button
        v-if="hitState === 1"
        v-debounce="buy"
        type="button"
        class="confirm-button"
        :disabled="bettingState"
      >
        {{ $t('betting.buy') }}
      </button>
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
const boardShow = computed(() => store.state.betting.boardShow)
const hitState = computed(() => store.state.betting.hitState)
const mode = computed(() => store.state.betting.mode)
const comboAmount = computed(() => store.state.betting.comboAmount)
const betsGolds = computed(() => store.getters['betting/betsGolds'])
const betsProfit = computed(() => store.getters['betting/betsProfit'])
const combosBetGolds = computed(() => store.getters['betting/combosBetGolds'])
const combosProfit = computed(() => store.getters['betting/combosProfit'])
const effectiveMarkets = computed(() => store.getters['betting/effectiveMarkets'])
const comboMarkets = computed(() => store.getters['betting/comboMarkets'])
const golds = computed(() => mode.value === 1 ? betsGolds.value : combosBetGolds.value)
const profit = computed(() => mode.value === 1 ? betsProfit.value : combosProfit.value)

const bettingState = computed(() => {
  if (mode.value === 1) {
    return effectiveMarkets.value.length === 0
  }
  return comboMarkets.value.length <= 1 || !profit.value
})

const clear = () => {
  store.dispatch('betting/clearMarkets')
}
const buy = () => {
  if (mode.value === 1) {
    store.dispatch('betting/marketBetting').catch((err: any) => {
      error(err || t('betting.errorTips'))
    })
  } else {
    store.dispatch('betting/comboMarketBetting').catch((err: any) => {
      error(err || t('betting.errorTips'))
    })
    store.dispatch('user/pendingOrder')
  }
}
const error = (err: string) => {
  errorTips.value = err
  clearTimeout(errorTimer.value)
  errorTimer.value = setTimeout(() => {
    errorTips.value = ''
  }, 3000)
}
const inputBtn = ref()
const inputTouch = () => {
  store.dispatch('betting/setBoardShow', { status: true })
  setTimeout(() => {
    inputBtn.value.scrollIntoView({
      behavior: 'smooth'
    })
  })
}

</script>
<style lang="scss" scoped>
@keyframes auto-opacity {
  0% {
    opacity: 1
  }

  to {
    opacity: 0
  }
}

.combo-input {
  display: flex;
  align-items: center;
  width: 676px;
  height: 50px;
  margin: 20px auto 0;
  border: 2px solid rgba(118, 66, 253, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 11px;
  background-color: #fff;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #000000;
  letter-spacing: 0.8px;
  text-align: justify;
  font-weight: 600 ;
  .amount {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0.8px;
    text-align: justify;
    font-weight: 600;

    &.selected {
      color: #dfe4e5;
    }
  }

  .cursor {
    position: relative;
    right: -4px;
    top: -3px;
    animation: auto-opacity .5s linear infinite alternate;
  }
}

.action-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 22px 38px 20px;

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
      border: none;

      &:disabled {
        opacity: 0.7;
      }

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
