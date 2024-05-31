<template>
  <div class="result-page">
    <ResultItem v-for="(result, index) in results" :result="result" :key="index"> </ResultItem>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import ResultItem from './ResultItem.vue'
import store from '@/store'
const results: any = computed(() => store.state.betting.results)
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
