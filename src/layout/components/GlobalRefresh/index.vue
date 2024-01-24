<template>
  <van-pull-refresh v-if="$route.meta.showRefresh && !ifKeepCache" v-model="isLoading" class="GlobalRefresh" @refresh="onRefresh">
    <div class="GlobalRefresh-main">
      <slot>
      </slot>
    </div>
  </van-pull-refresh>
  <div v-if="$route.meta.showRefresh && ifKeepCache || !$route.meta.showRefresh">
    <slot  >
  </slot>
  </div>
</template>
<script lang="ts" setup>
import { ref,computed } from 'vue'
import store from '@/store'
const isLoading = ref(false)

const ifKeepCache = computed(() => store.state.user.keepCache || false)

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
