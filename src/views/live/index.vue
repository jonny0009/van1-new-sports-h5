<template>
  <div class="live-page">
    <div class="navbar">
      <div
        class="navbar-item"
        v-for="(item, i) in navList"
        :key="i"
        :class="{ active: navActive === item.type }"
        @click="onNavClick(item)"
      >
        <SvgIcon :name="item.iconName" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <div class="wrapper">
      <div class="no-data" v-if="finished && list.length === 0">
        <EmptyIcon />
      </div>
      <van-list v-model:loading="loading" :finished="finished" :finished-text="t('live.noMore')" @load="onLoad">
        <div class="live-item" v-for="item in list" :key="item.gidm">
          <LiveItem :item="item" @click="onItemClick(item)" />
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, onMounted } from 'vue'
import LiveItem from './components/LiveItem.vue'
import { anchorLiveList } from '@/api/live'
import router from '@/router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const navList = reactive([
  { type: 'RB', name: t('live.hot'), iconName: 'live-hot' },
  { type: 'FT', name: t('live.football'), iconName: 'live-football' },
  { type: 'BK', name: t('live.basketball'), iconName: 'live-basketball' },
  { type: 'TN', name: t('live.tennisball'), iconName: 'live-tennisball' },
  { type: 'OP_BM', name: t('live.badminton'), iconName: 'live-badminton' }
])
const navActive = ref('RB')
const onNavClick = (item: any) => {
  navActive.value = item.type
  finished.value = false
  loading.value = true
  list.value = []
  page = 0
  onLoad()
}

let page: number = 0
const list: Ref<any[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    pageSize: 20
  }
  if (navActive.value == 'RB') {
    params.rbType = 1
  } else {
    params.videoType = 2
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

const onItemClick = (item: any) => {
  router.push(`/broadcast/${item.gidm}`)
}

onMounted(() => {})
</script>

<style lang="scss" scoped>
.live-page {
  height: 100%;
  padding-top: 30px;
  padding-bottom: calc(88px + 96px);
}
.navbar {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  padding: 0 32px;
  margin: 0 0 10px 0;
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
    color: #0e3d66;
    font-size: 24px;
    font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
    font-weight: 800;
    transition: all 0.3s;
    &:not(:last-child) {
      margin-right: 8px;
    }
    .svg-icon {
      font-size: 38px;
      margin-right: 14px;
      color: #88a6bb;
    }
    > img {
      width: auto;
      height: 38px;
      margin-right: 14px;
    }
    &.active {
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }
}
.wrapper {
  padding: 0 0 0 25px;
  .no-data {
    display: flex;
    justify-content: center;
    padding: 50px 0 0 0;
  }
  .van-list {
    display: flex;
    flex-wrap: wrap;
    :deep(.van-list__loading),
    :deep(.van-list__finished-text) {
      width: 100%;
    }
  }
  .live-item {
    margin: 0 10px;
    margin-top: 30px;
  }
}
</style>
