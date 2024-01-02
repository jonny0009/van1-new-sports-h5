<template>
  <div ref="refHomeTime" class="homeTime-Time-Tabs mt10 mb10">
    <div ref="refHomeTimePage" class="homeTime-TimePage">
      <div
        v-for="(item,idx) in homeTimeArray"
        :key="idx"
        class="item"
        :class="{'active': item.values === active}"
        @click="TimeClick(item)"
      >
        {{ item.text }}
      </div>
      <div class="more" @click="moreTimeClick">
        <i
          class="iconfont icon-timeMore"
        ></i>
      </div>
    </div>
  </div>
  <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import Dayjs from 'dayjs' // YYYY-MM-DD HH:mm:ss
const homeTimeArray = ref([
  { text: '全部', defaultToggle: true, values: '' },
  { text: '8小时', defaultToggle: true, values: '8' },
  { text: '24小时', defaultToggle: true, values: '24' },
  { text: '7天', defaultToggle: true, values: '168' }
])

const active = ref('')
const emit = defineEmits(['returnTimeSuccess'])
const TimeClick = (item:any) => {
  active.value = item.values
  emit('returnTimeSuccess', active.value)
}

const show = ref(false)
const onConfirm = (values) => {
  const [start, end] = values
  show.value = false
  const newHomeTimeArray = homeTimeArray.value.filter(e => {
    return e.defaultToggle
  })
  homeTimeArray.value = [...newHomeTimeArray, {
    text: `${Dayjs(start).format('YYYY/MM/DD')} - ${Dayjs(end).format('YYYY/MM/DD')}`,
    values: `${Dayjs(start).format('YYYY/MM/DD')}-${Dayjs(end).format('YYYY/MM/DD')}`
  }]
  active.value = `${Dayjs(start).format('YYYY/MM/DD')}-${Dayjs(end).format('YYYY/MM/DD')}`
  emit('returnTimeSuccess', active.value)
  nextTick(() => {
    refHomeTime.value?.scrollTo(refHomeTimePage.value?.clientWidth, 0)
  })
}
const moreTimeClick = () => {
  show.value = true
}
defineExpose({
  active
})
const refHomeTime = ref()
const refHomeTimePage = ref()

</script>
<style lang="scss" scoped>
.homeTime-Time-Tabs{
  display: flex;
  grid-gap: 32px;
  overflow: auto;
  .homeTime-TimePage{
    display: flex;
    grid-gap: 32px;
  }
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .item{
    height: 62px;
    padding: 0 20px 0 20px;
    border-radius: 42px;
    background-color: #eff2f2;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    min-width: 120px;
    white-space: nowrap;
    flex-shrink: 0;
    &:last-child{
      margin-right: 0;
    }
    .name{
      height: 24px;
      line-height: 24px;
      white-space:nowrap;
    }
    &.active{
      background: var(--color-primary);
      color: #fff;
    }
  }
  .more{
    width: 62px;
    height: 62px;
    background-color: #eff2f2;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-1);
    white-space: nowrap;
    flex-shrink: 0;
  }
}
</style>

