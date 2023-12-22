<template>
  <div class="my-empty">
    <img class="my-empty__img" :src="emptyDefault">
    <div class="my-empty__text">未查询到相关数据</div>
  </div>
</template>
<script lang="ts" setup>
import emptyDefault from '@/assets/images/home/empty/default.svg'
</script>
<style lang="scss" scoped>
  .my-empty {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 300px;
    .my-empty__img{
      width: 168px;
      height: 168px;
    }
    .my-empty__text{
      margin-top: 20px;
      font-size: 24px;
      line-height: 24px;
      color:#96a5aa;
    }
  }
</style>
