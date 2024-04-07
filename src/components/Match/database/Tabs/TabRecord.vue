<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" :title="$t('live.navRecent')" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <!-- start -->
            <div class="panel-recent">
              <div class="recent-header">
                <div class="header-item" :class="{ active: teamType === 1 }" @click="fetchRecent(1)">{{ home }}</div>
                <div class="header-item" :class="{ active: teamType === 2 }" @click="fetchRecent(2)">{{ away }}</div>
              </div>
              <div class="panel-recent__item" v-if="recentList.length" v-for="item in recentList" :key="item.matchId">
                <div :class="['bar', 'host', barScoreColor(item, 'home')]"></div>
                <section class="team">
                  <div class="team-host">
                    <span>{{ item.homeTeamAlias }}</span>
                    <img v-img="item.homeLogo" :type="4" alt="" />
                  </div>
                  <div class="team-score">
                    <span>{{ `${item.homeTeamScore}:${item.awayTeamScore}` }}</span>
                  </div>
                  <div class="team-away">
                    <img v-img="item.awayLogo" :type="5" alt="" />
                    <span>{{ item.awayTeamAlias }}</span>
                  </div>
                </section>
                <section class="time">
                  <span>{{ formatToDate(item.matchTime) }}</span>
                  <span>&nbsp;</span>
                  <span>({{ formatToDate(item.matchTime, 'HH:mm') }})</span>
                </section>
                <div :class="['bar', 'away', barScoreColor(item, 'away')]"></div>
              </div>
              <EmptyData v-else />
            </div>
            <!-- end -->
          </div>
        </div>
      </van-collapse-item>

      <van-collapse-item name="2" :title="$t('live.leaguePoints')" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <EmptyData v-if="integralList.length === 0" />
            <!-- start -->
            <ul v-else class="panel-integral">
              <li class="list-title list-box">
                <div>{{ $t('live.rank') }}</div>
                <div class="team">{{ $t('live.balls') }}</div>
                <div>{{ $t('live.win') }}</div>
                <div>{{ $t('live.tie') }}</div>
                <div>{{ $t('live.lose') }}</div>
                <div>{{ $t('live.point') }}</div>
              </li>
              <li v-for="(item, index) in integralList" :key="index" class="list-item list-box">
                <div>
                  {{ item.rank || '-' }}
                </div>
                <div class="team text-overflow">
                  {{ item.teamShortName }}
                </div>
                <div>{{ item.winTime || '-' }}</div>
                <div>
                  {{ item.peaceTime || '-' }}
                </div>
                <div>{{ item.loseTime || '-' }}</div>
                <div>
                  {{ item.integral || '-' }}
                </div>
              </li>
            </ul>
            <!-- end -->
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { formatToDate } from '@/utils/date'
const emit = defineEmits(['fetchRecentEmit'])

const props = defineProps({
  matchData: {
    type: Object,
    default: () => {}
  },
  recentList: {
    type: Array as any,
    default: () => []
  },
  integralList: {
    type: Array as any,
    default: () => []
  }
})

const home = computed(() => {
  return props.matchData?.homeTeamShort || props.matchData?.homeTeam
})
const away = computed(() => {
  return props.matchData?.awayTeamShort || props.matchData?.awayTeam
})
const activeNames = ref(['1'])

const teamType = ref(1)
const fetchRecent = async (state: number = 1) => {
  teamType.value = state
  const { homeTeamId, awayTeamId } = props.matchData || {}
  const params = {
    teamId: teamType.value === 1 ? homeTeamId : awayTeamId,
    limit: 5
  }
  emit('fetchRecentEmit', params)
}

const barScoreColor = (item: any, type: string) => {
  const homeScore = parseFloat(item.homeTeamScore)
  const awayScore = parseFloat(item.awayTeamScore)
  if (homeScore === awayScore) {
    return ''
  }
  if (type === 'home') {
    return homeScore > awayScore ? 'green' : 'red'
  }
  if (type === 'away') {
    return awayScore > homeScore ? 'green' : 'red'
  }
}
</script>

<style lang="scss" scoped>
.panel {
  .van-collapse {
    padding: 0 16px;
    &::after {
      border: none;
    }
  }
  .van-collapse-item {
    background: var(--color-live-collapse-item-bg);
    border-radius: 10px;
    margin-bottom: 20px;
    :deep(.van-collapse-item__title) {
      background: none;
      color: var(--color-live-collapse-item-title);
      font-weight: 700;
      .van-icon-arrow {
        color: var(--color-live-collapse-item-title);
        font-weight: 700;
      }
    }
    :deep(.van-collapse-item__content) {
      background: none;
      padding: 0;
    }
  }

  &-main {
    font-size: 24px;
    padding: 4px;
  }

  &-main__wrapper {
    background: #f4f5fa;
    border-radius: 16px;
  }
}

.panel-recent {
  min-height: 300px;
  padding: 20px 6px;

  .recent-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .header-item {
      width: 306px;
      line-height: 52px;
      text-align: center;
      background-color: #007cfa;
      font-size: 24px;
      color: #fff;
      font-family: PingFangSC-Medium;
      border-radius: 25px;
      background-color: rgba(72, 163, 255, 0.24);
      &.active {
        background-color: rgb(255, 92, 36);
      }
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background: #ffffff;
    border-radius: 20px;
    height: 130px;
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    .bar {
      height: 100%;
      width: 20px;
      background: #958cad;
      position: absolute;
      top: 0;
      &.host {
        left: 0;
      }
      &.away {
        right: 0;
      }
      &.red {
        background: #cb0028;
      }
      &.green {
        background: #00d043;
      }
    }
  }
  .team {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-bottom: 10px;
    .team-host,
    .team-away {
      display: flex;
      align-items: center;
      width: 200px;
      > img {
        display: block;
        width: 48px;
        height: 48px;
      }
      > span {
        color: #0e3d66;
        font-size: 28px;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .team-host {
      justify-content: flex-end;
      > img {
        margin-left: 10px;
      }
    }
    .team-away {
      justify-content: flex-start;
      > img {
        margin-right: 10px;
      }
    }
    .team-score {
      color: #0e3d66;
      font-size: 28px;
      font-weight: 600;
      min-width: 160px;
      text-align: center;
    }
  }
  .time {
    color: #88a6bb;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }
}

.panel-integral {
  padding: 4px;
  .list-box {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #88a6bb;
    text-align: center;
    font-weight: 400;
    width: 100%;
    > div {
      flex: 1;
      height: 54px;
      line-height: 54px;
      text-align: center;
      background: #fff;
      margin: 0.5px;
    }
    div.team {
      min-width: 180px;
    }
  }
  .list-box.list-title {
    color: #0e3d66;
    font-weight: 700;
  }
}
</style>
