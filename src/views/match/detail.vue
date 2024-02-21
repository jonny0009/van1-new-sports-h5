<template>
  <div class="detail" :class="{ 'has-bet': showFixedBet }">
    <div class="match" :class="{ 'no-video': videoError }">
      <MatchVideo v-show="!videoError" :url="videoUrl" @on-error="onVideoError" />
      <MatchGame v-if="videoError" />
    </div>

    <div class="main">
      <div class="main-menu">
        <div
          v-for="(nav, i) in navList"
          :key="i"
          class="nav"
          :class="{ selected: route.path.endsWith(nav.path) }"
          @click="onNavClick(nav.path)"
        >
          <SvgIcon :name="nav.iconName" />
          <span class="label">{{ nav.title }}</span>
        </div>
      </div>
      <div class="main-view">
        <router-view v-slot="{ Component, route }">
          <component :is="getComponent(Component, route)" key="matchId" />
        </router-view>
      </div>
      <div class="main-chat">
        <div class="holder" @click="showChat = true">{{ $t('live.clickOpenChat') }}</div>
      </div>
    </div>

    <ChatRoom v-model:show="showChat" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Ref, ref, reactive, computed, onBeforeMount, watch, defineAsyncComponent, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { matcheInfo, extendInfo } from '@/api/live'
import store from '@/store'
import MatchVideo from '@/components/Match/MatchVideo.vue'
import MatchGame from '@/components/Match/MatchGame.vue'
const ChatRoom = defineAsyncComponent(() => import('./ChatRoom.vue'))

const getComponent = (Component: any, route: any) => {
  if (!Component.type.name) {
    Component.type.name = route.name
  }
  return Component
}

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const showFixedBet = computed(() => store.state.app.showFixedBet)
const paramsId = computed(() => route.params['id'])
const navList = reactive([
  { title: t('live.bet'), iconName: 'live-bet', path: 'bets' },
  // { title: t('live.betWith'), iconName: 'live-combined', path: 'with' },
  { title: t('live.stackBet'), iconName: 'live-stack', path: 'mixs' },
  { title: t('live.dataBase'), iconName: 'live-data', path: 'data' },
  { title: t('live.more'), iconName: 'live-grid', path: 'other' }
])
const onNavClick = (path: string) => {
  router.push(`/match/${paramsId.value}/${path}`)
}

const matchInfo: Ref<any> = ref({})
const getMatcheInfo = async () => {
  const gidm = paramsId.value
  const res = await matcheInfo({ gidm })
  const data = res.data || {}
  matchInfo.value = { ...data }
  if (data.detail && data.detail.length > 0) {
    const { game } = data.detail[0]
    const gameInfo = game.gameInfo || {}
    matchInfo.value.gameInfo = gameInfo
  }
  store.commit('match/SET_MATCH_INFO', matchInfo.value)
}

const videoUrl = ref('')
const videoError = ref(false)
const getExtendInfo = async () => {
  const gidm = paramsId.value
  const res: any = await extendInfo({ gidm })
  if (res.code === 200) {
    const { streamNa } = res.data || {}
    const { liveali } = streamNa || {}
    videoUrl.value = (liveali || {}).m3u8
    videoError.value = false
  } else {
    videoUrl.value = ''
    videoError.value = true
  }
}
const onVideoError = () => {
  videoError.value = true
}

const showChat = ref(false)

let intervalTimer: any = null
const startInterval = () => {
  closeInterval()
  intervalTimer = setInterval(() => {
    getMatcheInfo()
    // 切换投注不显示问题
    store.commit('match/SET_NEED_TIMER', false)
  }, 5000)
}
const closeInterval = () => {
  if (intervalTimer) {
    clearInterval(intervalTimer)
    intervalTimer = null
    store.commit('match/SET_NEED_TIMER', false)
  }
}

onBeforeMount(() => {
  getMatcheInfo()
  getExtendInfo()
  startInterval()
})

onUnmounted(() => {
  closeInterval()
})

watch(
  () => paramsId.value,
  () => {
    getMatcheInfo()
    getExtendInfo()
  }
)
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 96px 0 0 0;
  &.has-bet {
    padding-bottom: 96px;
  }

  .match {
    height: 420px;
    min-height: 420px;
    background: #000;
    position: relative;
    overflow: hidden;
    &.no-video {
      height: 280px;
      min-height: 280px;
    }
  }

  .main {
    flex: 1;
    display: flex;
    overflow: hidden;
    position: relative;
    &-menu {
      background: #fff;
      width: 90px;
      min-width: 90px;
      padding: 28px 0 0 0;
      .nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 18px 0;
        .svg-icon {
          color: var(--color-global-minButtonicoCl);
          font-size: 38px;
          margin-bottom: 6px;
        }
        .label {
          visibility: hidden;
          font-size: 20px;
        }
        &.selected {
          .svg-icon {
            color: var(--color-primary);
          }
          .label {
            color: var(--color-primary);
            visibility: visible;
          }
        }
      }
    }

    &-view {
      flex: 1;
      overflow-y: auto;
      padding-bottom: 84px;
    }

    &-chat {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      margin-left: 90px;
      display: flex;
      align-items: center;
      height: 84px;
      padding: 0 16px;
      background: var(--color-background-color);
      .holder {
        flex: 1;
        height: 64px;
        line-height: 64px;
        border-radius: 32px;
        padding: 0 28px;
        font-size: 24px;
        color: var(--van-text-color-3);
        background: var(--color-live-chat-field-bg);
      }
    }
  }
}
</style>
