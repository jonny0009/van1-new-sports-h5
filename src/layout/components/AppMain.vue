<template>
  <div class="app-main">

    <router-view v-slot="{ Component , route}">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="keepAlives">
          <component :is="getComponent(Component, route)" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppMain'
})
</script>

<script setup lang="ts">
import { computed } from 'vue'

const keepAlives = computed(() => [])

const getComponent = (Component:any, route: any) => {
  if (!Component.type.name) {
    Component.type.name = route.name
  }
  return Component
}

</script>

<style scoped>
.app-main {
  position: relative;
  overflow: hidden;
}
</style>
