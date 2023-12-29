<template>
  <div>
    <div class="match-title">
      <!-- {{ item.parlayNum }}场串关 -->
      <div class="title-left">
        <div>{{ item.parlayNum }}{{ $t('user.session') }}</div>
        <div>
          <img v-for="i in Number(item.parlayNum)" :key="i" class="img_1" src="@/assets/images/user/num5.png" alt="" />
        </div>
      </div>
      <!-- <img class="img_1" src="@/assets/images/user/down1.png" alt="" /> -->
      <!-- <div class="title-right">
        <div class="title-right-1">
          <span> @62.65 </span>
          <img class="img_1" src="@/assets/images/user/up.png" alt="" />
        </div>
        <div class="title-down">
          @59.65
        </div>
      </div> -->
    </div>
    <div v-for="(item1, index1) in props.item.betDTOList" :key="index1">
      <div class="top2">
        <div class="left">
          <div class="top-img">
            <img v-if="item1.homeLogo" class="img_1" :src="getImg(item1.homeLogo)" alt="" />
            <img v-else class="img_1" src="@/assets/images/user/num3.svg" alt="" />
            <img v-if="item1.awayLogo" class="img_2" :src="getImg(item1.awayLogo)" alt="" />
            <img v-else class="img_2" src="@/assets/images/user/num9.svg" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="one">
            <span>
              {{ item1.betItem }}
            </span>
            <span class="color-2" :class="[item1.betResultDetail === 'L' ? 'color-3' : '']">
              @{{ item1.ioRatio }}
            </span>
          </div>
          <div class="one two">
            <span v-if="item1.homeTeam && item1.awayTeam" v-play="item1" />
            <span v-else>?</span>
            <span>

              <!-- 平局图标找到了 -->
              <img v-if="item.state == 1" class="img_1" src="@/assets/images/user/postpone.svg" alt="" />
              <img v-else-if="item1.betResultDetail == 'W'" class="img_1" src="@/assets/images/user/win.svg" alt="" />
              <img v-else-if="item1.betResultDetail == 'L'" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
              <img v-else-if="item1.betResultDetail == 'LW'" class="img_1" src="@/assets/images/user/LW.png" alt="" />
              <img v-else-if="item1.betResultDetail == 'LL'" class="img_1" src="@/assets/images/user/LL.svg" alt="" />
              <img v-else-if="item1.betResultDetail == 'P'" class="img_1" src="@/assets/images/user/P.svg" alt="" />
              <img v-else-if="item1.betResultDetail == 'D'" class="img_1" src="@/assets/images/user/D1.png" alt="" />
              <img v-else class="img_1" src="@/assets/images/user/D1.png" alt="" />

            </span>
          </div>
          <div class="team">
            {{ item1.homeTeam ?item1.homeTeam:'?' }} v {{ item1.awayTeam?item1.awayTeam:'?' }}
            <span v-if="item1.resultScore">
              [{{ item1.resultScore }}]
            </span>
          </div>
          <div class="team">
            <img class="img_1" src="@/assets/images/user/num5.png" alt="" />
            <span>
              {{ item1.leagueName }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="money-num">
      <div class="money-num-1">
        <span>{{ $t('user.BettingAmount') }}:</span>
        <span>

          <img v-if="currency==='CNY'" class="img_1" :src="CNY1" alt="" />
          <img v-else-if="currency==='VNDK'" class="img_1" :src="VNDK1" alt="" />
          <img v-else class="img_1" src="@/assets/images/user/USDT1.png" alt="" />

          <span>
            {{ formatMoney(item.gold) }}
          </span>
        </span>
      </div>
      <div class="money-num-2">
        <span v-if="item.state == 0|| item.state==-1||item.state== 1">{{ $t('user.CompensableAmount') }}:</span>
        <span v-else-if="item.state !==3&& item.state !==5 ">{{ $t('user.practical') }}:</span>
        <span>

          <!-- 受理状态 -->
          <span v-if="item.state !== 3 &&item.state !== 5 ">
            <span v-if="item.state == -1" style="color:#FF9A00 ;">
              {{ $t('user.editPend') }}
            </span>
            <span v-if="item.state == 0" style="color:#FF9A00 ;">
              {{ $t('user.affirmPend') }}
            </span>
          </span>

          <span v-if="item.state !== 3 && item.state !== 5 ">
            <img v-if="currency==='CNY'" class="img_1" :src="CNY2" alt="" />
            <img v-else-if="currency==='VNDK'" class="img_1" :src="VNDK2" alt="" />
            <img v-else class="img_1" src="@/assets/images/user/num2.png" alt="" />
          </span>

          <span v-if="item.state == 0|| item.state==-1||item.state== 1" class="num">
            {{ formatMoney(getProfit(item)) }}
          </span>
          <span v-else-if="item.state !==3&& item.state !==5 " class="num">
            {{ formatMoney(item.winAndLossGold) }}
          </span>
        </span>
      </div>
    </div>
    <!-- <div class="addBtn-1">
      <span>{{ $t('user.fill') }}</span>
      <img class="img_1" src="@/assets/images/user/num8.png" alt="" />
    </div> -->
    <!-- <div class="line" />
    <div class="top4">
      <div class="one">
        <span>注单ID:</span>
        <span>{{ item.orderId }}</span>
      </div>
      <div class="one">
        <span>投注时间：</span>
        <span>{{ item.createDate }}</span>
      </div>
      <div v-if="item.state == 3" class="one">
        <span>结算时间：</span>
        <span>{{ formatToDateTime(item.resultDate) }}</span>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// import { formatToDateTime } from '@/utils/date'
import { formatMoney } from '@/utils/index'

import CNY1 from '@/assets/images/user/CNY1.svg'
import VNDK1 from '@/assets/images/user/VNDK1.svg'
import CNY2 from '@/assets/images/user/CNY2.svg'
import VNDK2 from '@/assets/images/user/VNDK2.svg'
import { ImageSource } from '@/config'

import { computed } from 'vue'
import store from '@/store'
const currency = computed(() => store.state.user.currency)

const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  }
})
const getImg = (imgUrl: string) => {
  return `${ImageSource}${imgUrl}`
}
const getProfit = (item: any) => {
  // const plateMaskKey = localStorage.getItem('plateMaskKey')
  let money = item.gold
  item.betDTOList.map((i: any) => {
    money = money * i.ioRatio
  })
  return money
}

</script>

<style lang="scss" scoped>
.match-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-left {
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #1F2630;
    font-weight: 600;

    .img_1 {
      height: 24px;
      width: 24px;
      margin-right: 5px;
    }
  }

  .title-right {
    background: #FE0332;
    border-radius: 40px 0px 0px 40px;
    padding-left: 20px;
    height: 80px;
    width: 188px;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 500;
    padding-right: 20px;

    &-1 {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .img_1 {
        height: 24px;
        width: 20px;
      }
    }

    .title-down {
      text-align: right;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #FFB6CA;
      letter-spacing: 0;
      font-weight: 500;
      width: 100%;
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

  }

  .right {
    .one {
      margin-left: 15px;
      display: flex;
      width: 515px;
      justify-content: space-between;
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;
    }

    .two {
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #546371;
      letter-spacing: 0;
      font-weight: 400;

      .img_1 {
        width: 40px;
        height: 30px;
      }
    }

    .team {
      padding: 0px 15px;
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #546371;
      letter-spacing: 0;
      font-weight: 400;
      display: flex;
      align-items: center;

      span:first-child {
        margin-left: 8px;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #7642FD;
        letter-spacing: 0;
        font-weight: 600;
      }

      .img_1 {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }
}

.money-num {
  margin-top: 23px;

  &-1 {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #546371;
    letter-spacing: 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img_1 {
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }
  }

  &-2 {
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #546371;
    letter-spacing: 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img_1 {
      height: 24px;
      width: 24px;
      margin-right: 5px;
    }

    .num {
      font-size: 30px;
      color: #7642FD;
    }
  }
}

.line {
  margin-top: 5px;
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
  .addBtn-1{
        text-align: center;
        line-height: 68px;
        margin-top: 22px;
        width: 638px;
        height: 68px;
        background: #D7D7D7;
        border-radius: 68px;
        span {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #EFF1F2;
          letter-spacing: 0;
          font-weight: 600;
        }
      }
}
</style>
