<template>
  <div>
    <div v-for="(item1, index1) in props.item.betDTOList" :key="index1">
      <div class="top">
        <div class="left">
          <div class="top-img">

            <img v-img="item1.homeLogo" class="img_1" alt="" :type="4" style="object-fit: contain;">
            <img v-img="item1.awayLogo" class="img_2" alt="" :type="5" style="object-fit: contain;">

          </div>
        </div>
        <div class="right">
          <div class="font_1">

            <span v-if="item1.championType">
              {{ $t('betting.champion') }}
            </span>
            <span v-else>
              {{ getTeam(item1).homeTeam }} v {{ getTeam(item1).awayTeam }}
            </span>

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
      <div class="top2">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/plate.png" alt="" />
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
            <span v-if="item1.championType">
              {{ getChampionName(item1.gameId) }}
            </span>

            <span v-else-if="item1.homeTeam && item1.awayTeam" v-play="item1" />
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
        </div>
      </div>
      <!-- 3 -->
      <div class="top3">
        <div class="one">
          <span>{{ $t('user.BettingAmount') }}</span>
          <div>

            <SvgIcon v-if="currency === 'CNY'" name="user-cny" class="img_1" />
            <SvgIcon v-else-if="currency === 'VNDK'" name="user-vndk" class="img_1" />
            <SvgIcon v-else name="user-usdt" class="img_1" />

            <span>
              {{ formatMoney(item.gold) }}
            </span>
          </div>
        </div>
        <div class="one two">
          <!-- state 1下单成功 2 赢 3输 4和 5取消  0 确认中-->
          <!-- 未结算的注单显示：可赔付额；取消/延期，输的注单不显示赔付额这一栏 -->
          <!-- creditState 0 未结算 1 已结算-->
          <span v-if="item.state == 0 || item.state == -1 || item.state == 1">{{ $t('user.CompensableAmount') }}:</span>
          <span v-else-if="item.state !== 3 && item.state !== 5 || item1.betResultDetail == 'LL'">{{ $t('user.practical')
          }}:</span>

          <div>

            <!-- 受理状态 -->
            <span v-if="item.state !== 3 && item.state !== 5">
              <span v-if="item.state == -1" style="color:#FF9A00 ;">
                {{ $t('user.editPend') }}
              </span>
              <span v-if="item.state == 0" style="color:#FF9A00 ;">
                {{ $t('user.affirmPend') }}
              </span>
            </span>

            <!-- 币种 -->
            <span v-if="item.state !== 3 && item.state !== 5 || item1.betResultDetail == 'LL'">
              <SvgIcon v-if="currency === 'CNY'" name="user-cny" class="img_1" />
              <SvgIcon v-else-if="currency === 'VNDK'" name="user-vndk" class="img_1" />
              <SvgIcon v-else name="user-usdt" class="img_1" />
            </span>

            <span v-if="item.creditState == 0" class="num color-1">
              {{ formatMoney(getProfit(item)) }}
            </span>
            <span v-else-if="item.state !== 3 && item.state !== 5 || item1.betResultDetail == 'LL'" class="color-1">
              {{ formatMoney(item.winGold) }}
            </span>
          </div>
        </div>
      </div>
      <!-- line -->
      <div class="line" />
      <!-- num-->
      <div class="top4">
        <div class="one">
          <span>{{ $t('user.orderId') }}:</span>
          <span>{{ item.orderId }}</span>
        </div>
        <div class="one">
          <span>{{ $t('user.BettingTime') }}：</span>
          <span>{{ item.createDate }}</span>
        </div>
        <div v-if="item.creditState == 1" class="one">
          <span>{{ $t('user.SettlementTime') }}：</span>
          <span>{{ formatToDateTime(item.resultDate) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatToDateTime } from '@/utils/date'
import { formatMoney } from '@/utils/index'

import { computed } from 'vue'
import store from '@/store'
const currency = computed(() => store.state.user.currency)
const teamNameList = computed(() => store.state.user.teamNameList || [])
const championLangList = computed(() => store.state.user.championLangList || [])

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
    .font_2{
      color: var(--color-text-3);
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
    color: var(--color-text-1);
    letter-spacing: 0;
    font-weight: 600;

    .img_1 {
      width: 17px;
      height: 21px;
      color: var(--color-text-1);
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
      color: var(--color-bg-1);
    }
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
    // color: var(--color-result-box-2);
    color: var(--color-search-box-text-2);
    letter-spacing: 0;
    font-weight: 400;
  }
}
</style>
