<template>
  <van-pull-refresh v-if="$route.meta.showRefresh" v-model="isLoading" class="GlobalRefresh" @refresh="onRefresh">
    <slot>
    </slot>
  </van-pull-refresh>
  <slot v-else>
  </slot>
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
<style lang="scss" >
.GlobalRefresh {
  height: calc(100vh - 96px);
}
</style>
