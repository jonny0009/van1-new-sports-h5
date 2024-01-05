<template>
  <div class="result-page">
    <ResultItem v-if="checkResults" :result="checkResults" class="result-item"></ResultItem>
    <ResultItem v-if="pendingResults" :result="pendingResults" class="result-item"></ResultItem>
    <ResultItem v-if="errorResults" :result="errorResults" class="result-item"></ResultItem>
  </div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
import ResultItem from './ResultItem.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const results = computed(() => store.state.betting.results)

const checkResults = computed(() => {
  const list = results.value?.filter((result: any) => {
    return !(![1, 2].includes(+result.status) || result.errorCode)
  })
  if (list.length) {
    return {
      stateClass: 'check',
      stateTips: t('betting.orderCheck'),
      list
    }
  }
  return null
})
const pendingResults = computed(() => {
  const list = results.value?.filter((result: any) => {
    return ![1, 2].includes(+result.status)
  })
  if (list.length) {
    return {
      stateClass: 'accepting',
      stateTips: t('betting.orderPending'),
      list
    }
  }
  return null
})
const errorResults = computed(() => {
  const list = results.value?.filter((result: any) => {
    return result.errorCode
  })
  if (list.length) {
    return {
      stateClass: 'error',
      stateTips: t('betting.orderError'),
      list
    }
  }
  return null
})

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
