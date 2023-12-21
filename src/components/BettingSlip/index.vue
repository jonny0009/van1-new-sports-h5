<template>
  <div class="betting-slip-bg" :class="{ open }" @click="toogle"></div>
  <BallEffect></BallEffect>
  <div class="betting-slip-popup" :class="{ open }">
    <div class="betting-slip-header" @click="toogle">
      <div class="bet-header-left">
        <span class="bet-icon"></span>
        <span class="bet-title">{{ $t('betting.title') }}</span>
        <span v-if="markets.length" class="num">
          {{ markets.length }}
        </span>
        <span class="bet-arrow" :class="{ open }"></span>
      </div>
      <div v-if="open" class="bet-switch-wrap">
        <span class="label">{{ $t('betting.ratioChangTips') }}</span>
        <van-switch
          v-model="userConfig.acceptAll"
          :size="20"
          active-color="#fff"
          inactive-color="#baa0fe"
          class="bet-ior-switch"
          :active-value="1"
          :inactive-value="0"
          @change="radioChange"
          @click.stop
        >
          <template #node>
            <div class="icon-wrapper">
              <SvgIcon v-if="userConfig.acceptAll" name="betting-check" />
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
        </div>
        <div
          class="tab-line"
          :style="{
            left: tableLeft
          }"
        ></div>
      </div>
      <Nothing v-if="results.length === 0 && markets.length === 0"></Nothing>
      <div
        v-else-if="type < 3 && markets.length"
        class="bet-content"
        :style="{
          paddingBottom: boardShow ? '175px' : '8px'
        }"
      >
        <Singles v-for="( market, index ) in markets " :key="index" :market-info="market"></Singles>
        <ActionBar />
      </div>
      <Result v-if="results.length && markets.length === 0"></Result>
    </div>
  </div>
  <span v-play="{ gameType: 'FT', playType: 'R' }"></span>
  <Keyboard></Keyboard>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import BallEffect from './components/BallEffect/index.vue'
import Nothing from './components/Nothing/index.vue'
import Singles from './components/Single/index.vue'
import Result from './components/Result/index.vue'
import ActionBar from './components/ActionBar/index.vue'
import Keyboard from './components/Keyboard/index.vue'
import store from '@/store'
const open = ref(false)
const type = ref(1)
const tabs = ref([
  {
    type: 1,
    title: '单关'
  },
  {
    type: 2,
    title: '串关'
  },
  {
    type: 3,
    title: '进行中'
  }
])
const tableLeft = computed(() => {
  return `calc(100% / 3 * ${type.value - 1} + (100% / 3 - 27vw) / 2 )`
})
const isOne = computed(() => store.state.betting.isOne)
const boardShow = computed(() => store.state.betting.boardShow)
const markets = computed(() => store.state.betting.markets)
const results = computed(() => store.state.betting.results)
const betsProfit = computed(() => store.getters['betting/betsProfit'])

const userConfig = computed(() => store.state.user.userConfig)
watch(() => isOne.value, () => {
  if (isOne.value) {
    open.value = true
  }
})
watch(() => open.value, () => {
  if (!open.value) {
    store.dispatch('betting/setBoardShow', { status: false })
  }
})
const toogle = () => {
  open.value = !open.value
}
const changeType = (mode: any) => {
  type.value = mode
  store.dispatch('betting/setMode', mode)
  store.dispatch('betting/setHitState', 1)
  store.dispatch('betting/clearResult')
}
const radioChange = (acceptAll: number) => {
  store.dispatch('user/configSettingNew', { acceptAll })
}
const timer = ref()
store.dispatch('betting/marketHit')
timer.value = setInterval(() => {
  if (open.value) {
    store.dispatch('betting/marketHit')
  }
}, 10 * 1000)
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
  background-color: rgba(0, 0, 0, .3);

  &.open {
    display: block;
    opacity: 1;
    transition: all .3s;
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
  transform: translateY(100%) translateY(-185px);
  transition: transform .3s;
  border-radius: 10px 10px 0px 0px;

  &.open {
    transform: translateY(-88px);
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
  background-image: linear-gradient(270deg, #9C10FE 0%, #7541FD 100%);
  border-radius: 10px 10px 0px 0px;

  .bet-header-left {
    display: flex;
    align-items: center;
  }

  .bet-icon {
    display: inline-block;
    width: 30px;
    height: 32px;
    color: #FFFFFF;
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
    color: #FFFFFF;
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
    color: #7642FD;
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
    color: #FFFFFF;

    &.open {
      transform: rotate(-180deg);
    }
  }

  .bet-all-ior {
    font-family: Arial-BoldMT;
    font-size: 32px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 700;
  }

  .bet-switch-wrap {
    display: flex;
    align-items: center;

    .label {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
    }

    .bet-ior-switch {
      margin-left: 10px;
    }
    .icon-wrapper{
      color: #fff;
    }
  }
}

.betting-slip-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  opacity: 0;
  transition: opacity .3s;
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
      color: #919191;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;

      &.active {
        color: #000000;
      }

    }

    .tab-line {
      position: absolute;
      bottom: 0;
      height: 6px;
      left: 0;
      background-color: #000;
      width: 27vw;
      transition: all .3s;
      border-radius: 3px;
    }
  }

  .bet-content {
    flex: 1;
    padding: 20px 0;
    overflow: auto;
    transition: height .3s;
    overscroll-behavior: contain;
  }

}
</style>
