<template>
  <div class="homeTime-Time-Tabs mt10 mb10">
    <div
      v-for="(item,idx) in homeTimeArray"
      :key="idx"
      class="item"
      :class="{'active': item.values === active}"
      @click="TimeClick(item)"
    >
      <span class="name">
        {{ item.text }}
      </span>
    </div>
    <div class="more">
      <i
        class="iconfont icon-timeMore"
      ></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Dayjs from 'dayjs' // YYYY-MM-DD HH:mm:ss
const homeTimeArray = ref([
  { text: '全部', values: '' },
  { text: '8小时', values: Dayjs().add(8, 'hour').format('YYYY-MM-DD HH:mm:ss') },
  { text: '24小时', values: Dayjs().add(24, 'hour').format('YYYY-MM-DD HH:mm:ss') },
  { text: '7天', values: Dayjs().add(7, 'day').format('YYYY-MM-DD HH:mm:ss') }
])
const active = ref('')
const emit = defineEmits(['returnTimeSuccess'])
const TimeClick = (item:any) => {
  active.value = item.values
  emit('returnTimeSuccess', active.value)
}
defineExpose({
  active
})
</script>
<style lang="scss" scoped>
.homeTime-Time-Tabs{
  display: flex;
  grid-gap: 32px;
  overflow: auto;
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
    &:last-child{
      margin-right: 0;
    }
    .name{
      height: 24px;
      line-height: 24px;
    }
    &.active{
      background: #7642fe;
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
    color: #546371;
  }
}
</style>

