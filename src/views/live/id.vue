<template>
  <div class="live-page">
    <div class="video">
      <video ref="videoRef" class="video-js" playsinline></video>
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
      <component :is="compsList[navActive]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import TabChat from './components/TabChat.vue'
import TabBet from './components/TabBet.vue'
import TabWith from './components/TabWith.vue'
import TabMore from './components/TabMore.vue'
import { matcheInfo, extendInfo } from '@/api/live'

const route = useRoute()

const getImage = (name: string) => {
  return new URL(`/src/assets/images/live/${name}`, import.meta.url).href
}

const navList = reactive([
  { type: 0, name: '聊天室', unIcon: getImage('nav_chat_un.png'), onIcon: getImage('nav_chat_on.png') },
  { type: 1, name: '投注', unIcon: getImage('nav_bet_un.png'), onIcon: getImage('nav_bet_on.png') },
  { type: 2, name: '跟注', unIcon: getImage('nav_add_un.png'), onIcon: getImage('nav_add_on.png') },
  { type: 3, name: '更多', unIcon: getImage('nav_more_un.png'), onIcon: getImage('nav_more_on.png') }
])
const navActive = ref(2)
const compsList = [TabChat, TabBet, TabWith, TabMore]
const onTab = (item: any) => {
  navActive.value = item.type
}

let player: any = null
const videoRef = ref<HTMLDivElement | string>('')
const videoUrl = ref(null)
const initVideo = () => {
  const options = {
    language: 'zh-CN',
    preload: 'metadata',
    width: '100%',
    height: '100%',
    autoplay: 'muted',
    controls: true,
    fluid: true,
    sources: [
      {
        src: videoUrl.value,
        type: 'application/x-mpegURL'
      }
    ]
  }
  player = videojs(videoRef.value, options, () => {
    player.log('onPlayerReady')
  })
}

const getMatcheInfo = async () => {
  const gidm = route.params['id']
  await matcheInfo({ gidm })
}

const getExtendInfo = async () => {
  const gidm = route.params['id']
  const res: any = await extendInfo({ gidm })
  const data = res.data || {}
  if (res.code == 200) {
    const { liveali } = data.streamNa
    videoUrl.value = liveali.m3u8
    initVideo()
  }
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

.video {
  width: 100%;
  height: 440px;
  background: #000;
  display: flex;
  align-items: center;
  // video {
  //   object-fit: fill;
  // }
  .video-js {
    font-size: 20px;
    height: 100%;
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
