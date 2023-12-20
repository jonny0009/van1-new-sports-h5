<template>

  <van-pull-refresh v-model="isLoading" class="test-page" @refresh="onRefresh">
    test2
    <div style="height: 1000px;"></div>
  </van-pull-refresh>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isLoading = ref(false)
const onRefresh = (val:any) => {
  isLoading.value = false
  console.log(val)
  // setTimeout(() => {
  //   showToast('刷新成功')
  //   isLoading.value = false
  //   count.value++
  // }, 1000)
}
</script>

<style lang="scss" scoped>
.test-page{
  height: 100%;
  overflow: hidden;
}

</style>
