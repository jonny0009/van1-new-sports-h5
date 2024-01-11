<template>
  <div style="padding: 50px; text-align: center; color: #666; font-size: 14px">串关页面开发中！</div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import store from '@/store'

const matchInfo = computed(() => store.state.match.matchInfo)

watch(
  () => matchInfo.value,
  () => {
    console.log('watch', matchInfo.value)
  }
)
onMounted(() => {
  console.log('onMounted', matchInfo.value)
})
</script>
