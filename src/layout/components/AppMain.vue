<template>
  <div class="app-main">
    {{ $route.meta.key }}
    <!-- :include="keepAlives" -->
    <router-view v-slot="{ Component , route}">
      <keep-alive v-if="$route.meta.KeepAlive && !$route.meta.key">
        <component :is="getComponent(Component, route)" :key="route.path" />
      </keep-alive>
      <!-- <keep-alive v-if="$route.meta.KeepAlive && $route.meta.key">
        <component :is="getComponent(Component, route)" :key="$route.meta.key" />
      </keep-alive> -->
      <component :is="getComponent(Component, route)" v-if="!$route.meta.KeepAlive && !$route.meta.key" :key="route.path" />
      <component :is="getComponent(Component, route)" v-if="!$route.meta.KeepAlive && $route.meta.key" :key="$route.meta.key" />
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, onActivated } from 'vue'
export default defineComponent({
  name: 'AppMain'
})
</script>
<script setup lang="ts">
// import { computed } from 'vue'
// const keepAlives = computed(() => [])
const getComponent = (Component:any, route: any) => {
  if (!Component.type.name) {
    Component.type.name = route.name
  }
  return Component
}
// 缓存触发组件
onActivated(() => {})

</script>
<style scoped>
.app-main {
  position: relative;
  overflow: hidden;
}
</style>
