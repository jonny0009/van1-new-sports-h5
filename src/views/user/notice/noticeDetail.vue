<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <!-- <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" /> -->
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <p v-html="replaceImgUrl(detailObj.content)"></p>
      <!-- {{ router.query.id }} -->
    </div>
    <div class="noticeTime">
      {{ formatToDateTime(detailObj.optTime) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { messageDetail } from '@/api/user'
import { showToast } from 'vant'
import { formatToDateTime } from '@/utils/date'
import { ImageSource } from '@/config'

const route = useRoute()
const $router = useRouter()
const goBack = () => {
  $router.back()
}
const title = ref('消息详情')
const detailObj = ref<any>({})
onMounted(async () => {
  const id = route.query.id
  getDetail(id)
})
const getDetail = async (id:any) => {
  const res: any = await messageDetail({ id: id })
  const data = res.data
  if (res.code === 200) {
    detailObj.value = data
    title.value = data.title
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

</script>

<style lang="scss" scoped>

.noticeDetail {
  .bg-title {
    background-color: var(--title-background-color-2);
    .img_1 {
      margin-top: -15px;
      width: 36px;
      height: 36px;
      color: var(--title-text-font-color);
    }

  }

  .content {
    height: calc(100vh - 296px);
    overflow-y: auto;
    padding: 42px 36px;
    font-weight: 400px;
    background-color: var(--color-background-color);

    color: var(--color-text-1);

  }

  .noticeTime {
    background-color: var(--color-background-color);
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #546371;
    letter-spacing: 0;
    text-align: right;
    font-weight: 400;
    height: 200px;
    line-height: 100px;
    padding: 42px 36px;
    text-align: right;
  }
}

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
