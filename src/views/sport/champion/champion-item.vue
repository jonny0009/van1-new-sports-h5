<template>
  <div class="league-champion-item__content">
    <div class="betting-select">
      <div class="betting-select__list">
        <BettingOption v-for="(item, idx) in itemList" :key="idx" :market-info="item.marketInfo" class="betting-option">
          <span class="up-betting-name betslipLine">
            <span class="text">{{ item.ratio }}</span><span class="point"></span>
          </span>
          <div class="details">
            <div class="container">
              <div class="item">{{ item.ior }}</div>
            </div>
          </div>
        </BettingOption>
      </div>
      <div class="betting-select__more" @click="clickOpen()">
        {{ isOpen ? '收起' : '更多' }}
        <van-icon class="icon" :class="isOpen ? 'up' : ''" name="play" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MarketInfo } from '@/entitys/MarketInfo'
const isOpen: any = ref(false)
const props = defineProps({
  gameDetail: {
    type: Object,
    default: function () {
      return {}
    }
  }
})

const itemList: any = ref()
itemList.value = props.gameDetail.champion.ratioData.slice(0, 9)

itemList.value = itemList.value.map((item:any) => {
  item.marketInfo = new MarketInfo(item)
  return item
})
const clickOpen = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    itemList.value = props.gameDetail.champion.ratioData
  } else {
    itemList.value = props.gameDetail.champion.ratioData.slice(0, 9)
  }
}
</script>

<style lang="scss">
.league-champion-item__content {
  margin-top: 24px;

  .betting-select {
    width: 100%;

    .betting-select__list {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr 1fr;

      .betting-option {
        font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
        font-weight: 800;
        position: relative;
        min-height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        background-color: white;
        border-radius: 26px;
        overflow: hidden;
        transition: background-color .2s;

        .betslipLine {
          width: 100%;
          flex: 1;
          font-size: 28px;
          // line-height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #546371;
          overflow: hidden !important;
          white-space: nowrap !important;
          text-overflow: ellipsis !important;

          .text {
            text-align: center;
            overflow: hidden !important;
            white-space: nowrap !important;
            text-overflow: ellipsis !important;
          }
        }

        .details {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .betting-select__more {
      margin-top: 26px;
      height: 68px;
      border-radius: 26px;
      background-color: white;
      font-size: 28px;
      font-weight: 800;
      font-family: SF-Pro-Bold, PingFangSC-Semibold, MicrosoftYahei-Bold, system-ui;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        transform: rotate(90deg);
      }

      .up {
        transform: rotate(270deg) !important;
      }
    }
  }

}</style>
