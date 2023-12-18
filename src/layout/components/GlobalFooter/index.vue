<template>
  <div class="global-bar-footer">
    <div
      v-for="(item, idx) in barFooterArr"
      :key="idx"
      :class="{'active': item.value === active}"
      class="item"
      @click="clickChangeActive(item)"
    >
      <van-image
        width="23"
        height="23"
        fit="contain"
        class="item-img"
        :src="item.iocn"
      />
      <span>
        {{ item.text }}
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import liveDefault from '@/assets/images/globalLayout/live-default.png'
import gameDefault from '@/assets/images/globalLayout/game-default.png'
import sportsDefault from '@/assets/images/globalLayout/sports-default.png'
import live from '@/assets/images/globalLayout/live.png'
import game from '@/assets/images/globalLayout/game.png'
import sports from '@/assets/images/globalLayout/sports.png'
import { ref, reactive } from 'vue'
import router from '@/router'
const getRouteName = () => {
  const routerName:any = router?.currentRoute?.value?.name || ''
  return routerName.toLowerCase()
}
const barFooterArrayChange = (RouteNameVal?:any):Array<any> => {
  const RouteName = RouteNameVal || getRouteName()
  const RouteNameObj:any = {
    'live': live,
    'home': sports,
    'game': game
  }
  const barFooterArray = [
    {
      text: '直播',
      value: 'live',
      iocn: liveDefault
    },
    {
      text: '体育',
      value: 'home',
      iocn: sportsDefault
    },
    {
      text: '赌场',
      value: 'game',
      iocn: gameDefault
    }
  ]
  return barFooterArray.map(e => {
    if (e.value === RouteName) {
      e.iocn = RouteNameObj[e.value]
    }
    return e
  })
}
const barFooterArr:any = reactive(barFooterArrayChange())
const active = ref(getRouteName())
const clickChangeActive = (item: any) => {
  active.value = item.value
  barFooterArr.length = 0
  barFooterArr.push(...barFooterArrayChange(active.value))
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
  z-index: 9;
  background-color: #fff;
  .item{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #96A5AA;
    font-weight: 600;
    span{
      line-height: 24px;
      font-size: 24px;
      margin-top: 4px;
    }
    .item-img{
      display: block;
    }
    &.active {
      color:#7642fe;
    }
  }
}
</style>
