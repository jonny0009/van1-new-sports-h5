<template>
  <div>
    <div v-for="(item1, index1) in props.item.betDTOList" :key="index1">
      <div class="top">
        <div class="left">
          <div class="top-img">
            <img v-img="item1.homeLogo" class="img_1" alt="" :type="4" style="object-fit: contain" />
            <img v-img="item1.awayLogo" class="img_2" alt="" :type="5" style="object-fit: contain" />
          </div>
        </div>
        <div class="right">
          <div class="font_1">
            <span v-if="item1.championType">
              {{ $t('betting.champion') }}
            </span>
            <span v-else> {{ getTeam(item1).homeTeam }} v {{ getTeam(item1).awayTeam }} </span>
            <span v-if="item1.resultScore" class="color-1"> [{{ item1.resultScore }}]</span>
          </div>
          <div class="league-name">
            <SportsIcon :icon-src="item1.gameType" class="ball-img" />
            <div v-if="item1.championType" class="font_2">{{ getChampionName(item1.systemId) }}</div>
            <div v-else class="font_2">{{ getTeam(item1).leagueShortName }}</div>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="top2" :class="{ 'top-PenDing': isPenDing }">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/plate.png" alt="" />
        </div>
        <div class="right">
          <div class="one">
            <span>
              {{ getLangBet(item1.betItemLang) }}
            </span>
            <span :class="[getRatioColor(item1.betResultDetail)]"> @<span v-points="item1.ioRatio"></span> </span>
          </div>
          <div class="one two">
            <span v-if="item1.championType">
              {{ getChampionName(item1.gameId) }}
            </span>
            <span v-else-if="item1.homeTeam && item1.awayTeam" v-play="item1" />
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
        </div>
      </div>
      <!-- 3 -->
      <div class="top3">
        <div class="one">
          <span>{{ $t('user.BettingAmount') }}</span>
          <div class="money-num-money">
            <CurrencyComp class-name="mr3" />
            <!-- 投注额 -->
            <span v-if="Number(item1.ioRatio) > 0" v-points="item.gold"></span>
            <span v-if="Number(item1.ioRatio) < 0" v-points="ifBetNum(item, item1)"></span>
            <span v-if="Number(item1.ioRatio) < 0"> (<span v-points="item.gold" />) </span>
          </div>
        </div>
        <div class="one two">
          <!-- state 1下单成功 2 赢 3输 4和 5取消  0 确认中-->
          <!-- 未结算的注单显示：可赔付额；取消/延期，输的注单不显示赔付额这一栏 -->
          <!-- creditState 0 未结算 1 已结算-->
          <span v-if="item.state === 0 || item.state === -1 || item.state === 1"
            >{{ $t('user.CompensableAmount') }}:</span
          >
          <span v-else-if="ifPracticalMoneyNum(item, item1)">{{ $t('user.practical') }}:</span>
          <div>
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
            <span v-if="ifPracticalMoneyNum(item, item1)">
              <CurrencyComp class-name="mr3 color1" />
            </span>
            <span v-if="item.state === 0 || item.state === -1 || item.state === 1" class="num color-1">
              <span v-points="getProfit(item, item1)"></span>
            </span>
            <span v-else-if="ifPracticalMoneyNum(item, item1)" class="color-1">
              <span v-points="item.winGold"></span>
            </span>
          </div>
        </div>
      </div>
      <!-- line -->
      <div class="line" v-if="ifUserInfo" />
      <!-- num-->
      <div class="top4" v-if="ifUserInfo">
        <div class="one">
          <span>{{ $t('user.OrderID') }}:</span>
          <span>{{ item.orderId }}</span>
        </div>
        <div class="one">
          <span>{{ $t('user.BettingTime') }}:</span>
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
  </div>
</template>

<script lang="ts" setup>
import { formatToDateTime } from '@/utils/date'
import { accDiv, accMul, accAdd } from '@/utils/math'
import { getBrowserLanguage } from '@/utils'
import { computed } from 'vue'
import store from '@/store'
import CurrencyComp from '@/components/Currency/index.vue'
import BettingBtn from '@/components/BettingRecord/components/BettingBtn.vue'

const teamNameList = computed(() => store.state.user.teamNameList || [])
const championLangList = computed(() => store.state.user.championLangList || [])
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
// 是否显示马尼,印尼括号金额
const ifBetNum = (item: any, item1: any) => {
  if (Number(item1.ioRatio) < 0) {
    // 马来绝对值都小于1,  印尼绝对值都大于1
    const absNum: any = Math.abs(Number(item1.ioRatio))
    return accDiv(item.gold, absNum)
  }
}
// 可赔付金额
const getProfit = (item: any, item1: any) => {
  if (Number(item1.ioRatio) < 0) {
    // 马来绝对值都小于1,  印尼绝对值都大于1
    let sumNum: any = 0
    const absNum: any = Math.abs(Number(item1.ioRatio))
    if (absNum > 1) {
      sumNum = accAdd(accDiv(item.gold, absNum), item.gold)
    }
    if (absNum < 1) {
      sumNum = accAdd(accDiv(item.gold, absNum), item.gold)
    }
    return sumNum
  }
  // return item.gold * item.sioRatio
  return accMul(item.gold, item.sioRatio)
}
// 是否显示实际金额
const ifPracticalMoneyNum = (item: any, item1: any) => {
  if ((item.state !== 3 && item.state !== 5) || item1.betResultDetail === 'LL' || Number(item.cashoutType) === 2) {
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
// 获取冠军赛果句话
const getChampionName = (item: any) => {
  if (championLangList.value.length) {
    const item1 = championLangList.value.find((e: any) => e.ratioId === item)
    if (item1) {
      return item1.ratioName
    }
    return '?'
  } else {
    return '?'
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
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 600;
    }

    .font_2 {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: var(--color-text-1);
      letter-spacing: 0;
      font-weight: 600;
    }
  }

  .league-name {
    display: flex;

    .font_2 {
      color: var(--color-text-3);
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
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 600;
    }

    .two {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: var(--color-text-1);
      letter-spacing: 0;
      font-weight: 600;

      .icon-svg-1 {
        font-size: 32px;
        margin-right: 5px;
      }

      .img_1 {
        width: 40px;
        height: 30px;
      }
    }
  }
}
.top-PenDing {
  // background: #e2e6e8;
}

.top3 {
  margin-top: 9px;

  .one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: var(--color-text-1);
    letter-spacing: 0;
    font-weight: 600;

    .money-num-money {
      color: var(--color-search-box-text-1);
    }

    .img_1 {
      width: 17px;
      height: 21px;
      color: var(--color-search-box-text-1);
    }
  }

  .two {
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: var(--color-text-1);
    letter-spacing: 0;
    font-weight: 600;

    .img_1 {
      width: 20px;
      height: 25px;
      color: var(--color-bet-iortext);
    }
  }
}

.line {
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
