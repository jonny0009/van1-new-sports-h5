<template>
  <div class="start-date">
    <span v-if="showFUTime" v-html="showFUTime"></span>
  </div>
</template>
<script lang="ts" setup>
import { dateFormat } from '@/utils/date'
import { computed } from 'vue'
const Props:any = defineProps({
  raceinfo: {
    type: Object,
    default: () => {}
  },
  systemTime: {
    type: Number,
    default: 0
  }
})

const showFUTime = computed(() => {
  const { showtype, gameDate, showType } = Props.raceinfo
  if (showtype === 'FU' || showType === 'FU') {
    if (Props.europSingle) {
      return `${dateFormat(gameDate, 'dd-MM')} ${dateFormat(gameDate, 'HH:mm')}`
    }
    return dateFormat(gameDate, 'dd-MM HH:mm')
  }
  return ''
})

</script>
