<template>
  <div>
    <div class="match-title">
      <!-- {{ item.parlayNum }}场串关 -->
      <div class="title-left">
        <div>{{ item.parlayNum }}{{ $t('user.session') }}</div>
        <div>
          <SportsIcon v-for="(item2, index1) in item.betDTOList" :key="index1" :icon-src="item2.gameType" class="ball-img" />
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

            <img
              v-img="item1.homeLogo"
              class="img_1"
              alt=""
              :type="4"
              style="object-fit: contain;"
            >
            <img
              v-img="item1.awayLogo"
              class="img_2"
              alt=""
              :type="5"
              style="object-fit: contain;"
            >

          </div>
        </div>
        <div class="right">
          <div class="one">
            <span>
              {{ getLangBet(item1.betItemLang) }}
            </span>
            <span :class="[getRatioColor(item1.betResultDetail)]">
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
            {{ getTeam(item1).homeTeam }} v {{ getTeam(item1).awayTeam }}
            <span v-if="item1.resultScore">
              [{{ item1.resultScore }}]
            </span>
          </div>
          <div class="team">
            <SportsIcon :icon-src="item1.gameType" class="ball-img" />
            <span>
              {{ getTeam(item1).leagueShortName }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="money-num">
      <div class="money-num-1">
        <span>{{ $t('user.BettingAmount') }}:</span>
        <span>

          <SvgIcon v-if="currency === 'CNY'" name="user-cny" class="img_1" />
          <SvgIcon v-else-if="currency === 'VNDK'" name="user-vndk" class="img_1" />
          <SvgIcon v-else name="user-usdt" class="img_1" />

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
            <SvgIcon v-if="currency === 'CNY'" name="user-cny" class="img_1" />
            <SvgIcon v-else-if="currency === 'VNDK'" name="user-vndk" class="img_1" />
            <SvgIcon v-else name="user-usdt" class="img_1" />
          </span>

          <span v-if="item.state == 0|| item.state==-1||item.state== 1" class="num">
            {{ formatMoney(getProfit(item)) }}
          </span>
          <span v-else-if="item.state !==3&& item.state !==5 " class="num">
            {{ formatMoney(item.winGold) }}
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

import { computed } from 'vue'
import store from '@/store'
const currency = computed(() => store.state.user.currency)
const teamNameList = computed(() => store.state.user.teamNameList || [])

const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  }
})

const getProfit = (item: any) => {
  return item.gold * item.sioRatio
}
// 汇率颜色
const getRatioColor = (val: any) => {
  if (val === 'W' || val === 'LW') {
    return 'color-2'
  }
  if (val === 'L' || val === 'LL') {
    return 'color-3'
  }
  if (val === 'P') {
    return 'color-4'
  }
  return ''
}
// 获取多语言队伍名称
const getTeam = (item: any) => {
  if (teamNameList.value.length) {
    const item1 = teamNameList.value.find((e: any) => e.gidm === item.systemId)
    if (item1) {
      return item1
    }
    return {
      homeTeam: '?',
      awayTeam: '?',
      leagueShortName: '?'
    }
  }
  return {
    homeTeam: '?',
    awayTeam: '?',
    leagueShortName: '?'
  }
}
// 获取多语言bet
const getLangBet = (item: any) => {
  const itemA = JSON.parse(item)
  const lang = localStorage.getItem('locale') || 'zh-cn'
  return itemA[lang]
}

</script>

<style lang="scss" scoped>

.color-1 {
  color: var(--color-bg-1);
}

.color-2 {
  color: #1EBB52;
}

.color-3 {
  color: red;
}
.color-4 {
  color: #FF9A00;
}
.ball-img{
  font-size: 24px;
  color: var(--color-text-3);
  margin-right:3px;
  font-weight: 500;
}
.match-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-left {
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: var(--color-search-box-text-1);
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
    color: var( --color-sidebar-font);
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
  background: var(--van-result-box-1);
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
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 600;
    }

    .two {
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: var(--color-text-1);
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
      color: var(--color-text-1);
      letter-spacing: 0;
      font-weight: 400;
      display: flex;
      align-items: center;

      span:first-child {
        margin-left: 8px;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: var(--color-bg-1);
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
    color: var(--color-text-1);
    letter-spacing: 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img_1 {
      margin-right: 5px;
      width: 17px;
      height: 21px;
      color: var(--color-text-1);
    }
  }

  &-2 {
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: var(--color-text-1);
    letter-spacing: 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img_1 {
      margin-right: 5px;
      width: 20px;
      height: 25px;
      color: var(--color-bg-1);
    }

    .num {
      font-size: 30px;
      color: var(--color-bg-1);
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
    // color: var(--color-result-box-2);
    color: var(--color-search-box-text-2);
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
