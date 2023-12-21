<template>
  <van-popup :show="boardShow" class="betting-slip-keyboard" position="bottom" :overlay="false">内容</van-popup>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
const boardShow = computed(() => store.state.betting.boardShow)
</script>
<style scoped lang="scss">
.betting-slip-keyboard {
  height: 300px;
}
</style>
