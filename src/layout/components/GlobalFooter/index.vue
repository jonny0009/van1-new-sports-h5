<template>
  <div class="global-bar-footer has-border">
    <div
      v-for="(item, idx) in barFooterArr"
      :key="idx"
      :class="{ 'active': item.value === active }"
      class="item"
      @click="clickChangeActive(item)"
    >
      <template v-if="item.value === 'game'">
        <img v-if="active === 'game'" class="img" :src="game" style="object-fit: contain;" />
        <img v-else :src="gameDefault" class="img" style="object-fit: contain;" />
      </template>
      <template v-else>
        <i v-if="item.value === 'live'" class="iconfont icon-live"></i>
        <i v-else class="iconfont icon-sports"></i>
      </template>
      <span>
        {{ item.text }}
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import gameDefault from '@/assets/images/globalLayout/footer/game-default.png'
import game from '@/assets/images/globalLayout/footer/game.png'
import { ref, reactive } from 'vue'
import router from '@/router'
const getRouteName = () => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  return routerName.toLowerCase()
}
const barFooterArrayChange = (): Array<any> => {
  const barFooterArray = [
    {
      text: '直播',
      value: 'live'
    },
    {
      text: '体育',
      value: 'home'
    },
    {
      text: '赌场',
      value: 'game'
    }
  ]
  return barFooterArray
}
const barFooterArr: any = reactive(barFooterArrayChange())
const active = ref(getRouteName())
const clickChangeActive = (item: any) => {
  active.value = item.value
  barFooterArr.length = 0
  barFooterArr.push(...barFooterArrayChange())
  router.push(`/` + item.value)
}
</script>
<style lang="scss" scoped>
.global-bar-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 88px;
  display: flex;
  z-index: 299;
  background-color: #fff;

  &.has-border {
    border-top: 1px solid #e5ecf3;
  }

  .item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #96A5AA;
    font-weight: 600;

    .img {
      height: 48px;
      width: 48px;
    }

    .iconfont {
      font-size: 44px;
      height: 48px;
      width: 48px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-weight: 100;
    }

    span {
      line-height: 24px;
      font-size: 24px;
      margin-top: 4px;
    }

    .item-img {
      display: block;
    }

    &.active {
      color: #7642fe;
    }
  }
}
</style>
