<template>
  <div>
    <!-- 列表 -->
    <div v-if="pendingData.length" class="dataList">
      <div v-for="(item, index) in pendingData" :key="index">
        <Single v-if="item.parlayNum ==1" :item="item" class="item"></Single>
        <Bunch v-if="item.parlayNum !=1 && item.state !==2" :item="item" class="item"></Bunch>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
// import { betRecordTab } from '@/api/user'
import Bunch from './bunch.vue'
import Single from './single.vue'
import store from '@/store'

const pendingData = computed(() => store.state.user.pendingData)
onMounted(() => {
  store.dispatch('user/pendingOrder')
})

</script>

<style lang="scss" scoped>
.dataList {
  height: calc(100vh - 400px);
  overflow-y: auto;
  margin-top: 20px;

  .item {
    margin: 0 auto;
    width: 695px;
    background: #EFF1F2;
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

  }
}
</style>
