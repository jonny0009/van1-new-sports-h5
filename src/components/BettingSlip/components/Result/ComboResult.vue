<template>
  <div class="result-page">
    <div v-for="(result, index) in results" :key="index" class="result-item">
      <div class="title">
        <span class="state-icon" :class="`${result.errorCode ? 'error' : 'check'}`"></span>
        {{ result.errorCode ? $t('betting.orderError') : $t('betting.orderCheck') }}
      </div>
      <div class="content">
        <div class="result-info">
          <div class="title">
            <div class="betting-name">{{ $t('betting.combos', { num: result.count }) }}</div>
          </div>
          <div class="details">
            <SportsIcon v-for="(item, index1) in result.list" :key="index1" :icon-src="item.gameType" />
          </div>
        </div>
        <div class="betting-odds">@<span v-points="result.ior"></span></div>
        <div class="order-state" :class="`${result.errorCode ? 'error' : 'check'}`"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'

const results = computed(() => store.state.betting.results)
</script>
<style scoped lang="scss">
.result-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

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
      background: #EFF0F1;
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
        color: #7642FD;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 600;
      }

      .order-state {
        width: 16px;
        height: 100%;

        &.check {
          background: #0BBA3E;
        }

        &.error {
          background: #FB0738;
        }
      }
    }
  }
}
</style>
