<template>
  <div class="global-bar-header">
    <headerView />
    <sportsTabsView />
    <barTabsView class="mt10 mb10" />
  </div>
</template>
<script lang="ts" setup>
import headerView from './components/headerView/index.vue'
import sportsTabsView from './components/sportsTabsView/index.vue'
import barTabsView from './components/barTabsView/index.vue'
</script>
<style lang="scss" scoped>
</style>
