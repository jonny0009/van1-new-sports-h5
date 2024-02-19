<template>
  <div class="content">
    <div class="result-info">
      <div class="title">
        <SportsIcon class="sport-icon" :icon-src="result.gameType" />
        <div class="betting-name text-overflow">{{ result.ratioName }}</div>
      </div>
      <div class="details">
        <div v-if="result.isChampion" class="play-name text-overflow">{{ result.championType }}</div>
        <div v-else v-play="result" class="play-name text-overflow"></div>
        <div v-if="result.isChampion" class="team-info text-overflow">{{ $t('betting.champion') }}</div>
        <div v-else class="team-info text-overflow">{{ result.homeTeam }} VS {{ result.awayTeam }}</div>
      </div>
    </div>
    <div class="betting-odds">@<span v-points="result.ior"></span></div>
    <div class="order-state" :class="stateClass"></div>
  </div>
</template>
<script lang="ts" setup>
import { getOrderState } from '@/api/betting'
import { onBeforeMount, ref } from 'vue'
import { computed } from 'vue'
const props = defineProps({
  result: {
    type: Object,
    default: () => {}
  },
  stateClass: {
    type: String,
    default: ''
  }
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
const stateClass = computed(() => {
  if (props.result.errorCode) {
    return 'error'
  } else if (![1, 2].includes(+props.result.status)) {
    return 'accepting'
  }
  return 'check'
})

onBeforeMount(() => {
  console.log(props.result.betNo)
  getAcceptOrderStateTask()
  timer.value = setInterval(() => {
    getAcceptOrderStateTask()
  }, 3 * 1000)
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
.content {
  display: flex;
  align-items: center;
  width: 675px;
  height: 135px;
  background: #eff0f1;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;

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
      overflow: hidden;

      .sport-icon {
        color: var(--color-bet-sportstext);
      }
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
  }

  .betting-odds {
    width: 220px;
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: #7642fd;
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
</style>
