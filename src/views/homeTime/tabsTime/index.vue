<template>
  <div ref="refHomeTime" class="homeTime-Time-Tabs  pb10">
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
  <!-- <van-calendar v-model:show="show" type="range" @confirm="onConfirm" /> -->
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, nextTick } from 'vue'
import Dayjs from 'dayjs' // YYYY-MM-DD HH:mm:ss
const homeTimeArray = ref([
  { text: t('sport.all'), defaultToggle: true, values: '' },
  { text: t('home.numberHour', {
    number: '8'
  }), defaultToggle: true, values: '8' },
  { text: t('home.numberHour', {
    number: '24'
  }), defaultToggle: true, values: '24' },
  { text: t('home.numberDay', {
    number: '7'
  }), defaultToggle: true, values: '168' }
])

const active = ref('')
const emit = defineEmits(['returnTimeSuccess','DateShow'])
const TimeClick = (item:any) => {
  active.value = item.values
  emit('returnTimeSuccess', active.value)
}

// const show = ref(false)
const onConfirm = (values:any) => {
  const [start, end] = values
  // show.value = false
  const newHomeTimeArray = homeTimeArray.value.filter(e => {
    return e.defaultToggle
  })
  const customizeVal:any = `${Dayjs(start).format('YYYY/MM/DD')} - ${Dayjs(end).format('YYYY/MM/DD')}`
  homeTimeArray.value = [...newHomeTimeArray, {
    text: customizeVal,
    values: customizeVal
  }]
  active.value = customizeVal
  emit('returnTimeSuccess', active.value)
  nextTick(() => {
    refHomeTime.value?.scrollTo(refHomeTimePage.value?.clientWidth, 0)
  })
}
const moreTimeClick = () => {
  // show.value = true
  emit('DateShow', true,)

}
defineExpose({
  active,
  onConfirm
})
const refHomeTime = ref()
const refHomeTimePage = ref()

</script>
<style lang="scss" scoped>
.homeTime-Time-Tabs{
  display: flex;
  overflow: auto;
  .homeTime-TimePage{
    display: flex;
    // grid-gap: 32px;
    & > div{
      margin: 0 8px;
      &:first-child{
        margin: 0 8px 0 0;
      }
      &:last-child{
        margin: 0 0 0 8px;
      }
    }
  }
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .item{
    height: 62px;
    padding: 0 20px 0 20px;
    border-radius: 42px;
    background: var(--color-global-buttonBg);
    box-shadow: var(--color-global-buttonShadow);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    min-width: 150px;
    white-space: nowrap;
    flex-shrink: 0;
    color: black;
    &:last-child{
      margin-right: 0;
    }
    .name{
      height: 24px;
      line-height: 24px;
      white-space:nowrap;
    }
    &.active{
      // background: var(--color-primary);
      background: var(--color-global-buttonPrimaryBg);
      color: #fff;
    }
  }
  .more{
    width: 62px;
    height: 62px;
    background: var(--color-global-buttonBg);
    box-shadow: var(--color-global-buttonShadow);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-3);
    white-space: nowrap;
    flex-shrink: 0;
  }
}
</style>

