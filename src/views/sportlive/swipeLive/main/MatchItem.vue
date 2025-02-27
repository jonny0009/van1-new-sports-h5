<template>
  <div class="match-item-wrap" :style="{ backgroundImage: `url(${cover})` }">
    <video-box
      v-if="showVideoBox"
      :live-url="liveInfo.m3u8 || m3u8Str"
      :live-info="liveInfo"
      :controls="false"
      @refresh="refresh"
    />
    <div class="video-footer">
      <SportsIcon class="SportsIcon" :icon-src="liveInfo.gameType" />
      <div class="leagueName text-overflow">
        {{ liveInfo.leagueShortName || liveInfo.leagueName }}
      </div>
      <div class="flex-1"></div>
      <div class="time" v-html="setMatch.showRBTime(liveInfo)"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, onBeforeMount, nextTick } from 'vue'
import { extendInfo } from '@/api/live'
import { liveVideo } from '@/utils'
import { useMatch } from '@/utils/useMatch'
const setMatch: any = useMatch()

import VideoBox from './child/VideoBox.vue'
import coverFt from './child/assets/ft.jpg'
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
  return coverFt
})

watch(
  () => props.activeIndex,
  () => {
    if (props.activeIndex === props.matchIndex) {
      refresh()
    } else {
      showVideoBox.value = false
    }
  }
)
watch(
  () => props.liveInfo.gidm,
  () => {
    getVideoInfo()
  }
)

onBeforeMount(() => {
  getVideoInfo()
})
const m3u8Str = ref('')
const getVideoInfo = async () => {
  const gidm = props.liveInfo.gidm
  const res: any = await extendInfo({ gidm })
  if (res.code === 200) {
    const { streamNaList }: any = res.data
    const m3u8 = liveVideo(streamNaList)
    // extend 返回的源加载特别慢 用另一个接口返回的m3u8
    m3u8Str.value = props.liveInfo.m3u8 || m3u8
  }
}

const showVideoBox = ref(false)
const refresh = () => {
  showVideoBox.value = false
  nextTick(() => {
    showVideoBox.value = true
  })
}

const showVideo = () => {
  if (props.activeIndex === props.matchIndex) {
    refresh()
  } else {
    showVideoBox.value = false
  }
}

onBeforeMount(() => {
  showVideo()
})
</script>
<style lang="scss" scoped>
.match-item-wrap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url('@/assets/images/sportlive/cover.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  .video-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    display: flex;
    height: 50px;
    line-height: 50px;
    background: #000;
    padding: 0 72px 0 14px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    .SportsIcon {
      height: 20px;
      font-size: 20px;
      margin-top: 14px;
      margin-right: 10px;
    }
    .leagueName {
      font-size: 20px;
      max-width: 120px;
    }
    .time {
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
