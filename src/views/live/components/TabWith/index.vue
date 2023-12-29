<template>
  <div class="panel-with">
    <div class="top-nav">
      <span :class="{ active: navActive == 1 }" @click="onNavClick(1)">{{ $t('live.curMatch') }}</span>
      <span :class="{ active: navActive == 2 }" @click="onNavClick(2)">{{ $t('live.allBetWith') }}</span>
    </div>

    <Loading v-if="loading" />
    <div class="no-data" v-else-if="list.length === 0">
      <EmptyIcon />
    </div>
    <div class="item" v-else v-for="(item, index) in list" :key="index">
      <div class="header">
        <img class="avatar" v-img="item.headImg" :type="3" alt="" />
        <div class="title">
          <strong>{{ item.nikeName }}</strong>
          <span>@{{ item.nikeName }}</span>
        </div>
        <div class="right">
          <span class="state" v-if="props.matchInfo.showtype == 'RB'">{{ $t('live.inprogress') }}</span>
        </div>
      </div>

      <div class="wrapper">
        <div class="summary">{{ item.leagueName }}</div>
        <div class="label">
          <div class="label-flex">
            <SvgIcon v-if="item.gameType == 'FT'" name="live-football" />
            <SvgIcon v-if="item.gameType == 'BK'" name="live-basketball" />
            <span>{{ item.leagueShortName }}</span>
          </div>
          <div class="label-flex">
            <img src="@/assets/images/live/live_purple.png" alt="" />
            <span v-html="setMatch.showRBTime(props.matchInfo)"></span>
          </div>
        </div>
        <div class="team">
          <div class="team-cell">
            <div class="palyer">
              <img src="@/assets/images/empty/team.png" v-img="item.homeLogo" :type="2" alt="" />
              <span>{{ item.homeTeam }}</span>
            </div>
            <div class="score">
              <span>{{ setMatch.getScore(props.matchInfo, 'H') || '-' }}</span>
            </div>
          </div>
          <div class="team-cell">
            <div class="palyer">
              <img src="@/assets/images/empty/team.png" v-img="item.awayLogo" :type="2" alt="" />
              <span>{{ item.awayTeam }}</span>
            </div>
            <div class="score">
              <span>{{ setMatch.getScore(props.matchInfo, 'C') || '-' }}</span>
            </div>
          </div>
        </div>
        <div class="ticket">
          <div class="ticket-txt">
            <div class="icon">
              <img src="@/assets/images/live/plate.png" alt="" />
            </div>
            <div class="info">
              <strong>{{ item.betItem }}</strong>
              <span v-play="item.playInfo"></span>
            </div>
          </div>
          <div class="ticket-bet">
            <span>@{{ item.ior }}</span>
          </div>
        </div>
        <div class="betting">
          <div class="betting-cell bt1">
            <strong>{{ $t('live.betAmout') }}：</strong>
            <span>{{ item.golds }}</span>
          </div>
          <div class="betting-cell bt2">
            <strong>{{ $t('live.betProfit') }}：</strong>
            <span>{{ (item.golds * item.ior).toFixed(2) }}</span>
          </div>
        </div>

        <div class="footer">
          <BettingOption :market-info="item.marketInfo">
            <div class="button">
              <span>{{ $t('live.betWith') }}</span>
              <img src="@/assets/images/live/live_white_r.png" alt="" />
            </div>
          </BettingOption>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref, watch } from 'vue'
import { betRecord, betRecordAll } from '@/api/live'
import { MarketInfo } from '@/entitys/MarketInfo'
import { useMatch } from '@/utils/useMatch'
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  }
})
const setMatch = useMatch()

const navActive = ref(1)
const onNavClick = (num: number) => {
  navActive.value = num
  list.value = []
  getWithData()
}

const list: Ref<any[]> = ref([])
const loading = ref(false)
const getWithData = async () => {
  loading.value = true
  const apiFun = navActive.value == 1 ? betRecord : betRecordAll
  const params = {
    page: 1,
    pageSize: 50,
    gidm: props.matchInfo?.gidm
  }
  const res: any = await apiFun(params)
  if (res.code == 200) {
    const dataList = res.data.map((item: any) => {
      const dataInfo = { ...item }
      const playInfo = {
        gameType: dataInfo.gameType,
        playType: dataInfo.playType,
        session: dataInfo.session
      }
      const marketInfo = new MarketInfo(dataInfo)
      return { ...dataInfo, playInfo, marketInfo }
    })
    list.value = dataList
  }
  loading.value = false
}
watch(
  () => props.matchInfo,
  () => {
    if (props.matchInfo?.gidm) {
      getWithData()
    }
  }
)

onMounted(() => {
  getWithData()
})
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  justify-content: center;
  padding: 50px 0 0 0;
}
.panel-with {
  padding: 0 36px;
  .top-nav {
    display: flex;
    margin-bottom: 42px;
    > span {
      min-width: 160px;
      height: 64px;
      line-height: 64px;
      padding: 0 15px;
      background: #eff1f2;
      text-align: center;
      border-radius: 32px;
      margin-right: 16px;
      font-size: 24px;
    }
    .active {
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
    }
  }

  > .item {
    margin-bottom: 25px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 68px;
    padding: 0 0 0 56px;
    margin: 0 0 20px 0;
    .avatar {
      display: block;
      width: 56px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .title {
      font-size: 24px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 400;
      line-height: 1.4;
      padding: 0 0 0 20px;
      > strong {
        display: block;
        font-size: 28px;
        color: #1f2630;
        font-weight: 700;
        max-width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .state {
      font-weight: 700;
      font-size: 24px;
      color: #546371;
    }
  }

  .wrapper {
    background: rgba(239, 241, 242, 0.8);
    border-radius: 22px;
    padding: 0 10px;
    .summary {
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 500;
      padding: 15px 10px;
      border-bottom: 1px solid #e5ecf3;
    }
    .label {
      padding: 20px 10px;
      &-flex {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }
      img {
        display: block;
        width: auto;
        height: 28px;
        margin-right: 10px;
      }
      span {
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;
      }
      .svg-icon {
        color: #999;
        margin: 0 10px 0 5px;
      }
    }
    .team {
      font-size: 28px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 600;
      height: 130px;
      background: #e2e6e8;
      border-radius: 20px;
      padding: 15px 12px 0 15px;
      &-cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 8px 0;
        .palyer {
          display: flex;
          align-items: center;
          > img {
            display: block;
            width: 48px;
            margin-right: 20px;
          }
          > span {
            max-width: 400px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .score {
          > span {
            display: flex;
            align-items: center;
            min-width: 40px;
            height: 40px;
            padding: 0 20px;
            background: #ffffff;
            border-radius: 8px;
          }
        }
      }
    }
    .ticket {
      font-size: 28px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 600;
      height: 100px;
      background: #e2e6e8;
      border-radius: 20px;
      margin: 10px 0 0 0;
      display: flex;
      justify-content: space-between;
      padding: 12px 10px;
      &-txt {
        display: flex;
        align-items: center;
        .icon {
          width: 60px;
          height: 60px;
          background: #96a5aa;
          border-radius: 60%;
          margin-right: 15px;
          > img {
            display: block;
            width: 100%;
          }
        }
        .info {
          > span {
            display: block;
            font-size: 24px;
            color: #546371;
            letter-spacing: 0;
            font-weight: 600;
          }
        }
      }
      &-bet {
        font-size: 32px;
        color: #ff0000;
        letter-spacing: 0;
        font-weight: 600;
      }
    }
    .betting {
      color: #546371;
      letter-spacing: 0;
      font-weight: 600;
      padding: 10px 0 0;
      &-cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.6;
        &.bt1 {
          font-size: 24px;
        }
        &.bt2 {
          font-size: 28px;
        }
      }
      &-cell.bt2 > span {
        color: #7642fd;
      }
    }
    .footer {
      border-top: 1px solid #e5ecf3;
      padding: 22px 0;
      margin: 10px 0 0 0;
      .button {
        width: 638px;
        height: 68px;
        background: url('@/assets/images/live/btn_purple.png') no-repeat;
        background-size: 100% 100%;
        font-size: 28px;
        color: #eff1f2;
        letter-spacing: 0;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 26px;
          margin-left: 10px;
        }
      }
      .betting-option-wrap.selected {
        background-color: transparent !important;
      }
    }
  }
}
</style>
