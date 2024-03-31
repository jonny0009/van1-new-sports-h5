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
              <SvgIcon :name="nav.iconName" />
              <span>{{ nav.title }} </span>
            </div>
          </template>
          <div class="title-group">
            <SvgIcon class="first-icon" name="home-hot-match" />
            <span class="title">{{ $t('home.hotMatchTitle') }}</span>
            <SvgIcon class="title-icon" name="home-triangle" />
          </div>
          <div v-if="list.length === 0 && time > 0 && navActive === 'RB'" class="next">
            <div class="img">
              <img src="~@/assets/images/live/no_an_ma.png" alt="" />
            </div>
            <p v-html="$t('live.nextAM', { num: countTime })"></p>
          </div>

          <div>
            <EmptyData
              v-if="
                (finished && list.length === 0 && navActive !== 'RB') ||
                (list.length === 0 && time < 0 && navActive === 'RB' && finished)
              "
            />
            <van-list v-model:loading="loading" :finished="true">
              <div class="grid-wrapper">
                <div v-for="item in list" :key="item.gidm" class="flex-item">
                  <ListItem :item="item" @click="onItemClick(item)" />
                </div>
              </div>
            </van-list>
          </div>
        </van-tab>
      </van-tabs>
      <template v-if="comingSoonList.length">
        <div class="title-group">
          <SvgIcon class="first-icon" name="home-coming" />
          <span class="title">{{ $t('home.comingSoonTitle') }}</span>
          <SvgIcon class="title-icon" name="home-triangle" />
        </div>
        <div class="grid-wrapper">
          <div v-for="item in comingSoonList" :key="item.gidm" class="flex-item">
            <ListItem :item="item" @click="onItemClick(item)" />
          </div>
        </div>
      </template>
      <div class="title-group">
        <SvgIcon class="first-icon" name="home-short-video" />
        <span class="title">{{ $t('home.shortVideoTitle') }}</span>
        <SvgIcon class="title-icon" name="home-triangle" />
      </div>
      <div class="list-group">
        <div class="group-item-box" v-for="(video, index) in shortVideos" :key="index" @click="goShortVideo(video)">
          <img v-img="video.videoImg" class="bg" :errorImg="liveBgError" type="1" alt="" />
          <div class="video-user-info">
            <img v-img="video.leagueIcon" type="1" alt="" />
            <span class="name text-overflow">{{ video.leagueName || video.leagueNameCn }}</span>
          </div>
          <div class="video-content text-overflow-2">
            {{ video.videoTitle }}
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, onBeforeMount, computed } from 'vue'
import ListItem from './ListItem.vue'
import { anchorLiveList, getVideoGreet, nextAnchorMatchDate } from '@/api/live'
import router from '@/router'
import { useI18n } from 'vue-i18n'
import store from '@/store'
import liveBgError from '@/assets/images/empty/live-bg-error.svg?url'
onBeforeMount(() => {
  onRefresh()
  getShortVideos()
  comingSoon()
})

const showFixedBet = computed(() => store.state.app.showFixedBet)
const { t } = useI18n()
const navList = reactive([
  { type: 'RB', title: t('live.hot'), iconName: 'live-hot' },
  { type: 'FT', title: t('live.football'), iconName: 'live-football' },
  { type: 'BK', title: t('live.basketball'), iconName: 'live-basketball' },
  { type: 'TN', title: t('live.tennisball'), iconName: 'live-tennisball' },
  { type: 'OP_BM', title: t('live.badminton'), iconName: 'live-badminton' }
])
const navActive = ref('RB')

const time = ref(-1)
const countTime = ref('')

let timer: any = reactive({})

let page: number = 0
const list: Ref<any[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const onLoad = async () => {
  if (refreshing.value) {
    list.value = []
    refreshing.value = false
  }
  if (time.value > 0 && navActive.value === 'RB') {
    loading.value = false
    return
  }

  page++
  const params: any = {
    page: page,
    pageSize: 4
  }
  if (navActive.value === 'RB') {
    params.rbType = 1
  } else {
    params.gameType = navActive.value
  }
  const res: any = await anchorLiveList(params)
  const data = res.data
  loading.value = false

  if (res.code === 200) {
    if (navActive.value === 'RB' && data.list.length === 0) {
      finished.value = true
      const res1: any = await nextAnchorMatchDate()
      if (res1.code === 200 && res1.data) {
        if (res1.data > res1.systemTime) {
          time.value = res1.data - res1.systemTime
          timer = setInterval(() => {
            time.value -= 1000
            time.value === 0 && clearInterval(timer)
            countDown()
          }, 1000)
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

const onRefresh = () => {
  page = 0
  finished.value = false
  // loading.value = true
  onLoad()
  getShortVideos()
  comingSoon()
}

const onChangeTabs = () => {
  refreshing.value = true
  onRefresh()
}

const onItemClick = (item: any) => {
  router.push(`/match/${item.gidm}`)
  store.dispatch('app/setMatchLiveIndex', 1)
}

const countDown = () => {
  if (time.value < 0) {
    clearInterval(timer)
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
  const res: any = await anchorLiveList({ page: 1, pageSize: 2, rbType: 2 })
  const list: any[] = res?.data?.list || []
  if (res.code === 200 && list.length) {
    comingSoonList.value = list
  }
}
// 短视频
const shortVideos: any = ref([])
const getShortVideos = async () => {
  const res: any = await getVideoGreet({
    page: 1,
    pageSize: 4
  })
  const vides: any[] = res?.data?.videoData || []
  if (res.code === 200 && vides.length) {
    shortVideos.value = vides
  }
}

const goShortVideo = (video: any) => {
  router.push({
    name: 'ShortVideo',
    params: {
      videoId: video.videoId
    }
  })
}
</script>

<style lang="scss" scoped>
.live-page {
  height: 100%;
  padding-bottom: 88px;
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
    }
  }

  .list-group {
    display: flex;
    flex-wrap: wrap;
    padding: 0 35px;
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
      }

      .video-user-info {
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
