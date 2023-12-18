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
import live from '@/assets/images/globalLayout/live.png'
import game from '@/assets/images/globalLayout/game.png'
import sports from '@/assets/images/globalLayout/sports.png'
const barFooterArr:Array = ref([
  {
    text: '直播',
    value: 'live',
    iocn: live
  },
  {
    text: '体育',
    value: 'sports',
    iocn: sports
  },
  {
    text: '赌场',
    value: 'game',
    iocn: game
  }
])
const active:String = ref('sports')
const clickChangeActive = (item: any) => {
  active.value = item.value
}
</script>
<style lang="scss" scoped>
.global-bar-footer {
  height: 44px;
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
      line-height: 12px;
      font-size: 12px;
      margin-top: 2px;
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
