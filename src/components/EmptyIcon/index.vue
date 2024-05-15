<template>
  <div
    class="empty-icon"
    :class="{
      purpleTheme: !ifThemeBlue
    }"
  ></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import store from '@/store'
const ifThemeBlue = computed(() => {
  return store.state.app.theme === 'blue'
})
</script>
<style lang="scss" scoped>
.empty-icon {
  // width: 175px;
  // height: 175px;
  width: 130px;
  height: 132px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('@/assets/images/betting/empty.png');
}
.purpleTheme {
  background-image: url('@/assets/images/betting/purpleEmpty.png');
}
</style>
