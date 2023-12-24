<template>
  <div class="notice">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div v-if="!list.arr.length" class="noData">
        <img class="img_1" src="@/assets/images/user/noData.png" />
        <p>
          未查询到相关数据
        </p>
      </div>
      <div class="list">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-swipe-cell v-for="(item, index) in list.arr" :key="index" :before-close="beforeClose" class="itemContent">
            <div class="cell" @click="toDetail(item)">
              <p class="font_1">{{ item.title }}</p>
              <p class="font_2" v-html="replaceImgUrl(item.content)"></p>
              <div class="font_3">
                <span>查看完整讯息</span>
                <span>{{ formatToDateTime(item.optTime) }}</span>
              </div>
            </div>
            <template #right>
              <img class="img_close" src="@/assets/images/user/close.png" />
            </template>
          </van-swipe-cell>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { messageList } from '@/api/user'
import { useRouter } from 'vue-router'
import { ImageSource } from '@/config'
import { formatToDateTime } from '@/utils/date'
import { showToast } from 'vant'

// import { showConfirmDialog } from 'vant'
const $router = useRouter()
const title = ref('消息')
const loading = ref(false)
const finished = ref(false)
const list = reactive<{ arr: any }>({ arr: [] })
// const list= reactive<any[]> = ref([])
const goBack = () => {
  $router.push({ path: '/home' })
}
const toDetail = (item: any) => {
  $router.push({
    path: '/user/noticeDetail',
    query: {
      id: item.id
    }
  })
}
onMounted(async () => {
  // onLoad()
})

let page: number = 0

const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    pageSize: 20
  }
  const res: any = await messageList(params)
  const data = res.data
  if (res.code === 200) {
    data.messages.forEach((item: any) => {
      list.arr.push(item)
    })
    loading.value = false
    finished.value = list.arr.length === data.totalCount
  } else {
    showToast(res.msg)
  }
}

const replaceImgUrl = (str: any) => {
  if (typeof str === 'string') {
    const imgs = str.match(/<img.*?>/g)
    Array.isArray(imgs) &&
      imgs.forEach((item: any) => {
        const _src = item
          .match(/src=".*?"/g)[0]
          .replace(/(src=")(.*?)(")/, '$2')
        str = str.replace(_src, `${ImageSource}${_src}`)
      })
    return str
  }
  return ''
}

const beforeClose = (position: any) => {
  // switch (position.position) {
  //   case 'left':
  //   case 'cell':
  //   case 'outside':
  //     return true
  //   case 'right':
  //     return new Promise((resolve) => {
  //       showConfirmDialog({
  //         title: '确定删除吗？'
  //       })
  //         .then(() => resolve(true))
  //         .catch(() => resolve(false))
  //     })
  // }
}

</script>

<style lang="scss" scoped>
@import './style/notice.scss';

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 150px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
