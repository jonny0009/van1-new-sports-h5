<template>
  <div v-if="mode === 2" ref="inputBtn" class="combo-input betting-slip-input" @click="inputTouch">
    <span class="currency"><van-icon name="balance-o" /></span>
    <div style="flex: 1 1 0%"></div>
    <span class="amount" :class="{ selected: boardShow }">{{ comboAmount }}</span>
    <span v-show="boardShow" class="cursor">|</span>
    <div v-if="goldRule" class="gold-tips">
      {{ $t('betting.goldTips', { min: combos.goldMin, max: combos.goldMax }) }}
      <div class="tips-arrow"></div>
    </div>
  </div>
  <div class="action-bar">
    <div class="bet-golds">
      <span class="title">{{ $t('betting.betGolds') }} ：</span>
      <div>
        <CurrencyComp class-name="mr3 fs24" />
        <span v-points="golds" class="value"></span>
      </div>
    </div>
    <div class="bet-profit">
      <span class="title">{{ $t('betting.betProfit') }} ：</span>
      <div>
        <CurrencyComp class-name="mr3  color1" />
        <span v-points="profit" class="value"></span>
      </div>
    </div>
    <div v-if="errorTips" class="error-tips">
      {{ errorTips }}
    </div>
    <div class="confirm-button-wrap">
      <SvgIcon v-if="hitState === 1" name="betting-trash" class="delete-btn" @click="clear"></SvgIcon>
      <button v-if="hitState === 1" v-debounce="buy" type="button" class="confirm-button" :disabled="bettingState">
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
import CurrencyComp from '@/components/Currency'

const errorTips = ref()
const errorTimer = ref()
const boardShow = computed(() => store.state.betting.boardShow)
const hitState = computed(() => store.state.betting.hitState)
const mode = computed(() => store.state.betting.mode)
const combos = computed(() => store.state.betting.combos[0])
const comboAmount = computed(() => store.state.betting.comboAmount)
const betsGolds = computed(() => store.getters['betting/betsGolds'])
const betsProfit = computed(() => store.getters['betting/betsProfit'])
const combosBetGolds = computed(() => store.getters['betting/combosBetGolds'])
const combosProfit = computed(() => store.getters['betting/combosProfit'])
const effectiveMarkets = computed(() => store.getters['betting/effectiveMarkets'])
const comboMarkets = computed(() => store.getters['betting/comboMarkets'])
const golds = computed(() => (mode.value === 1 ? betsGolds.value : combosBetGolds.value))
const profit = computed(() => {
  return mode.value === 1 ? betsProfit.value * 1 + golds.value * 1 : combosProfit.value * 1 + golds.value * 1
})
const goldRule = computed(() => {
  if (comboAmount.value * 1 <= 0 || mode.value !== 2) {
    return false
  }
  if (
    combos.value &&
    (combos.value.goldMin * 1 > comboAmount.value * 1 || combos.value.goldMax * 1 < comboAmount.value * 1)
  ) {
    return true
  }
  return false
})
const bettingState = computed(() => {
  if (mode.value === 1) {
    return effectiveMarkets.value.length === 0
  }
  return comboMarkets.value.length <= 1 || !profit.value || goldRule.value
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
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.gold-tips {
  position: absolute;
  background: #fb0738;
  border-radius: 22px;
  padding: 5px 12px;
  right: 12px;
  bottom: 60px;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.67px;
  text-align: justify;
  font-weight: 600;

  .tips-arrow {
    position: absolute;
    margin-bottom: 6px;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 6px;
    bottom: -6px;
    left: 0;
    right: 0;
    margin: auto;
    border-top-color: #fb0738;
    border-bottom-width: 0;
  }
}

.combo-input {
  position: relative;
  display: flex;
  align-items: center;
  width: 676px;
  height: 50px;
  margin: 20px auto 0;
  border: 2px solid var(--color-bet-combomoneyborder);
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
  font-weight: 600;

  .amount {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0.8px;
    text-align: justify;
    font-weight: 600;
  }

  .cursor {
    position: relative;
    right: -4px;
    top: -3px;
    animation: auto-opacity 0.5s linear infinite alternate;
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
    background: rgba(0, 0, 0, 0.4);
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #ffffff;
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
      color: #88a6bb;
      letter-spacing: 0;
      font-weight: 500;
    }

    .value {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: rgb(14, 61, 102);
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
      color: #88a6bb;
      letter-spacing: 0;
      font-weight: 500;
    }

    .value {
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: var(--color-bet-iortext);
      letter-spacing: 0;
      font-weight: 600;
    }
  }

  .confirm-button-wrap {
    width: 0 50px;
    margin-top: 100px;
    position: relative;

    .delete-btn {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 37px;
      height: auto;
      color: var(--color-bet-deletetext);
    }

    .confirm-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 80px;
      margin: auto;
      text-align: center;
      background-color: var(--color-bet-confirmbg);
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
</style>
