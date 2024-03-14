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
import TableInfo from './TableInfo.vue'

defineProps({
  list: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped>
.good-road-view {
  padding: 0 36px 36px;
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
    font-weight: 600;
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
