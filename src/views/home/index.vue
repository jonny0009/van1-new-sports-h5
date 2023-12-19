<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <homeBarHeader />
      <homeTabs />
      <p>刷新次数:</p>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import homeBarHeader from './components/homeBarHeader/index.vue'
import homeTabs from './components/homeTabs/index.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
}
</script>
<style lang="scss" scoped>

</style>
