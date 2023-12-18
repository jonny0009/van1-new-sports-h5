<template>
  <div class="global-bar-footer">
    <div v-for="(item, idx) in barFooterArr" :key="idx" class="item">
      <van-image
        width="27"
        height="27"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const barFooterArr:any = ref([
  {
    text: '直播',
    value: 'live'
  },
  {
    text: '体育',
    value: 'sports'
  },
  {
    text: '赌场',
    value: 'game'
  }
])

</script>

<style lang="scss" scoped>
.global-bar-footer {
  height: 44px;
  display: flex;
  font-size: 12px;
  .item{
    display: flex;
    flex: 1;
    flex-direction:column
  }
}
</style>
