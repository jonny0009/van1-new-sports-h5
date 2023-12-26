<template>
  <div>
    <div v-for="(item1,index1) in props.item.betDTOList" :key="index1">
      <div class="top">
        <div class="left">
          <div class="top-img">
            <img class="img_1" src="@/assets/images/user/num3.png" alt="" />
            <img class="img_2" src="@/assets/images/user/num9.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="font_1">{{ item1.homeTeam }} v {{ item1.awayTeam }}
            <span v-if="item1.resultScore" class="color-1"> [{{ item1.resultScore }}]</span>
          </div>
          <div class="font_2">{{ item1.leagueName }}</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="top2">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/plate.png" alt="" />
        </div>
        <div class="right">
          <div class="one">
            <span>
              {{ item1.betItem }}
            </span>
            <span class="color-2" :class="[item1.betResultDetail==='L'?'color-3':'']">
              @{{ item1.ioRatio }}
            </span>
          </div>
          <div class="one two">
            <span v-play="item1">
            </span>
            <span>
              <!-- 问号图标没找到 -->
              <img v-if="item1.betResultDetail === 'W'" class="img_1" src="@/assets/images/user/win.svg" alt="" />
              <img v-else-if="item1.betResultDetail === 'L'" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
              <img v-else-if="item.state == 1" class="img_1" src="@/assets/images/user/icon23.png" alt="" />
            </span>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="top3">
        <div class="one">
          <span>{{ $t('user.BettingAmount') }}</span>
          <div>

            <img v-if="currency==='CNY'" class="img_1" :src="CNY1" alt="" />
            <img v-else-if="currency==='VNDK'" class="img_1" :src="VNDK1" alt="" />
            <img v-else class="img_1" src="@/assets/images/user/USDT1.png" alt="" />

            <span> {{ formatMoney(item.gold) }}</span>
          </div>
        </div>
        <div class="one two">
          <span v-if="item.state==3">{{ $t('user.practical') }}:</span>
          <span v-if="item.state==2">{{ $t('user.practical') }}:</span>
          <span v-if="item.state==1">{{ $t('user.CompensableAmount') }}:</span>
          <!-- <span v-else>可能赔付:</span> -->
          <div>

            <img v-if="currency==='CNY'" class="img_1" :src="CNY2" alt="" />
            <img v-else-if="currency==='VNDK'" class="img_1" :src="VNDK2" alt="" />
            <img v-else class="img_1" src="@/assets/images/user/num2.png" alt="" />

            <span v-if="item.state==3" class="color-1">
              {{ formatMoney(item.winAndLossGold) }}
            </span>
            <span v-if="item.state==2" class="color-1">
              {{ formatMoney(item.winAndLossGold) }}
            </span>
            <span v-if="item.state==1" class="num color-1">
              {{ formatMoney(getProfit(item)) }}
            </span>
          </div>
        </div>
      </div>
      <!-- line -->
      <div class="line" />
      <!-- num-->
      <div class="top4">
        <div class="one">
          <span>{{ $t('user.OrderID') }}:</span>
          <span>{{ item.orderId }}</span>
        </div>
        <div class="one">
          <span>{{ $t('user.BettingTime') }}:</span>
          <span>{{ item.createDate }}</span>
        </div>
        <div v-if="item.state==3" class="one">
          <span>{{ $t('user.SettlementTime') }}:</span>
          <span>{{ formatToDateTime(item.resultDate) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CNY1 from '@/assets/images/user/CNY1.svg'
import VNDK1 from '@/assets/images/user/VNDK1.svg'
import CNY2 from '@/assets/images/user/CNY2.svg'
import VNDK2 from '@/assets/images/user/VNDK2.svg'

import { formatToDateTime } from '@/utils/date'
import { formatMoney } from '@/utils/index'

import { computed } from 'vue'
import store from '@/store'
const currency = computed(() => store.state.user.currency)

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
const getProfit = (item:any) => {
  let money = item.gold
  item.betDTOList.map((i:any) => {
    money = money * i.ioRatio
  })

  return money
}

</script>

<style lang="scss" scoped>
.color-1 {
    color: #7642FD;
  }
 .top {
      display: flex;

      .top-img {
        height: 80px;
        width: 80px;
        position: relative;

        .img_1 {
          position: absolute;
          top: 0;
          left: 0;
          height: 50px;
          width: 50px;
        }

        .img_2 {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 50px;
          width: 50px;
        }
      }

      .right {
        margin-left: 18px;

        .font_1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .font_2 {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 600;
        }
      }
    }

    .top2 {
      margin-top: 20px;
      background: #E2E6E8;
      border-radius: 20px;
      padding: 20px 10px;
      display: flex;
      align-items: center;

      .left {
        margin-right: 15px;

        .img_1 {
          width: 60px;
          height: 60px;
        }
      }

      .right {
        .one {
          display: flex;
          width: 550px;
          justify-content: space-between;
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .two {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 600;

          .img_1 {
            width: 40px;
            height: 30px;
          }
        }
      }
    }

    .top3 {
      margin-top: 9px;

      .one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;

        .img_1 {
          width: 20px;
          height: 19px;
        }
      }

      .two {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;
      }
    }

    .line {
      background: #E0E3E7;
      height: 2px;
    }

    .top4 {
      margin-top: 10px;

      .one {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #96A5AA;
        letter-spacing: 0;
        font-weight: 400;
      }
    }

</style>
