<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <homeBarHeader />
      <p>刷新次数:</p>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import homeBarHeader from './components/homeBarHeader.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
}
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
