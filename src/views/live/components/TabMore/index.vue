<template>
  <div class="panel-more">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="getRbLiveList"
    >
      <div class="more-item" v-for="item in list" :key="item.gidm">
        <Item :item="item" />
      </div>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import { rbLiveList } from '@/api/live'
import Item from './Item.vue'

let page = 0
const list: Ref<any[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const getRbLiveList = async () => {
  page++
  const params = {
    page: page,
    pageSize: 20,
    videoType: 2
  }
  const res: any = await rbLiveList(params)
  const data = res.data || {}
  if (res.code == 200) {
    data.list.forEach((item: any) => {
      list.value.push(item)
    })
    loading.value = false
    finished.value = list.value.length == data.total
  }
}

onMounted(() => {
  getRbLiveList()
})
</script>

<style lang="scss" scoped>
.panel-more {
  padding: 0 36px;
}
</style>
