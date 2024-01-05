<template>
  <i class="iconfont" :class="classVal"></i>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import store from '@/store'
const props = defineProps({
  iconSrc: {
    type: String,
    default: function () {
      return ''
    }
  }
})
const theme = computed(() => store.state.app.theme || 'default')
const classVal = ref('FT')
classVal.value = `icon-${theme.value}-${props.iconSrc}`
</script>
<style lang="scss" scoped>
</style>
