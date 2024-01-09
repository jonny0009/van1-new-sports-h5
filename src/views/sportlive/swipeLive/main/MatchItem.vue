<template>
  <div class="match-item-wrap" :style="{ backgroundImage: `url(${cover})` }">
    <video-box
      v-if="m3u8 && refreshState"
      :live-url="liveInfo.m3u8 || liveInfo.url"
      :controls="false"
      @refresh="refresh"
    />
    <div class="video-footer">
      <SportsIcon class="SportsIcon" :icon-src="liveInfo.gameType" />
      <div class="leagueName">
        {{ liveInfo.leagueShortName || liveInfo.leagueName }}
      </div>
      <div class="flex-1"></div>
      <div class="time" v-html="setMatch.showRBTime(matchInfo)"></div>
    </div>
  </div>
</template>
<script  lang="ts" setup>
import { useMatch } from '@/utils/useMatch'
const setMatch: any = useMatch()
import VideoBox from './child/VideoBox'
import coverDj from './child/assets/dj.jpg'
import coverFt from './child/assets/ft.jpg'
import coverBk from './child/assets/bk.jpg'
import { imgUrlFormat } from '@/utils/index'
import { ref, computed, watch, onBeforeMount, nextTick } from 'vue'

const props = defineProps({
  liveInfo: {
    type: Object,
    default: () => {}
  },
  matchIndex: {
    type: Number,
    default: 0
  },
  activeIndex: {
    type: Number,
    default: 0
  }
})

const cover = computed(() => {
  if (props.liveInfo.recommendType * 1 === 2 && props.liveInfo?.cover) {
    return imgUrlFormat(props.liveInfo.cover)
  }
  const { gameType }:any = matchInfo
  if (gameType === 'FT') {
    return coverFt
  }
  if (gameType === 'BK') {
    return coverBk
  }
  return coverDj
})

const matchInfo = computed(() => {
  return props.liveInfo.gameBasic || {}
})

const m3u8 = computed(() => {
  return props.liveInfo.m3u8
})

watch(() => props.liveInfo, () => { init() })

onBeforeMount(() => {
  init()
})

const init = () => {
  refresh()
}

const refreshState = ref(false)
const refresh = () => {
  if (m3u8.value) {
    refreshState.value = false
    nextTick(() => {
      refreshState.value = true
    })
  }
}

</script>
<style lang="scss" scoped>
.match-item-wrap {
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  background: url(~@/assets/images/sportlive/cover.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  .video-footer{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    display: flex;
    height: 36px;
    line-height: 36px;
    background: #000;
    padding: 0 72px 0 14px;
    .SportsIcon{
      height: 20px;
      font-size: 20px;
      margin-top: 8px;
      margin-right: 10px;
    }
    .leagueName{
      font-size: 20px;
    }
    .time{
      font-size: 20px;
    }
  }
  .live-info-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }
  .anchor-info-wrap {
    .anchor-info {
      display: inline-block;
      position: relative;
      height: 24px;
      line-height: 24px;
      padding-left: 25px;
      padding-right: 8px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 18px;
      .anchor-avatar {
        position: absolute;
        left: 1px;
        top: 1px;
        width: 22px;
        height: 22px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .anchor-name {
        max-width: 200px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 400;
      }
    }
  }
  .free-live-content {
    font-size: 12px;
    color: #ffffff;
    line-height: 18px;
    font-weight: 400;
    padding: 0 3px;
  }
  .match-bets-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .match-info {
      display: flex;
      align-items: center;
      overflow: hidden;
      .team-name {
        max-width: 96px;
        font-size: 24px;
        color: #ffffff;
        font-weight: 500;
        &.right {
          text-align: right;
        }
        &.left {
          text-align: left;
        }
      }
      .team-score {
        min-width: 30px;
        font-size: 14px;
        color: #ff4657;
        text-align: center;
        font-weight: 800;
        padding: 0 2px;
      }
    }
  }
  .bets-info {
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 360px;
    .bet-item {
      flex: 1;
      display: flex;
      align-items: center;
      width: 116px;
      height: 24px;
      padding: 8px 4px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      overflow: hidden;
      &:not(:first-child) {
        margin-left: 8px;
      }
      .bet-name {
        flex: 1;
        font-size: 24px;
        color: #ffffff;
        font-weight: 400;
      }
      .bet-ior {
        font-size: 22px;
        color: #ffffff;
        text-align: center;
        font-weight: 800;
      }
    }
  }
}
</style>
