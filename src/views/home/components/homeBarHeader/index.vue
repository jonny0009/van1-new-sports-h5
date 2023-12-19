<template>
  <div class="home-bar">
    <div
      v-for="(item, idx) in homeBarArray"
      :key="idx"
      class="item"
      :class="{
        'active':item.value === active
      }"
      @click="clickChangeActive(item)"
    >
      <SportsIcon :icon-src="item.value" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
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
const active = ref('Home')
const clickChangeActive = (item:any) => {
  active.value = item.value
}
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
