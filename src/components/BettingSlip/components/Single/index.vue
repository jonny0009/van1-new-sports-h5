<template>
  <div class="Single-wrap">
    <div class="remove" @click="remove">
      <van-icon name="cross" />
    </div>
    <div class="content">
      <div class="title">
        <SportsIcon :icon-src="marketInfo.gameType" />
        <div class="betting-name">{{ marketInfo.ratioName }}</div>
      </div>
      <div class="details">
        <div v-if="marketInfo.isChampion" class="play-name">{{ marketInfo.championType }}</div>
        <div v-else v-play="marketInfo" class="play-name"></div>
        <div v-if="marketInfo.isChampion" class="team-info">{{ $t('betting.champion') }}</div>
        <div v-else class="team-info">{{ marketInfo.homeTeam }} VS {{ marketInfo.awayTeam }}</div>
      </div>
      <div class="betting-odds">@<span v-points="marketInfo.ior"></span></div>
      <div v-if="mode === 1" class="action">
        <div ref="inputBtn" class="betting-slip-input" @click="inputTouch">
          <span class="currency"><van-icon name="balance-o" /></span>
          <div style="flex: 1 1 0%;"></div>
          <span class="amount" :class="{ selected: marketInfo.playOnlyId === editId }">{{ marketInfo.gold }}</span>
          <span v-show="marketInfo.playOnlyId === editId" class="cursor">|</span>
        </div>
      </div>
    </div>
    <div v-if="isCombo" class="combo-enable"></div>
    <div v-if="marketInfo.errorCode" class="error-popup">
      <div class="lock"></div>
      <div class="tips">赛事封单</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed, ref } from 'vue'
const inputBtn = ref()
const props = defineProps({
  marketInfo: {
    type: Object,
    default: () => { }
  }
})
const mode = computed(() => store.state.betting.mode)
const editId = computed(() => store.state.betting.editId)
const comboMarketPlayOnlyIds = computed(() => store.getters['betting/comboMarketPlayOnlyIds'])
const isCombo = computed(() => comboMarketPlayOnlyIds.value.includes(props.marketInfo.playOnlyId) && mode.value === 2)

const remove = () => {
  store.dispatch('betting/deleteMarket', props.marketInfo.playOnlyId)
}
const inputTouch = () => {
  store.dispatch('betting/setBoardShow', { status: true, playOnlyId: props.marketInfo.playOnlyId })
  setTimeout(() => {
    inputBtn.value.scrollIntoView({
      behavior: 'smooth'
    })
  })
}
console.log(props)
</script>
<style scoped lang="scss">
.Single-wrap {
  position: relative;
  display: flex;
  align-items: center;
  height: 178px;
  margin: 0 38px 10px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('@/assets/images/betting/single-bg.png');

  .error-popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;

    .lock {
      width: 44px;
      height: 54px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('@/assets/images/betting/lock.png');
    }

    .tips {
      margin: 5px;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 500;
    }
  }

  .remove {
    width: 76px;
    height: 178px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/single-close-bg.png');
  }

  .content {
    height: 178px;
    flex: 1;
    padding: 12px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .title {
      display: flex;
      align-items: center;

      .betting-name {
        margin-left: 8px;
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #000000;
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    .details {
      .play-name {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 500;
      }

      .team-info {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    .betting-odds {
      font-family: PingFangSC-Semibold;
      font-size: 30px;
      color: #7642FD;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .action {
      position: absolute;
      right: 10px;
      bottom: 10px;
      display: flex;
      justify-content: flex-end;

      .betting-slip-input {
        position: relative;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5px;
        padding-right: 11px;
        border-radius: 0.16rem;
        border: 2px solid #96A5AA;
        border-radius: 10px;
        background-color: #fff;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.8px;
        text-align: justify;
        font-weight: 600
      }

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
  }

  .combo-enable {
    width: 16px;
    height: 100%;
    background: #0BBA3E;
    border-radius: 0px 20px 20px 0px;
  }
}

@keyframes auto-opacity {
  0% {
    opacity: 1
  }

  to {
    opacity: 0
  }
}
</style>
