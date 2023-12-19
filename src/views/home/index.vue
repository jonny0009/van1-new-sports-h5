<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <homeBarHeader />
      <homeTabs class="mt10" />

      <homeTitle img-src="" text="热门赛事" />

      <p class="tc">刷新次数:</p>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import homeBarHeader from './components/homeBarHeader/index.vue'
import homeTabs from './components/homeTabs/index.vue'
import homeTitle from './components/homeTitle/index.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
}
</script>
<style lang="scss" scoped>

</style>
