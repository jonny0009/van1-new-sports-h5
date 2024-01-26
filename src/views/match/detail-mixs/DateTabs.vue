<template>
  <div class="date">
    <van-tabs class="global-nav-vant-tabs" v-model:active="tabActive" shrink line-height="0" @change="onChangeTabs">
      <van-tab v-for="(item, index) in tabList" :key="index" :name="item">
        <template #title>
          <div class="tab-title">
            <span>{{ transFormatDate(item, 'DD/MM') }}</span>
            <span>&nbsp;</span>
            <span>{{ transFormatWeekday(item) }}</span>
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { formatToDate, formatWeekday } from '@/utils/date'

const props = defineProps({
  data: {
    type: Array as any,
    default: () => []
  }
})
const emits = defineEmits(['on-date'])

const tabList = computed(() => props.data)
const tabActive = ref()
const onChangeTabs = (date: string) => {
  emits('on-date', date)
}

const transFormatDate = ref(formatToDate)
const transFormatWeekday = ref(formatWeekday)
</script>

<style lang="scss" scoped>
.tab-title {
  font-size: 22px;
}
</style>
