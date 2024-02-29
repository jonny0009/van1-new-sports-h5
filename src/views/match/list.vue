<template>
  <div
    class="live-page"
    :class="{ 'has-bet': showFixedBet }"
  >

    <van-tabs
      v-model:active="navActive"
      swipeable
      sticky
      shrink
      offset-top="12.8vw"
      line-height="0"
      @change="onChangeTabs"
    >
      <van-tab
        v-for="(nav, index) in navList"
        :key="index"
        :name="nav.type"
      >
        <template #title>
          <div class="tab-title">
            <SvgIcon :name="nav.iconName" />
            <span>{{ nav.title }}</span>
          </div>
        </template>

        <div v-if="list.length === 0 && time > 0" class="next">
          <div class="img">
            <img
              src="~@/assets/images/live/no_an_ma.png"
              alt=""
            >
          </div>
          <p v-html="$t('live.nextAM',{num: countTime})">
          </p>
        </div>

        <van-pull-refresh
          v-if="time <= 0"
          v-model="refreshing"
          @refresh="onRefresh"
        >

          <EmptyData v-if="finished && list.length === 0" />
          <van-list
            v-model:loading="loading"
            :finished="finished"
            :finished-text="list.length == 0 ? '' : $t('live.noMore')"
            @load="onLoad"
          >
            <div class="grid-wrapper">
              <div
                v-for="item in list"
                :key="item.gidm"
                class="flex-item"
              >
                <ListItem
                  :item="item"
                  @click="onItemClick(item)"
                />
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, onMounted, computed } from 'vue'
import ListItem from './ListItem.vue'
import { anchorLiveList, nextAnchorMatchDate } from '@/api/live'
import router from '@/router'
import { useI18n } from 'vue-i18n'
import store from '@/store'

onMounted(() => {})

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
  page++
  const params: any = {
    page: page,
    pageSize: 20
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
    if (data.list.length === 0) {
      const res1: any = await nextAnchorMatchDate()
      if (res1.code === 200 && res1.data) {
        finished.value = true
        time.value = res1.data - new Date().getTime()
        setInterval(() => {
          time.value -= 1
          if (time.value <= 0) {
            onRefresh()
          }
          countDown()
        }, 1000)
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
  loading.value = true
  onLoad()
}

const onChangeTabs = () => {
  refreshing.value = true
  onRefresh()
}

const onItemClick = (item: any) => {
  router.push(`/match/${item.gidm}`)
}

const countDown = () => {
  function addZero(i: any) {
    return i < 10 ? '0' + i : i
  }
  const leftTime = time.value
  let hour = parseInt((leftTime / (60 * 60)) % 24)
  let minute = parseInt((leftTime / 60) % 60)
  let second = parseInt(leftTime % 60)

  hour = addZero(hour)
  minute = addZero(minute)
  second = addZero(second)
  countTime.value = hour + ':' + minute + ':' + second
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
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
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
