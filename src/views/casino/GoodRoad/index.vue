<template>
  <section class="good-road-view">
    <div class="title">好路推荐</div>
    <Loading v-if="loading" />
    <div class="list" v-else-if="list.length">
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
  },
  loading: {
    type: Boolean,
    default: true
  }
})
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
