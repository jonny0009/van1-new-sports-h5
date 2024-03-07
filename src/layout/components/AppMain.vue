<template>
  <div class="app-main">
    <!-- :include="keepAlives" -->
    <router-view v-slot="{ Component, route }">
      <transition :name="transitionName" >
        <keep-alive>
          <component :is="getComponent(Component, route)" v-if="$route.meta.KeepAlive" :key="route.path" />
        </keep-alive>
      </transition>
      <component :is="getComponent(Component, route)" v-if="!$route.meta.KeepAlive && !$route.meta.key"
        :key="route.path" />
      <component :is="getComponent(Component, route)" v-if="!$route.meta.KeepAlive && $route.meta.key"
        :key="$route.meta.key" />
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
import { ref } from 'vue'
const transitionName: any = ref('fade-right')
// const keepAlives = computed(() => [])
const getComponent = (Component: any, route: any) => {
  if (!Component.type.name) {
    Component.type.name = route.name
  }
  return Component
}
// 缓存触发组件
onActivated(() => { })
defineExpose({
  transitionName
})

</script>
<style scoped>
.app-main {
  position: relative;
  overflow: hidden;
}
/* 向右划 */
.fade-right-enter-from {
  /* 进入时的透明度为0 和 刚开始进入时的原始位置通过active透明度渐渐变为1 */
  opacity: 0;
  /* transform: translateX(-100%); */
  transform: translateX(100%);
}

.fade-right-enter-to {
  /*定义进入完成后的位置 和 透明度 */
  transform: translateX(0%);
  opacity: 1;
}

.fade-right-leave-active,
.fade-right-enter-active {
  transition: all 0.2s ease-out;
}

.fade-right-leave-from {
  /* 页面离开时一开始的css样式,离开后为leave-to，经过active渐渐透明 */
  transform: translateX(0%);
  opacity: 1;
}

.fade-right-leave-to {
  /* 这个是离开后的透明度通过下面的active阶段渐渐变为0 */
  /* transform: translateX(100%); */
  transform: translateX(-100%);
  opacity: 0;
}

/* 向左划 */
.fade-left-enter-from {
  /* 进入时的透明度为0 和 刚开始进入时的原始位置通过active透明度渐渐变为1 */
  opacity: 0;
  transform: translateX(-100%);
  /* transform: translateX(100%); */
}

.fade-left-enter-to {
  /*定义进入完成后的位置 和 透明度 */
  transform: translateX(0%);
  opacity: 1;
}

.fade-left-leave-active,
.fade-left-enter-active {
  transition: all 0.2s ease-out;
}

.fade-left-leave-from {
  /* 页面离开时一开始的css样式,离开后为leave-to，经过active渐渐透明 */
  transform: translateX(0%);
  opacity: 1;
}

.fade-left-leave-to {
  /* 这个是离开后的透明度通过下面的active阶段渐渐变为0 */
  transform: translateX(100%);
  /* transform: translateX(-100%); */
  opacity: 0;
}
</style>
