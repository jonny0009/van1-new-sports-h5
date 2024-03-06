<template>
  <span class="img_1">{{ symbol }} </span>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'

const symbol = computed(() => store.state.user.symbol)
</script>

<style scoped>
.img_1 {
  /* height: 20px;
  width: 20px; */
  margin-right: 5px;
}
</style>
