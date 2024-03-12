<template>
  <section class="good-road-view">
    <div class="title">好路推荐</div>
    <div class="list" v-if="list.length">
      <TableInfo v-for="(item, index) in list" :key="index" :tableInfo="item"></TableInfo>
    </div>
    <EmptyData v-else />
  </section>
</template>

<script lang="ts" setup>
import { getBacGoodRoads } from '@/api/home'
import { onBeforeMount, onUnmounted, ref } from 'vue'
import TableInfo from './TableInfo.vue'
const list: any = ref([])
const timer: any = ref()
onBeforeMount(() => {
  getList()
})
onUnmounted(() => {
  clearInterval(timer.value)
})
clearInterval(timer.value)
timer.value = setInterval(() => {
  getList()
}, 10 * 1000)

const getList = async () => {
  const res = await getBacGoodRoads()
  const datas: any[] = res?.data || []
  list.value = datas.slice(0, 2)
  console.log(res, 'res')
}
</script>
<style lang="scss" scoped>
.good-road-view {
  padding: 36px;
  .title {
    text-align: left;
    margin-bottom: 36px;
    color: rgb(14, 61, 102);
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
