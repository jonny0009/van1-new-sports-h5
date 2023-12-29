<template>
  <div class="live-page">
    <div class="match">
      <div v-show="!videoError" class="match-video">
        <video ref="videoRef" class="video-js" playsinline webkit-playsinline x5-video-player-type></video>
        <div class="mask-loading" v-if="videoWaiting">
          <div class="icon"></div>
          <div class="text">{{ $t('live.effLoading') }}...</div>
        </div>
      </div>
      <MatchGame v-if="videoError" :matchInfo="matchData" />
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
import MatchGame from './components/MatchGame.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const getIcon = (name: string) => getAssetsImage(name, 'live')
const navList = reactive([
  { type: 0, name: t('live.chatroom'), unIcon: getIcon('nav_chat_un.png'), onIcon: getIcon('nav_chat_on.png') },
  { type: 1, name: t('live.bet'), unIcon: getIcon('nav_bet_un.png'), onIcon: getIcon('nav_bet_on.png') },
  { type: 2, name: t('live.betWith'), unIcon: getIcon('nav_add_un.png'), onIcon: getIcon('nav_add_on.png') },
  { type: 3, name: t('live.more'), unIcon: getIcon('nav_more_un.png'), onIcon: getIcon('nav_more_on.png') }
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
  if (res.code == 200) {
    extendData.value = res.data
    initVideo()
  } else {
    extendData.value = {}
    videoError.value = true
  }
}

let player: any = null
const videoRef = ref<HTMLDivElement | string>('')
const videoUrl = ref(null)
const videoError = ref(false)
const videoWaiting = ref(false)
const initVideo = () => {
  const { streamNa } = extendData.value
  const { liveali } = streamNa || {}
  videoUrl.value = (liveali || {}).m3u8
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
  navActive.value = 0
  player.src(item.m3u8)
  player.load()
  player.play()
  router.replace(`/live/${item.gidm}`)
  getMatcheInfo()
}

let intervalTimer: any = null
const onInterval = () => {
  unInterval()
  intervalTimer = setInterval(() => {
    getMatcheInfo()
  }, 5000)
}
const unInterval = () => {
  if (intervalTimer) {
    clearInterval(intervalTimer)
    intervalTimer = null
  }
}

onMounted(() => {
  onInterval()
  getMatcheInfo()
  getExtendInfo()
})

onUnmounted(() => {
  unInterval()
  player && player.dispose()
  player = null
})
</script>

<style lang="scss" scoped>
.live-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - (96px + 88px));
  padding: 0;
  .panel {
    overflow-y: auto;
    font-size: 24px;
    flex: 1;
  }
}

.match {
  position: relative;
  min-height: 280px;
  &-video {
    width: 100%;
    height: 440px;
    background: #000;
    display: flex;
    align-items: center;
    .video-js {
      font-size: 20px;
      height: 100%;
      video {
        object-fit: cover;
      }
    }
  }
  .mask-loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
}

.tab {
  width: 100%;
  height: 120px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 0 32px;
  &::-webkit-scrollbar {
    display: none;
  }
  &-item {
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
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
    }
  }
}
</style>
