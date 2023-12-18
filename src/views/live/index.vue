<template>
  <div class="live-page">
    <div class="tab">
      <div class="tab-item" v-for="(item, i) in tabList" :key="i" :class="{ active: tabActive === item.value }">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <div class="wrapper">
      <div class="live-item" v-for="item in 23" :key="item">
        <LiveItem :item="{}" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import LiveItem from './components/LiveItem.vue'

const tabList = reactive([
  { value: 1, name: '热门', icon: getImage('icon_hot_on.png') },
  { value: 2, name: '足球', icon: getImage('icon_bask_un.png') },
  { value: 3, name: '篮球', icon: getImage('icon_bask_un.png') },
  { value: 4, name: '网球', icon: getImage('icon_tens_un.png') },
  { value: 4, name: '网球', icon: getImage('icon_tens_un.png') },
  { value: 4, name: '网球', icon: getImage('icon_tens_un.png') }
])
const tabActive = ref(1)

function getImage(name: string) {
  return new URL(`/src/assets/images/live/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.live-page {
  height: 100%;
  overflow-y: auto;
}
.tab {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  padding: 0 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  &-item {
    min-width: 76px;
    height: 32px;
    padding: 0 5px;
    background: #eff1f2;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1f2630;
    font-size: 12px;
    font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
    font-weight: 800;
    transition: all 0.3s;
    &:not(:last-child) {
      margin-right: 8px;
    }
    > img {
      width: 18px;
      margin-right: 7px;
    }
    &.active {
      background: #7643fd;
      color: #fff;
    }
  }
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px 0 10px;
  .live-item {
    margin: 0 5px;
    margin-top: 15px;
  }
}
</style>
