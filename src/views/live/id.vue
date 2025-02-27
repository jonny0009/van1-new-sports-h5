<template>
  <div class="live-page" :class="{ 'has-bet': showFixedBet }">
    <div v-if="videoUrl?.endsWith('html')" class="match">
      <iframe :src="videoUrl" width="100%" height="100%" frameborder="0"></iframe>
    </div>

    <div v-show="!videoUrl?.endsWith('html')" class="match" :class="{ 'no-vid': videoError }">
      <div v-show="!videoError" class="match-video">
        <video ref="videoRef" class="video-js" playsinline webkit-playsinline x5-video-player-type></video>
        <div class="mask-loading" v-if="videoWaiting">
          <div class="icon"></div>
          <div class="text">{{ $t('live.effLoading') }}...</div>
        </div>
      </div>
      <MatchGame v-if="videoError" :matchInfo="matchData" />
    </div>

    <van-tabs v-model:active="navActive" swipeable shrink line-height="0" @change="onTabChange">
      <van-tab v-for="(nav, index) in navList">
        <template #title>
          <div class="tab-title">
            <SvgIcon :name="nav.iconName" />
            <span>{{ nav.title }}</span>
          </div>
        </template>

        <component
          v-if="navActive == index"
          :is="compsList[navActive]"
          :matchInfo="matchData"
          @more-video="onMoreVideo"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import { reactive, Ref, ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { matcheInfo, extendInfo } from '@/api/live'
import TabChat from './components/TabChat/index.vue'
import TabBets from './components/TabBets/index.vue'
import TabWith from './components/TabWith/index.vue'
import TabMore from './components/TabMore/index.vue'
import MatchGame from './components/MatchGame.vue'
import { useI18n } from 'vue-i18n'
import store from '@/store'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const navList = reactive([
  { title: t('live.chatroom'), iconName: 'live-chat' },
  { title: t('live.bet'), iconName: 'live-bet' },
  { title: t('live.betWith'), iconName: 'live-bet_add' },
  { title: t('live.more'), iconName: 'live-grid' }
])
const navActive = ref(0)
const compsList = [TabChat, TabBets, TabWith, TabMore]
const showFixedBet = computed(() => store.state.app.showFixedBet)

const matchData: Ref<any> = ref({})
const getMatcheInfo = async (gidm = route.params['id']) => {
  const res = await matcheInfo({ gidm })
  const data = res.data || {}
  matchData.value = { ...data }
  if (data.detail && data.detail.length > 0) {
    const { game } = data.detail[0]
    const gameInfo = game.gameInfo || {}
    matchData.value.gameInfo = gameInfo
  }
}

const extendData: Ref<any> = ref({})
const getExtendInfo = async () => {
  const gidm = route.params['id']
  const res: any = await extendInfo({ gidm })
  if (res.code == 200) {
    extendData.value = res.data
    initVideo()
  } else {
    extendData.value = null
    videoError.value = true
  }
}

let player: any = null
const videoRef = ref<HTMLDivElement | string>('')
const videoUrl: any = ref(null)
const videoError = ref(false)
const videoWaiting = ref(false)
const videoIsInpicture = ref(false)
const initVideo = () => {
  const { streamNa } = extendData.value
  const { liveali } = streamNa || {}
  videoUrl.value = (liveali || {}).m3u8
  const options = {
    preload: 'auto',
    width: '100%',
    height: '100%',
    autoplay: true,
    muted: false,
    controls: true,
    fluid: true,
    bigPlayButton: false,
    loadingSpinner: false,
    errorDisplay: false,
    sources: [
      {
        src: videoUrl.value,
        type: 'application/x-mpegURL'
        // src: '//vjs.zencdn.net/v/oceans.mp4',
        // type: 'video/mp4'
      }
    ]
  }
  nextTick(() => {
    player = videojs(videoRef.value, options, () => {
      player.log('onPlayerReady')
      const videoPip = document.pictureInPictureElement
      if (videoPip) {
        player.exitPictureInPicture().then(() => {
          player.log('画中画模式已关闭')
        })
      }
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

    player.on('enterpictureinpicture', () => {
      videoIsInpicture.value = true
      store.commit('app/SET_PIP_GIDM', route.params['id'])
    })

    player.on('leavepictureinpicture', () => {
      videoIsInpicture.value = false

      if (route.name !== 'MatchDetail') {
        const gidm = store.state.app.pictureinpictureGidm
        router.push(`/match/${gidm}`)
      }
    })
  })
}
const disposePlayer = () => {
  if (!videoIsInpicture.value) {
    player && player.dispose()
    player = null
  }
}

const onMoreVideo = (item: any) => {
  unInterval()
  videoError.value = false
  navActive.value = 0
  player?.src(item.m3u8)
  player?.load()
  player?.play()
  router.replace(`/match/${item.gidm}`)
  getMatcheInfo(item.gidm)
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

const onTabChange = (index: number) => {
  if (index == 0) {
    unInterval()
  } else {
    onInterval()
  }
  getMatcheInfo()
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  getMatcheInfo()
  getExtendInfo()
})

onUnmounted(() => {
  document.body.removeAttribute('style')
  unInterval()
  disposePlayer()
})
</script>

<style lang="scss" scoped>
.live-page {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 96px 0 88px 0;
  &.has-bet {
    padding-bottom: calc(88px + 96px);
  }

  .van-tabs {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    :deep(.van-tabs__wrap) {
      height: 110px;
      min-height: 110px;
      .van-tabs__nav {
        background: var(--color-background-color);
      }
    }
    :deep(.van-tabs__content) {
      flex: 1;
      .van-tab__panel {
        height: 100%;
        overflow-y: auto;
      }
    }

    .tab-title {
      min-width: 152px;
      height: 64px;
      padding: 0 20px;
      margin: 0 -10px;
      background: var(--color-global-buttonBg);
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-2);
      font-size: 24px;
      font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
      font-weight: 800;
      transition: all 0.3s;
      .svg-icon {
        font-size: 38px;
        margin-right: 14px;
        color: var(--color-global-minButtonicoCl);
      }
    }
    .van-tab--active .tab-title {
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }
}

.match {
  position: relative;
  background: #000;
  min-height: 440px;
  height: 440px;
  &.no-vid {
    min-height: 280px;
    height: 280px;
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
      width: 300px;
      height: 100px;
      background: url('@/assets/images/live/v_loading.png') no-repeat;
      background-size: 100% auto;
    }
    .text {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 20px;
    }
  }
}

// .tab {
//   width: 100%;
//   height: 120px;
//   overflow-x: auto;
//   overflow-y: hidden;
//   white-space: nowrap;
//   display: flex;
//   align-items: center;
//   padding: 0 32px;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   &-item {
//     height: 64px;
//     padding: 0 20px;
//     background: #eff1f2;
//     border-radius: 32px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #1f2630;
//     font-size: 24px;
//     font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
//     font-weight: 800;
//     transition: all 0.3s;
//     &:not(:last-child) {
//       margin-right: 16px;
//     }
//     > img {
//       width: auto;
//       height: 38px;
//       margin-right: 14px;
//     }
//     &.active {
//       background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
//       color: #fff;
//     }
//   }
// }
</style>
