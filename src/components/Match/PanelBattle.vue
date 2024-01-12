<template>
  <div class="battle-matrix">
    <img class="bg" :src="footballBg" alt="" />
  </div>
</template>

<script setup lang="ts">
import footballBg from '@/assets/images/live/football_bg.svg'
</script>

<style lang="scss" scoped>
.battle-matrix {
  position: relative;
  padding: 8px;
  .bg {
    display: block;
    width: 100%;
  }
}
</style>
