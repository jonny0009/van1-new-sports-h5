<template>
  <div class="panel-score">
    <div class="score">
      <div class="score-team">
        <div class="score-team_head"></div>
        <div class="score-team_wrap">
          <img v-img="matchData.homeLogo" :type="4" alt="" />
          <span>{{ home }}</span>
        </div>
        <div class="score-team_wrap">
          <img v-img="matchData.awayLogo" :type="5" alt="" />
          <span>{{ away }}</span>
        </div>
      </div>

      <div class="score-main">
        <div class="score-main__item" v-for="(item, i) in scoreListComputed" :key="i">
          <div class="head">
            <strong>{{ i + 1 }} {{ matchData.gameType === 'FT' ? '盘' : '节' }}</strong>
          </div>
          <div class="nums">
            <span>{{ item.homeTeamScore }}</span>
          </div>
          <div class="nums">
            <span>{{ item.awayTeamScore }}</span>
          </div>
        </div>
      </div>

      <div class="score-result">
        <div class="head"><strong>比赛</strong></div>
        <div class="nums">
          <span>{{ scoreResult.homeTeamScore }}</span>
        </div>
        <div class="nums">
          <span>{{ scoreResult.awayTeamScore }}</span>
        </div>
      </div>

      <div class="bot-bg"></div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  scoreList: {
    type: Array as any,
    default: () => []
  },
  matchData: {
    type: Object,
    default: () => {}
  }
})

const home = computed(() => {
  return props.matchData.homeTeamShort || props.matchData.homeTeam
})
const away = computed(() => {
  return props.matchData.awayTeamShort || props.matchData.awayTeam
})
const scoreListComputed = computed(() => {
  const exit = ['Current', 'Normaltime']
  return props.scoreList.filter((m: any) => !exit.includes(m.type))
})
const scoreResult = computed(() => {
  return props.scoreList.find((m: any) => m.type === 'Current') || {}
})
</script>

<style lang="scss" scoped>
.panel-score {
  padding: 16px 0;
}

.score {
  position: relative;
  display: flex;
  color: #0e3d66;
  font-weight: 600;
  padding: 0 4px;
  .bot-bg {
    height: 120px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: -10px;
    z-index: 0;
  }

  &-team {
    position: relative;
    z-index: 2;
    min-width: 240px;
    width: 240px;
  }
  &-team_head {
    height: 40px;
    margin-bottom: 15px;
    padding: 0 0 0 20px;
  }
  &-team_wrap {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 0 0 16px;
    > img {
      min-width: 44px;
      width: 44px;
      height: 44px;
      margin: 0 16px 0 0;
    }
    > span {
      font-size: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  &-result,
  &-main__item {
    position: relative;
    z-index: 2;
    min-width: 100px;
    width: 100px;
    .head {
      display: flex;
      justify-content: center;
      height: 40px;
      margin-bottom: 15px;
      > strong {
        font-weight: normal;
        font-size: 24px;
      }
    }
    .nums {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      > span {
        display: block;
        min-width: 60px;
        width: 60px;
        height: 40px;
        line-height: 40px;
        background: #f4f5fa;
        border-radius: 8px;
        font-size: 28px;
        text-align: center;
      }
    }
  }

  &-main {
    flex: 1;
    display: flex;
    overflow-x: auto;
  }
}

.footer {
  display: flex;
  align-items: center;
  color: #0e3d66;
  height: 40px;
  margin: 20px 0 0;
  padding: 0 20px;
}
</style>
