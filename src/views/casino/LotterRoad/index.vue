<template>
  <section class="good-road-view">
    <div class="title">真人百家乐</div>
    <div class="list" v-if="list.length">
      <TableInfo v-for="(item, index) in list" :key="index" :tableInfo="item"></TableInfo>
    </div>
    <EmptyData v-else />
  </section>
</template>

<script lang="ts" setup>
import { realTableList } from '@/api/home'
import { onBeforeMount, ref } from 'vue'
import TableInfo from './TableInfo.vue'
const list = ref([])
onBeforeMount(() => {
  getList()
})

const getList = async () => {
  const res = await realTableList()
  list.value = res?.data?.data || []
  console.log(res, 'res')
}
</script>
<style lang="scss" scoped>
.good-road-view {
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    text-align: left;
    margin-bottom: 36px;
    color: rgb(14, 61, 102);
    font-size: 32px;
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
