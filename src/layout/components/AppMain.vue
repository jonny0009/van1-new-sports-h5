<template>
  <div class="app-main">
    <!-- :include="keepAlives" -->
    <router-view v-slot="{ Component , route}">
      <keep-alive >
        <component :is="getComponent(Component, route)" v-if="$route.meta.KeepAlive" :key="route.path"/>
      </keep-alive>
      <component :is="getComponent(Component, route)" v-if="!$route.meta.KeepAlive" :key="route.path" />
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent,onActivated } from 'vue'
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
  console.log({...Component},'组件啊===');
  
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
