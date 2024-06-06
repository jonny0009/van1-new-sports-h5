<template>
  <div class="result-item">
    <div class="title" v-if="isPending">
      <span class="state-icon accepting"></span>
      {{ $t('betting.orderPending') }}
    </div>
    <div class="title" v-else>
      <span class="state-icon" :class="`${isError ? 'error' : 'check'}`"></span>
      {{ isError ? $t('betting.orderError') : $t('betting.orderCheck') }}
    </div>
    <div class="content">
      <div class="result-info">
        <div class="title">
          <div class="betting-name">{{ $t('betting.combos', { num: result.count }) }}</div>
        </div>
        <div class="details">
          <SportsIcon
            v-for="(item, index1) in result.list"
            :key="index1"
            class="sport-icon"
            :icon-src="item.gameType"
          />
        </div>
      </div>
      <div class="betting-odds">@<span v-points="result.ior"></span></div>
      <div class="order-state accepting" v-if="isPending"></div>
      <div class="order-state" :class="`${isError ? 'error' : 'check'}`" v-else></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getOrderState } from '@/api/betting'
import { computed, onBeforeMount, ref } from 'vue'
const props = defineProps({
  result: {
    type: Object,
    default: () => {}
  }
})

const isPending = computed(() => {
  return ![1, 2].includes(props.result.status * 1)
})
const isError = computed(() => {
  return [2].includes(props.result.status * 1) || props.result.errorCode
})

const stateMap: any = {
  PRE_HAND: -1,
  CONFIRM: 0,
  PROCESS: 1,
  WIN: 2,
  LOSE: 3,
  TIE: 4,
  CANCEL: 5,
  REFUND: 6,
  FAIL: 7
}
const timer: any = ref()
onBeforeMount(() => {
  getAcceptOrderStateTask()
  timer.value = setInterval(() => {
    getAcceptOrderStateTask()
  }, 5 * 1000)
})
const getAcceptOrderStateTask = async () => {
  if (!(![1, 2].includes(+props.result.status) && !props.result.errorCode)) {
    clearInterval(timer.value)
    return false
  }
  const res: any = await getOrderState({
    orderIds: [props.result.betNo]
  })
  const { code, data } = res
  if (code === 200 && Array.isArray(data) && data.length) {
    const resultItem: any = data[0]
    let status = stateMap[resultItem.state]
    let errorCode = resultItem.errorCode
    if ([5, 6, 7].includes(status)) {
      errorCode = 'errorCode'
      status = '2'
    }
    props.result.status = status
    props.result.errorCode = errorCode
  }
}
</script>
<style scoped lang="scss">
.result-item {
  margin-bottom: 15px;

  .title {
    margin: 10px 0;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 500;

    .state-icon {
      display: inline-block;
      width: 23px;
      height: 23px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-right: 5px;

      &.check {
        background-image: url('@/assets/images/betting/check-state.png');
      }
      &.accepting {
        background-image: url('@/assets/images/betting/accepting-state.png');
      }
      &.error {
        background-image: url('@/assets/images/betting/close-state.png');
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    width: 675px;
    height: 135px;
    background: #eff0f1;
    border-radius: 20px;
    overflow: hidden;

    .match-team-logo {
      position: relative;
      width: 72px;
      height: 72px;
    }

    .result-info {
      flex: 1;
      padding: 10px 20px;
      overflow: hidden;

      .title {
        display: flex;
        align-items: center;

        .betting-name {
          font-family: PingFangSC-Medium;
          font-size: 28px;
          color: #000000;
          letter-spacing: 0;
          font-weight: 500;
        }
      }

      .details {
        .sport-icon {
          font-size: 24px;
          font-weight: 500;
          color: var(--color-bet-sportstext);
        }

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
    }

    .betting-odds {
      width: 220px;
      font-family: PingFangSC-Semibold;
      font-size: 30px;
      color: var(--color-bet-iortext);
      letter-spacing: 1px;
      text-align: center;
      font-weight: 600;
    }

    .order-state {
      width: 16px;
      height: 100%;

      &.check {
        background: #0bba3e;
      }
      &.accepting {
        background: #ff9a00;
      }

      &.error {
        background: #fb0738;
      }
    }
  }
}
</style>
