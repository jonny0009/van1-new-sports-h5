<template>
  <div class="live-page" :class="{ 'has-bet': showFixedBet }">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-tabs
        v-model:active="navActive"
        swipeable
        sticky
        shrink
        :border="false"
        offset-top="12.8vw"
        line-height="0"
        @change="onChangeTabs"
      >
        <van-tab v-for="(nav, index) in navList" :key="index" :name="nav.type">
          <template #title>
            <div class="tab-title">
              <!-- <SvgIcon :name="nav.iconName" /> -->
              <span>{{ nav.title }} </span>
            </div>
          </template>

          <van-collapse v-model="activeNames">
            <!-- 热门视频 -->
            <van-collapse-item
              v-if="!['SORTVIDEO'].includes(navActive)"
              :is-link="false"
              class="collapse-item"
              name="HOT"
            >
              <template #title>
                <div v-if="nav.type === 'RB'" class="title-group">
                  <SvgIcon class="first-icon" name="home-hot-match" />
                  <span class="title">{{ $t('home.hotMatchTitle') }}</span>
                  <SvgIcon class="title-icon" name="home-triangle" :class="{ open: activeNames.includes('HOT') }" />
                </div>
              </template>
              <div v-if="list.length === 0 && time > 0 && navActive === 'RB'" class="next">
                <div class="img">
                  <img src="~@/assets/images/live/no_an_ma.png" alt="" />
                </div>
                <p v-html="$t('live.nextAM', { num: countTime })"></p>
              </div>

              <EmptyData v-else-if="(!loading && list.length === 0) || (list.length === 0 && time < 0 && !loading)" />
              <van-list v-model:loading="loading" :finished="!loading">
                <div class="grid-wrapper">
                  <div v-for="item in list" :key="item.gidm" class="flex-item">
                    <ListItem :item="item" @click="onItemClick(item)" />
                  </div>
                </div>
              </van-list>
            </van-collapse-item>

            <!-- 即将播放 -->
            <van-collapse-item
              v-if="comingSoonList.length && nav.type === 'RB'"
              :is-link="false"
              class="collapse-item"
              name="ComingSoon"
            >
              <template #title>
                <div class="title-group">
                  <SvgIcon class="first-icon" name="home-coming" />
                  <span class="title">{{ $t('home.comingSoonTitle') }}</span>
                  <SvgIcon
                    class="title-icon"
                    name="home-triangle"
                    :class="{ open: activeNames.includes('ComingSoon') }"
                  />
                </div>
              </template>

              <div class="grid-wrapper">
                <div v-for="item in comingSoonList" :key="item.gidm" class="flex-item">
                  <ListItem :item="item" @click="onItemClick(item)" />
                </div>
              </div>
            </van-collapse-item>

            <!-- 短视频 -->
            <van-collapse-item
              v-if="['RB'].includes(navActive) && nav.type === 'RB' && shortVideos.length"
              :is-link="false"
              class="collapse-item"
              name="VIDEO"
            >
              <template #title>
                <div class="title-group">
                  <SvgIcon class="first-icon" name="home-short-video" />
                  <span class="title">{{ $t('home.shortVideoTitle') }}</span>
                  <SvgIcon class="title-icon" :class="{ open: activeNames.includes('VIDEO') }" name="home-triangle" />
                </div>
              </template>
              <van-list
                v-if="videoLoading || shortVideos.length"
                v-model:loading="videoLoading"
                @load="getShortVideos"
                :finished="noMoreShortVideos"
                :finished-text="shortVideos.length === 0 ? '' : $t('live.noMore')"
                class="list-group video-list"
              >
                <div
                  v-for="(video, index) in shortVideos"
                  :key="index"
                  class="group-item-box"
                  @click="selectVideo(video)"
                >
                  <img v-img="video.videoImg" class="bg" :errorImg="liveBgError" type="1" alt="" />
                  <div class="video-user-info">
                    <img v-img="video.leagueIcon" type="1" alt="" />
                    <span class="name text-overflow">{{ video.leagueName || video.leagueNameCn }}</span>
                  </div>
                  <div class="video-content text-overflow-2">
                    {{ video.videoTitle }}
                  </div>
                </div>
              </van-list>
              <EmptyData v-else-if="!videoLoading" />
            </van-collapse-item>

            <!-- 短视频 -->
            <ShortVideo
              v-if="['SORTVIDEO'].includes(navActive) && nav.type === 'SORTVIDEO' && !refreshing"
              :short-videos="shortVideos"
              :video-loading="videoLoading"
              :no-more="noMoreShortVideos"
              @select-video="selectVideo"
              @on-scroll-bottom="getShortVideos"
            ></ShortVideo>
          </van-collapse>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>

    <full-screen-videos ref="FullScreenVideosRef" :short-videos="shortVideos"></full-screen-videos>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, onBeforeMount, computed, queuePostFlushCb } from 'vue'
import ListItem from './ListItem.vue'
import ShortVideo from './short-video/index.vue'
import { anchorLiveList, getVideoGreet, nextAnchorMatchDate } from '@/api/live'
import router from '@/router'
import { useI18n } from 'vue-i18n'
import store from '@/store'
import liveBgError from '@/assets/images/empty/live-bg-error.svg?url'
import FullScreenVideos from './full-screen-videos/index.vue'

onBeforeMount(() => {
  onRefresh()
})

const controller = new AbortController()
const FullScreenVideosRef = ref()
const activeNames = ref(['HOT', 'ComingSoon', 'VIDEO'])
const showFixedBet = computed(() => store.state.app.showFixedBet)
const { t } = useI18n()
const navList = computed(() => {
  const baseNavList = [
    { type: 'RB', title: t('live.hot'), iconName: 'live-hot' },
    { type: 'FT', title: t('live.football'), iconName: 'live-football' },
    { type: 'BK', title: t('live.basketball'), iconName: 'live-basketball' },
    { type: 'BS', title: t('sport.sports.BS'), iconName: 'live-basketball' },
    // { type: 'TN', title: t('live.tennisball'), iconName: 'live-tennisball' },
    // { type: 'OP_BM', title: t('live.badminton'), iconName: 'live-badminton' },
  ]
  if (shortVideos.value.length) {
    baseNavList.push({ type: 'SORTVIDEO', title: t('home.shortVideoTitle'), iconName: 'live-badminton' })
  }
  return baseNavList
})
const navActive = ref('RB')

const time = ref(-1)
const countTime = ref('')

let timer: any = ref(null)

const list: Ref<any[]> = ref([])
const loading = ref(true)
const finished = ref(false)
const refreshing = ref(false)
const onLoad = async () => {
  list.value.length = 0
  if (refreshing.value) {
    refreshing.value = false
  }
  loading.value = true

  const params: any = {
    page: 1,
    pageSize: 100
  }
  if (navActive.value === 'RB') {
    params.rbType = 1
    params.gameType = void 0
  } else {
    params.rbType = void 0
    params.gameType = navActive.value
  }
  const res: any = await anchorLiveList(params).finally(() => {
    loading.value = false
  })
  const data = res.data

  if (res.code === 200) {
    if (navActive.value === 'RB' && data.list.length === 0) {
      finished.value = true
      const res1: any = await nextAnchorMatchDate()
      if (res1.code === 200 && res1.data) {
        if (res1.data > res1.systemTime) {
          time.value = res1.data - res1.systemTime
          stopTimer()
          queuePostFlushCb(() => {
            countDownTimeNum()
          })
          return
        }
      }
      return
    }

    data.list.forEach((item: any) => {
      list.value.push(item)
    })
    finished.value = list.value.length === data.total
  } else {
    finished.value = true
  }
}
const onChangeTabs = () => {
  controller.abort()
  if (navActive.value.includes('RB')) {
    activeNames.value = ['HOT', 'ComingSoon', 'VIDEO']
  } else {
    activeNames.value = ['HOT']
  }
  onRefresh()
}

const countDownTimeNum = () => {
  timer.value = setInterval(() => {
    time.value -= 1000
    time.value === 0 && clearInterval(timer.value)
    countDown()
  }, 1000)
}

const onRefresh = () => {
  if (['SORTVIDEO'].includes(navActive.value)) {
    list.value = []
    refreshing.value = false
    if (!shortVideos.value.length) {
      getShortVideos()
    }
  } else {
    onLoad()
  }

  if (['RB'].includes(navActive.value)) {
    if (!shortVideos.value.length) {
      getShortVideos()
    }
    if (!comingSoonList.value.length) {
      comingSoon()
    }
  }
}

const onItemClick = (item: any) => {
  const query: any = {}
  if (item.anchorId) {
    query.anchorId = item.anchorId
  }
  if (item.m3u8) {
    query.m3u8 = item.m3u8
  }

  router.push({ name: 'MatchDetail', params: { id: item.gidm }, query })
  store.dispatch('app/setMatchLiveIndex', 1)
}

const countDown = () => {
  if (time.value < 0) {
    stopTimer()
    onRefresh()
    return
  }

  function addZero(i: any) {
    return i < 10 ? '0' + i : i
  }
  const timeDiff: number = Math.round(time.value / 1000)

  let hour = parseInt(`${(timeDiff / 3600) % 24}`)
  // 获取还剩多少分钟
  let minute = parseInt(`${(timeDiff / 60) % 60}`)
  // 获取还剩多少秒
  let second = timeDiff % 60

  hour = addZero(hour)
  minute = addZero(minute)
  second = addZero(second)
  countTime.value = hour + ':' + minute + ':' + second
}

// 即将播放
const comingSoonList: any = ref([])
const comingSoon = async () => {
  const res: any = await anchorLiveList({ page: 1, pageSize: 100, rbType: 2 })
  const list: any[] = res?.data?.list || []
  if (res.code === 200 && list.length) {
    comingSoonList.value = list
  }
}
// 短视频
const shortVideos: any = ref([])
const videoLoading = ref(false)
const videoTotol = ref(0)
const shortViedoParams = reactive({
  page: 0,
  pageSize: 20
})

const noMoreShortVideos = computed(() => {
  return videoTotol.value > 0 && shortViedoParams.page * shortViedoParams.pageSize >= videoTotol.value
})

const getShortVideos = async () => {
  if (noMoreShortVideos.value) {
    return false
  }
  videoLoading.value = true
  shortViedoParams.page++
  const res: any = await getVideoGreet({
    ...shortViedoParams
  }).finally(() => {
    videoLoading.value = false
  })
  const vides: any[] = res?.data?.videoData || []
  videoTotol.value = res?.data?.total || 0
  if (res.code === 200 && vides.length) {
    shortVideos.value.push(...vides)
  }
}

const selectVideo = (video: any) => {
  FullScreenVideosRef.value.fullState = true
  FullScreenVideosRef.value.videoId = video.videoId
}
const stopTimer = () => {
  clearInterval(timer.value)
  timer.value = null
}
</script>

<style lang="scss" scoped>
.collapse-item {
  :deep(.van-cell),
  :deep(.van-collapse-item__content) {
    padding: 0;

    .van-list__loading {
      margin: auto;
    }
  }
}
.live-page {
  height: 100%;
  padding-bottom: 100px;
  &.has-bet {
    padding-bottom: calc(88px + 96px);
  }
  .van-pull-refresh {
    min-height: 600px;
  }

  .van-tabs {
    :deep(.van-tabs__wrap) {
      height: 110px;
      .van-tabs__nav {
        background: var(--color-background-color);
      }
    }

    .tab-title {
      margin-right: -14px;
      height: 64px;
      padding: 0 20px;
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
      // background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      background: var(--color-global-buttonPrimaryBg);

      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }

  .grid-wrapper {
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 1fr;
    padding: 0 28px;
    margin-bottom: -20px;
    .flex-item {
      display: flex;
      justify-content: center;
      margin: 0 0 30px 0;
    }
  }

  .van-list :deep(.van-list__finished-text) {
    min-height: var(--van-list-text-line-height);
  }

  .title-group {
    display: flex;
    align-items: center;
    padding: 0 40px;
    margin: 25px auto;

    .first-icon {
      font-size: 30px;
    }

    .title {
      display: inline-block;
      margin-left: 25px;
      font-size: 32px;
      color: rgb(14, 61, 102);
    }
    .title-icon {
      display: inline-block;
      margin-left: 20px;
      font-size: 15px;

      &.open {
        transform: rotate(-180deg);
      }
    }
  }

  .list-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 35px;

    :deep(.van-list__finished-text),
    :deep(.van-list__loading) {
      width: 100%;
    }

    .group-item-box {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-shrink: 0;
      width: calc((100% - 20px) / 2);
      height: 480px;
      background-color: #ccc;
      border-radius: 8px;

      &:nth-child(odd) {
        margin-right: 20px;
      }
      &:nth-child(n + 2) {
        margin-bottom: 20px;
      }
      .bg {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        margin: auto;
        width: 100%;
        height: 100%;
        &.v-img-error {
          width: 200px;
          height: 200px;
        }
      }

      .video-user-info {
        position: relative;
        padding: 0 15px;
        display: flex;
        align-items: center;
        img {
          display: inline-block;
          width: 42px;
          height: 42px;
        }
        .name {
          display: inline-block;
          margin-left: 10px;
          font-size: 24px;
          color: #fff;
        }
      }
      .video-content {
        position: relative;
        width: 298px;
        height: 90px;
        margin: 12px auto 15px;
        padding: 11px 19px;
        border-radius: 16px;
        font-weight: 500;
        line-height: 1.6;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 24px;
        color: #fff;
      }
    }
  }
}
.next {
  text-align: center;
  padding-top: 150px;
  padding-bottom: 150px;
  img {
    width: 226px;
    height: 223px;
  }
  p {
    padding-top: 30px;
    color: var(--van-list-text-color);
  }
  :deep(.time-num) {
    color: var(--color-user-pop-up-text-color-2);
  }
}
</style>
