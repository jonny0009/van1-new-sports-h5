<template>
  <i class="iconfont" :class="classVal"></i>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  iconSrc: {
    type: String,
    default: function () {
      return ''
    }
  }
})
const classVal = ref('FT')
classVal.value = `icon-bar-${props.iconSrc}`
</script>
<style lang="scss" scoped>
</style>
