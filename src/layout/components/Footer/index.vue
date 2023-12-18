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
import { ref } from 'vue'
import router from '@/router'
import live from '@/assets/images/globalLayout/live.png'
import game from '@/assets/images/globalLayout/game.png'
import sports from '@/assets/images/globalLayout/sports.png'
const barFooterArr:any = ref([
  {
    text: '直播',
    value: 'live',
    iocn: live
  },
  {
    text: '体育',
    value: 'home',
    iocn: sports
  },
  {
    text: '赌场',
    value: 'game',
    iocn: game
  }
])
const active:any = ref('sports')
const clickChangeActive = (item: any) => {
  active.value = item.value
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
