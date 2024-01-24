<template>
  <van-pull-refresh v-if="$route.meta.showRefresh" v-model="isLoading" class="GlobalRefresh" @refresh="onRefresh">
    <div class="GlobalRefresh-main">
      <slot>
      </slot>
    </div>
  </van-pull-refresh>
  <slot v-else>
  </slot>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import store from '@/store'
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
  store.dispatch('home/setRefreshChangeTime', new Date().getTime())
}
</script>
<style lang="scss" >
.GlobalRefresh {
  min-height: calc(100vh - 96px);
  background: var(--color-global-wrapBg);
}
</style>
