<template>
  <div class="result-page">
    <ResultItem v-for="(result, index) in results" :key="index" :result="result" class="result-item"></ResultItem>
  </div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
import ResultItem from './ResultItem.vue'
const results = computed(() => store.state.betting.results)
</script>
<style scoped lang="scss">
.result-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
</style>
