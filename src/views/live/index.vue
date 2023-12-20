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
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="live-item" v-for="(item, i) in list" :key="i">
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

const navList = reactive([
  { type: 'RB', name: '热播', iconName: 'live-hot' },
  { type: 'FT', name: '足球', iconName: 'live-football' },
  { type: 'BK', name: '篮球', iconName: 'live-basketball' },
  { type: 'TN', name: '网球', iconName: 'live-tennisball' },
  { type: 'OP_BM', name: '羽毛球', iconName: 'live-badminton' }
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
const list: Ref<Object[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    pageSize: 20
    // rbType: '',
    // gameType: '',
    // videoType: 2
  }
  if (navActive.value == 'RB') {
    params.videoType = 2
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
  }
}

const onItemClick = (item: any) => {
  router.push(`/live/${item.gidm}`)
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
      margin-right: 8px;
    }
    .svg-icon {
      font-size: 38px;
      margin-right: 14px;
      color: #999;
    }
    > img {
      width: auto;
      height: 38px;
      margin-right: 14px;
    }
    &.active {
      background: #7643fd;
      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }
}
.wrapper {
  padding: 0 0 0 25px;
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
