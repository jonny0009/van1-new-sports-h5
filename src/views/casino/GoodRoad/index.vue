<template>
  <section class="good-road-view">
    <div class="title">
      <span>{{ $t('home.casinoTitleObj.title1') }}</span>
    </div>
    <Loading v-if="loading" />
    <div v-else-if="list.length" class="list">
      <TableInfo v-for="(item, index) in list" :key="index" :table-info="item"></TableInfo>
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
  padding: 35px;
  padding-bottom: 0px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    color: rgb(14, 61, 102);
    font-size: 30px;
    font-weight: 600;
    span {
      display: inline-block;
      width: 245px;
      word-wrap: break-word;
      word-break: break-all;
    }
  }

}
</style>
