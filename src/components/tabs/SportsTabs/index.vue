<template>
  <div class="Recommend-Match-Tabs">
    <SportsButton text="FT" :active="true" />
    <SportsButton text="BK" />
    <SportsButton text="TN" />
    <SportsButton text="OP_BM" />
  </div>
</template>
<script lang="ts" setup>
// vue
import { ref } from 'vue'
const Tabs = ref([
  { text: 'FT' },
  { text: 'BK' },
  { text: 'TN' },
  { text: 'OP_BM' }
])
</script>
<style lang="scss" scoped>
</style>
