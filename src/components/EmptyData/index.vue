<template>
  <div class="empty-data" :style="{ height: props.height }">
    <SvgIcon :name="props.svgIcon" />
    <span v-if="props.showText" class="empty-text">{{ emptyText }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  svgIcon: {
    type: String,
    default: 'empty'
  },
  text: {
    type: String
  },
  showText: {
    type: Boolean,
    default: true
  },
  height: {
    type: [String, Number],
    default: '40vw' // 300px
  }
})

const { t } = useI18n()
const emptyText = computed(() => {
  return props.text || t('live.emptyText')
})
</script>

<style lang="scss" scoped>
.empty-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-no-data-font);
  .svg-icon {
    font-size: 168px;
  }
  .empty-text {
    margin-top: 20px;
    font-size: 24px;
    line-height: 24px;
  }
}
</style>
