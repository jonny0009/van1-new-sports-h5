<template>
  <div class="match-game" :style="{ backgroundImage: 'url(' + matchCover + ')' }">
    <div class="team">
      <div class="team-header">
        <div class="league">
          <SvgIcon name="live-football" />
          <span>{{ matchInfo.leagueName }}</span>
        </div>
        <div class="date">{{ formatToDate(matchInfo.gameDate, 'MM-DD HH:mm') }}</div>
      </div>

      <div class="team-container">
        <div class="team-player host">
          <div class="img-num">
            <img v-img="matchInfo.homeLogo" :type="2" alt="" />
            <span>{{ setMatch.getScore(matchInfo, 'H') }}</span>
          </div>
          <strong>{{ matchInfo.homeTeam }}</strong>
        </div>
        <div class="team-score">
          <span class="default" v-html="setMatch.showRBTime(matchInfo)"></span>
          <!-- <span class="icons" v-if="matchInfo.showtype == 'RB'">
            <SvgIcon name="live-play" />
          </span> -->
        </div>
        <div class="team-player away">
          <div class="img-num">
            <span>{{ setMatch.getScore(matchInfo, 'C') }}</span>
            <img v-img="matchInfo.awayLogo" :type="2" alt="" />
          </div>
          <strong>{{ matchInfo.awayTeam }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ImageSource } from '@/config'
import { formatToDate } from '@/utils/date'
import { useMatch } from '@/utils/useMatch'

const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  }
})
const setMatch = useMatch()
const matchInfo = computed(() => props.matchInfo)
const matchCover = computed(() => {
  const item = matchInfo.value
  if (item.gameType == 'BK') {
    return ImageSource + 'FE/common/live/img_video_bg_BK.jpg'
  } else {
    return ImageSource + 'FE/common/live/img_video_bg_FT.jpg'
  }
})
</script>

<style lang="scss" scoped>
.match-game {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 280px;
  font-size: 24px;
  color: #fff;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.team {
  color: #c5c5c5;
  padding: 20px 0 0 0;
  &-header {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    .league {
      display: flex;
      align-items: center;
      > img {
        width: 24px;
        height: 24px;
        margin-right: 6px;
      }
      > span {
        max-width: 320px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .svg-icon {
        margin-right: 6px;
      }
    }
    .date {
      white-space: nowrap;
    }
  }
  &-container {
    display: flex;
    margin: 40px 0 0 0;
    padding: 0 33px;
  }
  &-player {
    width: 200px;
    display: flex;
    flex-direction: column;
    .img-num {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 17px;
      width: 100%;
      > img {
        display: block;
        width: 62px;
        height: 62px;
      }
      > span {
        font-size: 28px;
      }
    }
    strong {
      max-width: 200px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &.host {
      align-items: flex-start;
      .img-num > span {
        padding-right: 20px;
      }
    }
    &.away {
      align-items: flex-end;
      .img-num > span {
        padding-left: 20px;
      }
    }
  }
  &-score {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0 0 0;
    color: #b1b8bf;
    overflow: hidden;
    .icons {
      color: #f2f2f2;
      margin-top: 10px;
    }
    .svg-icon {
      font-size: 38px;
    }
  }
}
</style>
