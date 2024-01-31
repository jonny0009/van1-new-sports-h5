<template>
  <div class="action-bar">
    <div class="bet-golds">
      <span class="title">{{ $t('betting.betGolds') }} ：</span>
      <span v-points="golds" class="value"></span>
    </div>
    <div class="bet-profit">
      <span class="title">{{ $t('betting.betProfit') }} ：</span>
      <span v-points="profit" class="value"></span>
    </div>

    <div class="confirm-button-wrap">
      <div class="login-tips">
        {{ $t('betting.loginTips') }}
      </div>
      <button v-debounce="login" type="button" class="confirm-button">
        {{ $t('betting.login') }}
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
import store from '@/store'
import router from '@/router'
const mode = computed(() => store.state.betting.mode)
const betsGolds = computed(() => store.getters['betting/betsGolds'])
const betsProfit = computed(() => store.getters['betting/betsProfit'])
const combosBetGolds = computed(() => store.getters['betting/combosBetGolds'])
const combosProfit = computed(() => store.getters['betting/combosProfit'])
const golds = computed(() => (mode.value === 1 ? betsGolds.value : combosBetGolds.value))
debugger
const profit = computed(() =>
  mode.value === 1 ? betsProfit.value * 1 + golds.value * 1 : combosProfit.value * 1 + golds.value * 1
)

const login = () => {
  router.push({
    name: 'Login'
  })
}
</script>
<style lang="scss" scoped>
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

.action-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 22px 38px 20px;

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
      color: var(--color-bet-iortext);
      letter-spacing: 0;
      font-weight: 600;
    }
  }
  .login-tips {
    margin-bottom: 30px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
  .confirm-button-wrap {
    width: 0 50px;
    margin-top: 100px;
    position: relative;

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
    }
  }
}
</style>
