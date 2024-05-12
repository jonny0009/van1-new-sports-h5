<template>
  <SvgIcon v-if="ifLocalIcon()" :name="`ball-${iconSrc}`" />
  <i v-else class="iconfont" :class="classVal"></i>
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
// 本地图标
const ifLocalIcon = () => {
  if (props.iconSrc === 'OP_DR' || props.iconSrc === 'OP_BV' || props.iconSrc === 'XNFT' || props.iconSrc === 'XNBK') {
    return true
  }
  return false
}
</script>
<style lang="scss" scoped>
.svg-icon {
  font-size: 50px;
  margin-top: -2px;
}
</style>
