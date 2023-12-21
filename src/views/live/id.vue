<template>
  <div class="live-page">
    <div class="match">
      <div class="match-video">
        <video ref="videoRef" class="video-js" playsinline></video>
      </div>
      <div v-if="videoWaiting" class="match-loading mask">
        <div class="icon"></div>
        <div class="text">正在拼命加载中...</div>
      </div>
      <div v-if="videoError" class="match-error mask">
        <div class="text">视频加载失败</div>
      </div>
    </div>

    <div class="tab">
      <div
        class="tab-item"
        v-for="(item, i) in navList"
        :key="i"
        :class="{ active: navActive === item.type }"
        @click="onTab(item)"
      >
        <img :src="navActive === item.type ? item.onIcon : item.unIcon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <div class="panel">
      <component :is="compsList[navActive]" :matchInfo="matchData" @more-video="onMoreVideo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import { reactive, Ref, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { matcheInfo, extendInfo } from '@/api/live'
import { getAssetsImage } from '@/utils/tools'

import TabChat from './components/TabChat/index.vue'
import TabBets from './components/TabBets/index.vue'
import TabWith from './components/TabWith/index.vue'
import TabMore from './components/TabMore/index.vue'

const route = useRoute()
const router = useRouter()
const getIcon = (name: string) => getAssetsImage(name, 'live')
const navList = reactive([
  { type: 0, name: '聊天室', unIcon: getIcon('nav_chat_un.png'), onIcon: getIcon('nav_chat_on.png') },
  { type: 1, name: '投注', unIcon: getIcon('nav_bet_un.png'), onIcon: getIcon('nav_bet_on.png') },
  { type: 2, name: '跟注', unIcon: getIcon('nav_add_un.png'), onIcon: getIcon('nav_add_on.png') },
  { type: 3, name: '更多', unIcon: getIcon('nav_more_un.png'), onIcon: getIcon('nav_more_on.png') }
])
const navActive = ref(0)
const compsList = [TabChat, TabBets, TabWith, TabMore]
const onTab = (item: any) => {
  navActive.value = item.type
}

const matchData: Ref<any> = ref({})
const getMatcheInfo = async () => {
  const gidm = route.params['id']
  const res = await matcheInfo({ gidm })
  matchData.value = res.data || {}
}

const extendData: Ref<any> = ref({})
const getExtendInfo = async () => {
  const gidm = route.params['id']
  const res: any = await extendInfo({ gidm })
  const data = res.data || {}
  extendData.value = data
  if (res.code == 200) {
    const { liveali } = data.streamNa
    videoUrl.value = liveali.m3u8
    initVideo()
  }
}

let player: any = null
const videoRef = ref<HTMLDivElement | string>('')
const videoUrl = ref(null)
const videoError = ref(false)
const videoWaiting = ref(false)
const initVideo = () => {
  const options = {
    preload: 'auto',
    width: '100%',
    height: '100%',
    autoplay: true,
    muted: true,
    controls: true,
    fluid: true,
    bigPlayButton: false,
    loadingSpinner: false,
    errorDisplay: false,
    sources: [
      {
        src: videoUrl.value,
        type: 'application/x-mpegURL'
      }
    ]
  }
  nextTick(() => {
    player = videojs(videoRef.value, options, () => {
      player.log('onPlayerReady')
    })

    player.on('waiting', () => {
      videoWaiting.value = true
    })

    player.on('playing', () => {
      videoWaiting.value = false
    })

    player.on('error', () => {
      videoError.value = true
      videoWaiting.value = false
    })
  })
}

const onMoreVideo = (item: any) => {
  videoError.value = false
  player.src(item.m3u8)
  player.load()
  player.play()
  router.replace(`/live/${item.gidm}`)
  getMatcheInfo()
}

onMounted(() => {
  getMatcheInfo()
  getExtendInfo()
})

onUnmounted(() => {
  player && player.dispose()
  player = null
})
</script>

<style lang="scss" scoped>
.live-page {
  position: relative;
  height: 100%;
  padding-bottom: calc(88px + 96px);
}

.match {
  position: relative;
  height: 440px;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-video {
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    .video-js {
      font-size: 20px;
      height: 100%;
    }
    video {
      object-fit: cover;
    }
  }

  &-loading {
    .icon {
      width: 120px;
      height: 120px;
      background: url('@/assets/images/live/ai_loading.gif') no-repeat;
      background-size: 100% auto;
    }
    .text {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 20px;
    }
  }
  &-error {
    font-size: 24px;
    .text {
      color: #f2f2f2;
    }
  }
}

.tab {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  padding: 30px 32px;
  &::-webkit-scrollbar {
    display: none;
  }
  &-item {
    min-width: 152px;
    height: 64px;
    padding: 0 20px;
    background: #eff1f2;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1f2630;
    font-size: 24px;
    font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
    font-weight: 800;
    transition: all 0.3s;
    &:not(:last-child) {
      margin-right: 16px;
    }
    > img {
      width: auto;
      height: 38px;
      margin-right: 14px;
    }
    &.active {
      background: #7643fd;
      color: #fff;
    }
  }
}

.panel {
  font-size: 24px;
}
</style>
