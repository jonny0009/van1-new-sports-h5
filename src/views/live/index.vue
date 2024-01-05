<template>
  <div class="live-page" :class="{ 'has-bet': showFixedBet }">
    <van-tabs
      v-model:active="navActive"
      swipeable
      sticky
      shrink
      offset-top="12.8vw"
      line-height="0"
      @change="onChangeTabs"
    >
      <van-tab v-for="(nav, index) in navList" :key="index" :name="nav.type">
        <template #title>
          <div class="tab-title">
            <SvgIcon :name="nav.iconName" />
            <span>{{ nav.title }}</span>
          </div>
        </template>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <EmptyData v-if="finished && list.length === 0" />
          <van-list
            v-model:loading="loading"
            :finished="finished"
            :finished-text="list.length == 0 ? '' : $t('live.noMore')"
            @load="onLoad"
          >
            <div class="grid-wrapper">
              <div class="flex-item" v-for="item in list" :key="item.gidm">
                <LiveItem :item="item" @click="onItemClick(item)" />
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
import LiveItem from './components/LiveItem.vue'
import { anchorLiveList } from '@/api/live'
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
  if (navActive.value == 'RB') {
    params.rbType = 1
  } else {
    params.gameType = navActive.value
  }
  const res: any = await anchorLiveList(params)
  const data = res.data
  if (res.code == 200) {
    data.list.forEach((item: any) => {
      list.value.push(item)
    })
    loading.value = false
    finished.value = list.value.length == data.total
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
  router.push(`/broadcast/${item.gidm}`)
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
    .flex-item {
      display: flex;
      justify-content: center;
      margin: 0 0 30px 0;
    }
  }
}
</style>
