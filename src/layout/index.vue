<template>
  <div class="layout-wrapper">
    <AppMain />
    <Menus />
  </div>
</template>

<script lang="ts" setup>
import AppMain from './components/AppMain.vue'
import Menus from './components/Menus/index.vue'
</script>

<style lang="scss" scoped>
.layout-wrapper {
}
</style>
