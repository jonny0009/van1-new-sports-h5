<template>
  <div class="live-page">
    <div class="navbar">
      <div
        class="navbar-item"
        v-for="(item, i) in navList"
        :key="i"
        :class="{ active: navActive === item.num }"
        @click="onNav(item)"
      >
        <img v-if="item.num == 0" src="@/assets/images/live/icon_hot_on.png" alt="" />
        <SvgIcon v-else :name="item.iconName" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <div class="wrapper">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="live-item" v-for="(item, i) in list" :key="i">
          <LiveItem :item="item" @click="onItem(item)" />
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue'
import LiveItem from './components/LiveItem.vue'
import router from '@/router'

// const getImage = (name: string) => {
//   return new URL(`/src/assets/images/live/${name}`, import.meta.url).href
// }

const list: Ref<Object[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push({})
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
const onItem = (item: any) => {
  console.log(item)
  router.push(`/live/1234`)
}

const navList = reactive([
  { num: 0, name: '热播', iconName: '' },
  { num: 1, name: '足球', iconName: 'live-football' },
  { num: 2, name: '篮球', iconName: 'live-basketball' },
  { num: 3, name: '网球', iconName: 'live-tennisball' },
  { num: 4, name: '羽毛球', iconName: 'live-badminton' }
])
const navActive = ref(0)
const onNav = (item: any) => {
  navActive.value = item.num
  loading.value = true
  list.value = []
  onLoad()
}
</script>

<style lang="scss" scoped>
.live-page {
  height: 100%;
  padding: 30px 0 88px 0;
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
