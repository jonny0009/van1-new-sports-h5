<template>
  <div class="layout-wrapper">
    <Navbar />
    <AppMain class="main-container" />
    <Menus />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain.vue'
import Menus from './components/Menus/index.vue'
</script>

<style lang="scss" scoped>
.layout-wrapper {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .main-container {
    flex: 1;
  }
}
</style>
