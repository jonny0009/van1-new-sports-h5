<template>
  <SingleResult v-if="mode===1"></SingleResult>
  <ComboResult v-else></ComboResult>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
import SingleResult from './SingleResult.vue'
import ComboResult from './ComboResult.vue'

const mode = computed(() => store.state.betting.mode)
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
