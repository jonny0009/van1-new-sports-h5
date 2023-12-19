<template>
  <div class="home-bar">
    <div
      v-for="(item, idx) in homeBarArray"
      :key="idx"
      class="item"
      :class="{
        'active':item.value === active
      }"
    >
      <i class="iconfont" :class="barclass(item)"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const homeBarArray = ref(
  [
    {
      value: 'Home'
    },
    {
      value: 'live'
    },
    {
      value: 'FT'
    },
    {
      value: 'BK'
    },
    {
      value: 'TN'
    },
    {
      value: 'OP_BM'
    }
  ]
)
const barclass = (item:any) => {
  return `icon-bar-${item.value}`
}
const active = ref('Home')
</script>
<style lang="scss" scoped>
.home-bar{
  display:flex;
  height:88px;
  .item{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#546371;
    .iconfont{
      font-size:44px;
      font-weight: 100;
    }
    &.active{
      color:#7642fe;
    }
  }
}
</style>
