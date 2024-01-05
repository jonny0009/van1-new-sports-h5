<template>
  <div class="panel-more">
    <div class="no-data" v-if="finished && list.length === 0">
      <SvgIcon name="empty" />
      <span class="empty-text">{{ $t('live.emptyText') }}</span>
    </div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      :immediate-check="false"
      :finished-text="list.length == 0 ? '' : $t('live.noMore')"
      @load="getRbLiveList"
    >
      <div class="more-item" v-for="item in list" :key="item.gidm">
        <Item :item="item" @click="onItemClick(item)" />
      </div>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import { rbLiveList } from '@/api/live'
import Item from './Item.vue'
const emits = defineEmits(['more-video'])

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
  } else {
    finished.value = true
  }
}
const onItemClick = (item: any) => {
  emits('more-video', item)
}

onMounted(() => {
  getRbLiveList()
})
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  .svg-icon {
    font-size: 168px;
  }
  .empty-text {
    margin-top: 20px;
    font-size: 24px;
    line-height: 24px;
    color: #96a5aa;
  }
}

.panel-more {
  padding: 0 36px;
  padding-top: 20px;
  .more-item {
    padding: 0 0 20px 0;
  }
}
</style>
