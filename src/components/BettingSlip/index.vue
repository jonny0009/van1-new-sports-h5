<template>
  <div class="betting-slip-bg" :class="{ open }" @click="toogle"></div>
  <BallEffect></BallEffect>
  <div class="betting-slip-popup" :class="{ open }">
    <div class="betting-slip-header" @click="toogle" :class="{ selected: userConfig.acceptAll === 1 }">
      <div class="bet-header-left">
        <span class="bet-icon"></span>
        <span class="bet-title">{{ $t('betting.title') }}</span>
        <span v-if="markets.length" class="num">
          {{ markets.length }}
        </span>
        <span class="bet-arrow" :class="{ open }"></span>
      </div>
      <div v-if="open" class="bet-switch-wrap">
        <span class="label text-overflow">{{ $t('betting.ratioChangTips') }}</span>
        <van-switch
          v-model="userConfig.acceptAll"
          :size="20"
          active-color="#fff"
          :inactive-color="inactiveColor"
          class="bet-ior-switch"
          :active-value="1"
          :inactive-value="0"
          @change="radioChange"
          @click.stop
        >
          <template #node>
            <div class="icon-wrapper" :style="{ color: checkColor }">
              <SvgIcon v-if="userConfig.acceptAll" name="betting-check" class="accept-ior" />
            </div>
          </template>
        </van-switch>
      </div>
      <div v-else class="bet-all-ior">@{{ betsProfit }}</div>
    </div>
    <div class="betting-slip-container" :class="{ open }">
      <div class="bet-tab">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: type === item.type }"
          class="bet-item"
          @click="changeType(item.type)"
        >
          {{ item.title }}
          <span v-if="item.type === 3 && pendingNum.length" class="bet-num">{{ pendingNum.length || 0 }}</span>
        </div>
        <div
          class="tab-line"
          :style="{
            left: tableLeft
          }"
        ></div>
      </div>
      <Nothing v-if="results.length === 0 && markets.length === 0 && type !== 3"></Nothing>
      <div
        v-else-if="type < 3 && markets.length && results.length === 0"
        class="bet-content"
        :style="{
          paddingBottom: boardShow ? '175px' : '8px'
        }"
      >
        <div v-if="mode === 2" class="betting-slip-combo-header">
          <div class="up-betting-combo">
            <div class="text">{{ $t('betting.combos', { num: comboMarkets.length }) }}</div>
            <div class="icons">
              <SportsIcon
                v-for="(item, index) in comboMarkets"
                :key="index"
                class="sport-icon"
                :icon-src="item.gameType"
              />
            </div>
          </div>
          <div class="cur-odds">@<span v-points="combosIor"></span></div>
        </div>
        <template v-if="mode === 1">
          <Singles v-for="market in markets" :key="market.playOnlyId" :account-state="true" :market-info="market">
          </Singles>
        </template>
        <Parlay v-else :markets="parlayMarkets"></Parlay>
        <Anonymity v-if="isAnonymity"></Anonymity>
        <ActionBar v-else-if="open" />
      </div>
      <Result v-if="type !== 3 && results.length"></Result>
      <div v-if="type === 3" class="bet-content bet-pending">
        <Pending></Pending>
      </div>
    </div>
  </div>
  <Keyboard v-if="type !== 3"></Keyboard>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import BallEffect from './components/BallEffect/index.vue'
import Nothing from './components/Nothing/index.vue'
import Parlay from './components/Parlay/index.vue'
import Singles from './components/Single/index.vue'
import Result from './components/Result/index.vue'
import ActionBar from './components/ActionBar/index.vue'
import Anonymity from './components/Anonymity/index.vue'
import Keyboard from './components/Keyboard/index.vue'
import Pending from './components/Pending/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import store from '@/store'
const open = ref(false)
const type = ref(1)
const tabs = ref([
  {
    type: 1,
    title: t('betting.single')
  },
  {
    type: 2,
    title: t('betting.parlay')
  },
  {
    type: 3,
    title: t('betting.pending')
  }
])
const tableLeft = computed(() => {
  return `calc(100% / 3 * ${type.value - 1} + (100% / 3 - 27vw) / 2 )`
})
const theme = computed(() => store.state.app.theme)

const inactiveColor = computed(() => {
  if (theme.value === 'blue') {
    return '#a3d0fe'
  }
  return '#baa0fe'
})
const checkColor = computed(() => {
  if (theme.value === 'blue') {
    return 'betting-check-blue'
  }
  return 'betting-check'
})
const pendingNum = computed(() => store.state.user.pendingData)
const isOne = computed(() => store.state.betting.isOne)
const mode = computed(() => store.state.betting.mode)
const boardShow = computed(() => store.state.betting.boardShow)
const markets = computed(() => store.state.betting.markets)
const parlayMarkets = computed(() => store.state.betting.comboMarkets)
const results = computed(() => store.state.betting.results)
const betsProfit = computed(() => store.getters['betting/betsProfit'])
const comboMarkets = computed(() => store.getters['betting/comboMarkets'])
const combosIor = computed(() => store.getters['betting/combosIor'])
const userConfig = computed(() => store.state.user.userConfig)
const isAnonymity = computed(() => store.state.user.isAnonymity)
store.dispatch('betting/setMode', 1)
const emit = defineEmits(['close'])
watch(
  () => isOne.value,
  () => {
    if (isOne.value) {
      open.value = true
      bodyOverflow()
    }
  }
)
watch(
  () => markets.value.length,
  () => {
    if (!isOne.value) {
      hitTimer()
    }
  }
)
watch(
  () => open.value,
  () => {
    if (open.value) {
      hitTimer()
    } else {
      store.dispatch('betting/setBoardShow', { status: false })
      store.dispatch('betting/clearResult')
      store.dispatch('betting/clearComboMarkets')
    }
  }
)
const toogle = () => {
  open.value = !open.value
  emit('close', open.value)
  bodyOverflow()
}

const bodyOverflow = () => {
  if (open.value) {
    document.body.classList.add('popup-overflow-hidden')
    document.body.ontouchmove = function (e) {
      e.preventDefault()
    }
  } else {
    document.body.classList.remove('popup-overflow-hidden')
    document.body.ontouchmove = function () {}
  }
}
bodyOverflow()
const changeType = (mode: any) => {
  type.value = mode
  store.dispatch('betting/setMode', mode)
  store.dispatch('betting/setHitState', 1)
  store.dispatch('betting/clearResult')
  hitTimer()
}
const radioChange = (acceptAll: number) => {
  store.dispatch('user/configSettingNew', { acceptAll })
}
const timer = ref()
const hitTimer = () => {
  if (open.value) {
    if (mode.value === 3) {
      store.dispatch('user/pendingOrder')
    }
    if (mode.value === 2) {
      store.dispatch('betting/comboMarketHit')
    }
    if (mode.value === 1) {
      store.dispatch('betting/marketHit')
    }
  }
  clearInterval(timer.value)
  timer.value = setInterval(() => {
    if (open.value && mode.value <= 3) {
      if (mode.value === 1) {
        store.dispatch('betting/marketHit')
      }
      if (mode.value === 2) {
        store.dispatch('betting/comboMarketHit')
      }
      if (mode.value === 3) {
        store.dispatch('user/pendingOrder')
      }
    }
  }, 10 * 1000)
}
hitTimer()
defineExpose({
  open
})
</script>
<style lang="scss" scoped>
.betting-slip-bg {
  display: none;
  z-index: 288;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  margin: auto;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);

  &.open {
    display: block;
    opacity: 1;
    transition: all 0.3s;
  }
}

.betting-slip-popup {
  max-height: calc(100% - 110px - 88px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #fff;
  z-index: 290;
  display: flex;
  flex-direction: column;
  transform: translateY(100%) translateY(-96px);
  transition: transform 0.3s;
  border-radius: 10px 10px 0px 0px;

  &.open {
    transform: translateY(0px);
  }
}

.betting-slip-header {
  flex-shrink: 0;
  height: 96px;
  padding-left: 40px;
  padding-right: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  background-image: initial;
  background-color: var(--color-linear-gradient-2);
  &.selected {
    background-color: initial;
    background-image: linear-gradient(270deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
  }

  .bet-header-left {
    display: flex;
    align-items: center;
  }

  .bet-icon {
    display: inline-block;
    width: 30px;
    height: 32px;
    color: #ffffff;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/note.png');
  }

  .bet-title {
    margin-left: 22px;
    margin-right: 10px;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }

  .num {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 50%;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: var(--color-bet-text-1);
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }

  .bet-arrow {
    display: inline-block;
    width: 25px;
    height: 14.2px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/arrow-up.png');
    color: #ffffff;

    &.open {
      transform: rotate(-180deg);
    }
  }

  .bet-all-ior {
    font-family: Arial-BoldMT;
    font-size: 32px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 700;
  }

  .bet-switch-wrap {
    display: flex;
    align-items: center;
    overflow: hidden;

    .label {
      flex: 1;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
    }

    .bet-ior-switch {
      --van-switch-width: 80px;
      --van-switch-height: 44px;
      --van-switch-node-size: 40px;
      --van-switch-ior-size: 30px;

      margin-left: 10px;

      :deep(.van-switch__node) {
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }

    .icon-wrapper {
      width: 100%;
      height: 100%;
      background-color: var(--color-bet-iorbg-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .accept-ior {
        width: var(--van-switch-ior-size);
        height: var(--van-switch-ior-size);
        color: #fff;
      }
    }
  }
}

.betting-slip-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  opacity: 0;
  transition: opacity 0.3s;
  overflow-y: auto;
  overflow-x: hidden;

  &.open {
    opacity: 1;
  }

  .bet-tab {
    flex-shrink: 0;
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;

    .bet-item {
      flex: 1;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: var(--color-bet-tabtext-1);
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
      position: relative;

      .bet-num {
        display: inline-block;
        font-family: PingFangSC-Medium;
        font-size: 23px;
        color: #ffffff;
        background-color: var(--color-bet-iortext);
        letter-spacing: 0;
        text-align: center;
        font-weight: 500;
        width: 35px;
        height: 38px;
        line-height: 40px;
        border-radius: 50%;
        position: absolute;
        top: -15px;
        right: 45px;
      }

      &.active {
        color: var(--color-bet-tabtext-2);
      }
    }

    .tab-line {
      position: absolute;
      bottom: 0;
      height: 6px;
      left: 0;
      background-color: var(--color-text-5);
      width: 27vw;
      transition: all 0.3s;
      border-radius: 3px;
    }
  }

  .bet-content {
    flex: 1;
    padding: 20px 0;
    overflow: auto;
    transition: height 0.3s;
    overscroll-behavior: contain;

    .betting-slip-combo-header {
      margin: 20px 38px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .up-betting-combo {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .sport-icon {
          color: var(--color-bet-sportstext);
        }
      }

      .cur-odds {
        font-family: PingFangSC-Semibold;
        font-size: 30px;
        color: var(--color-bet-iortext);
        letter-spacing: 0;
        font-weight: 600;
      }
    }
  }
  .bet-pending {
    padding: 0 0;
  }
}
</style>
