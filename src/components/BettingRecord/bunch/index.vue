<template>
  <div>
    <div class="match-title">
      <div class="title-left">
        <div>{{ item.parlayNum }}{{ $t('user.session') }}</div>
        <div>
          <SportsIcon
            v-for="(item2, index1) in item.betDTOList"
            :key="index1"
            :icon-src="item2.gameType"
            class="ball-img"
          />
        </div>
      </div>
      <div class="cur-odds">@<span v-points="item.sioRatio"></span></div>
    </div>
    <div v-for="(item1, index1) in props.item.betDTOList" :key="index1">
      <div class="top2" :class="{ 'top-PenDing': isPenDing }">
        <div class="left">
          <div class="top-img">
            <img v-img="item1.homeLogo" class="img_1" alt="" :type="4" style="object-fit: contain" />
            <img v-img="item1.awayLogo" class="img_2" alt="" :type="5" style="object-fit: contain" />
          </div>
        </div>
        <div class="right">
          <div class="one">
            <span>
              {{ getLangBet(item1.betItemLang) }}
            </span>
            <span :class="[getRatioColor(item1.betResultDetail)]">
              <!-- @{{ item1.ioRatio }} -->
              @<span v-points="item1.ioRatio"></span>
            </span>
          </div>
          <div class="one two">
            <span v-if="item1.homeTeam && item1.awayTeam" v-play="item1" />
            <span v-else>?</span>
            <span>
              <!-- 平局图标找到了 -->
              <SvgIcon v-if="Number(item.cashoutType) === 2" name="user-ahead" class="icon-svg-1" />
              <SvgIcon v-if="item.state === 1" name="user-postpone" class="icon-svg-1" />
              <SvgIcon
                v-else-if="item.state !== 1 && battleStatus(item1.betResultDetail)"
                :name="`user-${item1.betResultDetail}`"
                class="icon-svg-1"
              />
              <img v-else class="img_1" src="@/assets/images/user/D1.png" alt="" />
            </span>
          </div>
          <div class="team">
            {{ getTeam(item1).homeTeam }} v {{ getTeam(item1).awayTeam }}
            <span v-if="item1.resultScore"> [{{ item1.resultScore }}] </span>
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
        <span class="money-num-money">
          <CurrencyComp class-name="mr3" />
          <!-- 投注额 -->
          <span v-points="item.gold"></span>
        </span>
      </div>
      <div class="money-num-2">
        <span v-if="item.state === 0 || item.state === -1 || item.state === 1"
          >{{ $t('user.CompensableAmount') }}:</span
        >
        <span v-else-if="ifPracticalMoneyNum(item)">{{ $t('user.practical') }}:</span>
        <span>
          <!-- 受理状态 -->
          <span v-if="item.state !== 3 && item.state !== 5">
            <span v-if="item.state === -1" class="color-4">
              {{ $t('user.editPend') }}
            </span>
            <span v-if="item.state === 0" class="color-4">
              {{ $t('user.affirmPend') }}
            </span>
          </span>
          <!-- 币种 -->
          <span v-if="ifPracticalMoneyNum(item)">
            <CurrencyComp class-name="mr3 color1" />
          </span>
          <span v-if="item.state === 0 || item.state === -1 || item.state === 1" class="num">
            <span v-points="getProfit(item)"></span>
          </span>
          <span v-else-if="ifPracticalMoneyNum(item)" class="num">
            <span v-points="item.winGold"></span>
          </span>
        </span>
      </div>
    </div>
    <div class="line" v-if="ifUserInfo" />
    <div class="top4" v-if="ifUserInfo">
      <div class="one">
        <span>{{ $t('user.orderId') }}:</span>
        <span>{{ item.orderId }}</span>
      </div>
      <div class="one">
        <span>{{ $t('user.BettingTime') }}：</span>
        <span>{{ item.createDate }}</span>
      </div>
      <div v-if="item.creditState === 1" class="one">
        <span>{{ $t('user.SettlementTime') }}:</span>
        <span>{{ formatToDateTime(item.resultDate) }}</span>
      </div>
    </div>
    <!-- 提前结算 -->
    <BettingBtn v-if="isPenDing" :item="item" />
  </div>
</template>

<script lang="ts" setup>
import { formatToDateTime } from '@/utils/date'
import { accMul } from '@/utils/math'
import { getBrowserLanguage } from '@/utils'
import { computed } from 'vue'
import store from '@/store'
import CurrencyComp from '@/components/Currency/index.vue'
import BettingBtn from '@/components/BettingRecord/components/BettingBtn.vue'

const teamNameList = computed(() => store.state.user.teamNameList || [])
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  ifUserInfo: {
    type: Boolean,
    default: true
  },
  isPenDing: {
    type: Boolean,
    default: false
  }
})

const getProfit = (item: any) => {
  return accMul(item.gold, item.sioRatio)
}

// 是否显示实际金额
const ifPracticalMoneyNum = (item: any) => {
  if ((item.state !== 3 && item.state !== 5) || Number(item.cashoutType) === 2) {
    return true
  }
  return false
}
// 图标状态
const battleStatus = (val: any) => {
  if (val === 'W' || val === 'LW' || val === 'L' || val === 'LL' || val === 'P') {
    return true
  }
  return false
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
  const lang = localStorage.getItem('locale') || getBrowserLanguage()
  return itemA[lang]
}
</script>

<style lang="scss" scoped>
.color-1 {
  color: var(--color-bet-iortext);
}

.color-2 {
  color: #1ebb52;
}

.color-3 {
  color: red;
}

.color-4 {
  color: #ff9a00;
}

.ball-img {
  font-size: 24px;
  color: var(--color-text-3);
  margin-right: 3px;
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
  }

  .cur-odds {
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: var(--color-bet-iortext);
    letter-spacing: 0;
    font-weight: 600;
  }

  .title-right {
    background: #fe0332;
    border-radius: 40px 0px 0px 40px;
    padding-left: 20px;
    height: 80px;
    width: 188px;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: var(--color-background-color);
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
      color: #ffb6ca;
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
      letter-spacing: 0;
      font-weight: 400;
      color: var(--color-text-1);

      .icon-svg-1 {
        font-size: 32px;
        margin-right: 5px;
      }

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
        // color: var( --color-bg-1);
        color: var(--color-bet-iortext);
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
.top-PenDing {
  // background: #e2e6e8;
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

    .money-num-money {
      color: var(--color-search-box-text-1);
    }

    .img_1 {
      margin-right: 5px;
      width: 17px;
      height: 21px;
      color: var(--color-search-box-text-1);
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
      // color: var(--color-bg-1);
      color: var(--color-bet-iortext);
    }

    .num {
      font-size: 30px;
      // color: var(--color-bg-1);
      color: var(--color-bet-iortext);
    }
  }
}

.line {
  margin-top: 5px;
  background: #e0e3e7;
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
}
</style>
