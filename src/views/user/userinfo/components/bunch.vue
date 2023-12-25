<template>
  <div>
    <div class="match-title">
      <!-- {{ item.parlayNum }}场串关 -->
      <div class="title-left">
        <div>{{ item.parlayNum }}场串关</div>
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
            <img class="img_1" src="@/assets/images/user/num3.png" alt="" />
            <img class="img_2" src="@/assets/images/user/num9.png" alt="" />
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
            <span v-play="item1">
            </span>
            <span>
              <!-- 问号图标没找到 -->
              <img v-if="item.state == 1" class="img_1" src="@/assets/images/user/icon23.png" alt="" />
              <img v-if="item1.betResultDetail === 'W'" class="img_1" src="@/assets/images/user/win.svg" alt="" />
              <img v-if="item1.betResultDetail === 'L'" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
            </span>
          </div>
          <div class="team">
            {{ item1.homeTeam }} v {{ item1.awayTeam }}
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
        <span>投注额:</span>
        <span>
          <!-- <img class="img_1" src="@/assets/images/user/num1.png" alt="" /> -->
          <span v-points="item.gold || 0"></span>
        </span>
      </div>
      <div class="money-num-2">
        <span v-if="item.state == 3">实际赔付:</span>
        <span v-if="item.state == 1">可赔付额:</span>
        <span>
          <!-- <img class="img_1" src="@/assets/images/user/num2.png" alt="" /> -->
          <span v-if="item.state == 3" v-points="item.winAndLossGold || 0" class="num"></span>
          <span v-if="item.state == 1" v-points="getProfit(item)" class="num"></span>
        </span>
      </div>
    </div>
    <div class="addBtn-1">
      <span>加注</span>
      <!-- <img class="img_1" src="@/assets/images/user/num8.png" alt="" /> -->
    </div>
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
// import { ref, reactive } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  }
})
const getProfit = (item: any) => {
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
