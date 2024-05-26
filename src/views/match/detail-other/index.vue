<template>
  <div class="panel-more">
    <EmptyData v-if="finished && list.length === 0" />
    <van-list
      v-model:loading="loading"
      :finished="finished"
      :immediate-check="false"
      :finished-text="list.length == 0 ? '' : $t('live.noMore')"
      @load="getRbLiveList"
    >
      <Item v-for="item in list" :key="item.gidm" :item="item" @click="onItemClick(item)" />
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { rbLiveList } from '@/api/live'
import Item from './Item.vue'
import store from '@/store'

const router = useRouter()
let page = 0
const list: Ref<any[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const getRbLiveList = async () => {
  page++
  const params = {
    page: page,
    pageSize: 20,
    // videoType: 2
    videoType: ''
  }
  const res: any = await rbLiveList(params)
  const data = res.data || {}
  if (res.code == 200) {
    data.list.forEach((item: any) => {
      list.value.push(item)
    })
    loading.value = false
    finished.value = list.value.length == data.total
  } else {
    finished.value = true
  }
}
const onItemClick = (item: any) => {
  const query: any = {}
  if (item.anchorId) {
    query.anchorId = item.anchorId
  }
  if (item.m3u8) {
    query.m3u8 = item.m3u8
  }
  router.push({ name: 'MatchDetail', params: { id: item.gidm }, query })
  store.dispatch('app/setMatchLiveIndex', 1)
}

onMounted(() => {
  getRbLiveList()
})
</script>

<style lang="scss" scoped>
.panel-more {
  padding: 0 10px;
  padding-top: 20px;
  .item {
    margin-bottom: 20px;
  }
}
</style>
