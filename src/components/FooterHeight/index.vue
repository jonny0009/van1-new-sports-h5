<template>
  <div class="footerHeight" :class="showFixedBet"></div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
// showFixedBet
const showFixedBet = computed(() => store.state.app.showFixedBet)
</script>
<style lang="scss" scoped>
</style>
