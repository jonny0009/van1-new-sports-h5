<template>
  <div class="time">
    {{ matchDate(timeSendParams.gameDate) }}
  </div>
</template>
<script lang="ts" setup>
import { matchDate } from '@/utils/home/matchDate.ts'
defineProps({
  timeSendParams: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
</script>
