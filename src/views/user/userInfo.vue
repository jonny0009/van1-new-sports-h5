<template>
  <div class="userInfo">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <p v-html="content"></p>
    </div>
    <div class="noticeTime">
      {{ '2023/12/10 13:59:59' }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
// const dataList = reactive([])
const content = ref('111111')
const goBack = () => {
  $router.back()
}
const title = ref('个人档案')

</script>

<style lang="scss" scoped>
.noticeDetail {
  .bg-title {
    width: 100%;
    height: 150px;
    background: url('@/assets/images/login/bg-tit@2x.png');
    background-size: 100% 100%;

    .img_1 {
      width: 36px;
      height: 36px;
    }
  }

  .content {
    height: calc(100vh - 350px);
    overflow-y: auto;
    padding: 42px 36px;

  }

  .noticeTime {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #546371;
    letter-spacing: 0;
    text-align: right;
    font-weight: 400;
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
