<template>
  <SvgIcon v-if="iconSrc === 'OP_DR'" name="ball-OP_DR" />
  <SvgIcon v-else-if="iconSrc === 'OP_BV'" name="ball-OP_BV" />
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
</script>
<style lang="scss" scoped>
.svg-icon {
  font-size: 38px;
  color: var(--color-global-minButtonicoCl);
  // margin-right: 3px;
}
</style>
