<template>
  <div class="notice">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <!-- <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" /> -->
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div v-if="!list.arr.length && finished" class="noData">
        <img class="img_1" src="@/assets/images/user/noData.png" />
        <p>
          {{ $t('user.noData') }}
        </p>
      </div>
      <div v-if="list.arr.length || !finished" class="list">
        <van-list v-model:loading="loading" :finished="finished" :finished-text="$t('live.noMore')"
          :loading-text="$t('user.loadingText')" @load="onLoad">
          <van-swipe-cell v-for="(item, index) in list.arr" :key="index" :before-close="beforeClose" class="itemContent">
            <div class="cell" @click="toDetail(item)">
              <p style=" -webkit-box-orient: vertical;" class="font_1">{{ item.title }}</p>
              <div style=" -webkit-box-orient: vertical;display: -webkit-box; -webkit-line-clamp: 3;text-overflow: ellipsis;" class="font_2"
                v-html="replaceImgUrl(item.content)"></div>
              <div class="font_3">
                <span>{{ $t('user.lookInfo') }}</span>
                <span>{{ formatToDateTime(item.optTime) }}</span>
              </div>
            </div>
            <!-- //1.0版本没有删除 -->
            <!-- <template #right>
              <img class="img_close" src="@/assets/images/user/close.png" />
            </template> -->
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

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// import { showConfirmDialog } from 'vant'
const $router = useRouter()
const title = t('user.news')
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
    let messageArr: any = []
    if (!data.messages) {
      messageArr = []
    } else {
      messageArr = data.messages
    }
    messageArr.forEach((item: any) => {
      list.arr.push(item)
    })
    loading.value = false
    finished.value = list.arr.length === data.totalCount
  } else {
    showToast(res.msg)
    loading.value = false
    finished.value = true
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
  console.log(position, '单个删除====')

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
@import './index.scss';

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
  height: 96px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color: var(--title-text-font-color);
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
