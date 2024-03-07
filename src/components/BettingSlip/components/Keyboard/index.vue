<template>
  <van-popup :show="boardShow" class="betting-slip-keyboard" position="bottom" :overlay="false">
    <div class="keyboard-input-header">
      <div class="quick-input-list">
        <div v-for="key in quickKeys" :key="key" class="quick-input-item" @click="quickEntry(key)">
          <div class="text">{{ key }}</div>
        </div>
      </div>
      <div class="seize finish" @click="close">{{ $t('betting.finish') }}</div>
    </div>
    <div class="keyboard-input-body">
      <div v-for="key in keys" :key="key" class="input-item" @click="inputEntry(key)">
        <span v-if="key === 'back'" class="back" :style="{ backgroundImage: `url(${deleteBg})` }"></span>
        <span v-else>{{ key }}</span>
      </div>
    </div>
    <div class="odd-change-tips">
      <span
        class="state-icon"
        :class="oddChangesState ? 'checked' : 'close'"
        @click="oddChangesState = !oddChangesState"
      ></span>
      <span class="tips">{{ $t('betting.oddChangTips') }}</span>
      <span class="tips-icon"></span>
    </div>
  </van-popup>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed, ref } from 'vue'
import delete0 from '@/assets/images/betting/delete-left0.png?url'
import deleteBlue from '@/assets/images/betting/delete-left1.png?url'
const quickKeys = ref([1, 10, 50, 100])
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', 'back']
const mode = computed(() => store.state.betting.mode)
const boardShow = computed(() => store.state.betting.boardShow)
const theme = computed(() => store.state.app.theme)

const deleteBg = computed(() => {
  if (theme.value === 'blue') {
    return deleteBlue
  }
  return delete0
})
const oddChangesState = computed({
  get() {
    return store.state.betting.oddChangesState
  },
  set(value: any) {
    store.dispatch('betting/setOddChangesState', value)
  }
})
const quickEntry = (amount: any) => {
  if (mode.value === 1) {
    store.dispatch('betting/changeSingleAmount', amount)
  } else {
    store.dispatch('betting/changeComboAmount', amount)
  }
  close()
}
const inputEntry = (amount: any) => {
  if (mode.value === 1) {
    store.dispatch('betting/inputSingleAmount', amount)
  } else {
    store.dispatch('betting/inputComboAmount', amount)
  }
}
const close = () => {
  store.dispatch('betting/setBoardShow', { status: false })
}
</script>
<style scoped lang="scss">
.betting-slip-keyboard {
  box-shadow: 0px -3px 9px 0px rgba(55, 54, 54, 0.5);
  background-color: rgb(244, 245, 250);
  .keyboard-input-header {
    height: 108px;
    padding: 0 37px;
    display: flex;
    align-items: center;
  }

  .seize {
  }

  .quick-input-list {
    padding-left: 36px;
    padding-right: 44px;
    flex: 1;
    display: flex;
    justify-content: space-between;

    .quick-input-item {
      width: 117px;
      height: 50px;

      .text {
        height: 100%;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0;
        text-align: center;
        font-weight: 500;
      }
    }
  }

  .finish {
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: var(--color-bet-keyboardtext);
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
  }
}

.keyboard-input-body {
  height: 432px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .input-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PingFangSC-Semibold;
    font-size: 50px;
    color: var(--color-bet-keyboardtext);
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;

    .back {
      width: 36px;
      height: 30px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}

.odd-change-tips {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  .state-icon {
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &.checked {
      background-image: url('@/assets/images/betting/check-state.png');
    }
    &.close {
      background-image: url('@/assets/images/betting/closegray.png');
    }
  }

  .state-icon {
    width: 23px;
    height: 23px;
  }
  .tips-icon {
    margin-left: 5px;
    width: 23px;
    height: 23px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/info.png');
  }

  .tips {
    display: inline-block;
    margin: 0 5px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: var(--color-bet-keyboardtext);
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
}
</style>
