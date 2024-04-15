<template>
  <transition :class="`animate__animated ${state ? 'animate__fadeOutLeft' : ''}`">
    <div class="Single-wrap">
      <div class="remove">
        <SvgIcon name="betting-close" class="betting-close" :class="{ fixed: error }" @click.stop="remove" z></SvgIcon>
      </div>
      <div class="content">
        <div class="title">
          <SportsIcon class="sport-icon" :icon-src="marketInfo.gameType" />
          <div class="betting-name text-overflow">
            {{ marketInfo.ratioMatch || marketInfo.ratioName }}
            <span class="ratio-tag" :class="marketInfo.ratioChange">{{ marketInfo.ratioTag }}</span>
            <span class="ratio-change" :class="marketInfo.ratioChange"></span>
          </div>
        </div>
        <div class="details">
          <div v-if="marketInfo.isChampion" class="play-name text-overflow">{{ marketInfo.championType }}</div>
          <div v-else v-play="marketInfo" class="play-name text-overflow"></div>
          <div v-if="marketInfo.isChampion" class="team-info text-overflow">{{ $t('betting.champion') }}</div>
          <div v-else class="team-info text-overflow">{{ marketInfo.homeTeam }} VS {{ marketInfo.awayTeam }}</div>
        </div>
        <div class="betting-odds" :class="marketInfo.iorChange">
          @<span v-points="marketInfo.ior"></span>
          <span class="ior-change" :class="marketInfo.iorChange"></span>
        </div>
        <div v-if="accountState && !marketInfo.iorChange && goldRule && !error" class="gold-tips">
          {{ $t('betting.goldTips', { min: marketInfo.goldMin, max: marketInfo.goldMax }) }}
          <div class="tips-arrow"></div>
        </div>
        <div v-if="accountState && !error" class="action">
          <div v-if="marketInfo.ratioChange" class="betting-slip-accept-button" @click="clearOddChange">
            {{ $t('betting.acceptRatios') }}
          </div>
          <div v-else-if="marketInfo.iorChange" class="betting-slip-accept-button" @click="clearIorChange">
            {{ $t('betting.acceptOdds') }}
          </div>
          <div v-else ref="inputBtn" class="betting-slip-input" :class="{ error: goldRule }" @click="inputTouch">
            <span class="currency"><van-icon name="balance-o" /></span>
            <div style="flex: 1 1 0%"></div>
            <span class="amount" :class="{ selected: marketInfo.playOnlyId === editId }">{{ marketInfo.gold }}</span>
            <span v-show="marketInfo.playOnlyId === editId" class="cursor">|</span>
          </div>
        </div>
      </div>
      <div v-if="isCombo" class="combo-enable"></div>
      <div v-if="error" class="error-popup">
        <div class="lock"></div>
        <div class="tips">{{ $t('betting.eventClosure') }}</div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed, ref, watch } from 'vue'
const inputBtn = ref()
const props = defineProps({
  marketInfo: {
    type: Object,
    default: () => {}
  },
  accountState: {
    type: Boolean,
    default: false
  }
})
const mode = computed(() => store.state.betting.mode)
const error = computed(() => {
  if (props.marketInfo.goldMax === '') {
    return false
  }
  return props.marketInfo.errorCode || props.marketInfo.goldMax * 1 === 0 || props.marketInfo.goldMin * 1 === 0
})
const editId = computed(() => store.state.betting.editId)
const comboMarketPlayOnlyIds = computed(() => store.getters['betting/comboMarketPlayOnlyIds'])
const isCombo = computed(() => comboMarketPlayOnlyIds.value.includes(props.marketInfo.playOnlyId) && mode.value === 2)
const goldRule = computed(() => {
  if (props.marketInfo.gold * 1 <= 0) {
    return false
  }
  if (
    props.marketInfo.gold * 1 > props.marketInfo.goldMax * 1 ||
    props.marketInfo.gold * 1 < props.marketInfo.goldMin * 1
  ) {
    return true
  }
  return false
})

watch(
  () => props.marketInfo.iorChange,
  () => {
    if (props.marketInfo.iorChange) {
      setTimeout(() => {
        clearIorChange()
      }, 5000)
    }
  }
)
watch(
  () => props.marketInfo.ratioChange,
  () => {
    if (props.marketInfo.ratioChange) {
      setTimeout(() => {
        clearOddChange()
      }, 5000)
    }
  }
)

const state = ref(false)
const remove = () => {
  state.value = true
  setTimeout(() => {
    store.dispatch('betting/deleteMarket', props.marketInfo.playOnlyId)
  }, 500)
}

const clearIorChange = () => {
  store.dispatch('betting/clearIorChange', props.marketInfo.playOnlyId)
}
const clearOddChange = () => {
  store.dispatch('betting/clearOddChange', props.marketInfo.playOnlyId)
}
const inputTouch = () => {
  store.dispatch('betting/setBoardShow', { status: true, playOnlyId: props.marketInfo.playOnlyId })
  setTimeout(() => {
    inputBtn.value.scrollIntoView({
      behavior: 'smooth'
    })
  })
}

defineExpose({
  remove
})
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
  background-color: #fff;

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
      color: #ffffff;
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
    background-color: var(--color-bet-removebg);
    border-radius: 20px 0 0 20px;

    .betting-close {
      font-size: 20px;

      &.fixed {
        color: #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        z-index: 99;
      }
    }
  }

  .content {
    height: 178px;
    flex: 1;
    padding: 12px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    background-color: var(--color-bet-contentbg);
    .title {
      display: flex;
      align-items: center;
      overflow: hidden;

      .sport-icon {
        font-size: 24px;
        font-weight: 500;
        color: var(--color-bet-sportstext);
      }

      .betting-name {
        display: flex;
        align-items: center;
        margin-left: 8px;
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: rgb(14, 61, 102);
        letter-spacing: 0;
        font-weight: 500;
        .ratio-tag {
          &.up {
            color: #0bba3e;
          }

          &.down {
            color: #fb0738;
          }
        }
        .ratio-change {
          width: 22px;
          height: 11px;
          margin-left: 5px;
          display: inline-block;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;

          &.up {
            background-image: url('@/assets/images/betting/up.png');
          }

          &.down {
            background-image: url('@/assets/images/betting/down.png');
          }
        }
      }
    }

    .details {
      overflow: hidden;

      .play-name {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: var(--color-bet-title);
        letter-spacing: 0;
        font-weight: 500;
      }

      .team-info {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: var(--color-bet-title);
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    .betting-odds {
      display: flex;
      align-items: center;
      font-family: PingFangSC-Semibold;
      font-size: 30px;
      color: var(--color-bet-iortext);
      letter-spacing: 1px;
      font-weight: 600;

      &.up {
        color: #0bba3e;
      }

      &.down {
        color: #fb0738;
      }

      .ior-change {
        width: 22px;
        height: 11px;
        margin-left: 5px;
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        &.up {
          background-image: url('@/assets/images/betting/up.png');
        }

        &.down {
          background-image: url('@/assets/images/betting/down.png');
        }
      }
    }

    .gold-tips {
      position: absolute;
      background: #fb0738;
      border-radius: 22px;
      padding: 5px 12px;
      right: 12px;
      bottom: 70px;
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
        border: 2px solid #96a5aa;
        border-radius: 10px;
        background-color: #fff;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.8px;
        text-align: justify;
        font-weight: 600;

        &.error {
          border: 2px solid rgba(251, 7, 56, 1);
        }
      }

      .betting-slip-accept-button {
        position: relative;
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: var(--color-bet-iorchangebg);
        color: #fff;
        border-radius: 12px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #ffffff;
        letter-spacing: 0.8px;
        text-align: center;
        font-weight: 500;
      }

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
  }

  .combo-enable {
    width: 16px;
    height: 100%;
    background: #0bba3e;
    border-radius: 0px 20px 20px 0px;
  }
}

@keyframes auto-opacity {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
