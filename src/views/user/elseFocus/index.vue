<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">关注</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">粉丝</span>
      </div>
      <Attention v-if="index == 1"></Attention>
      <Fans v-if="index == 2"></Fans>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Attention from './components/attention.vue'
import Fans from './components/fans.vue'
const $router = useRouter()
const index = ref(1)
const goBack = () => {
  $router.back()
}
const title = ref('关注')
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
    padding: 42px 36px;

    .area-btn_1 {
      display: flex;
      justify-content: space-around;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #97a6ab;
        letter-spacing: 0;
        font-weight: 600;
        width: 95px;
        text-align: center;
      }

      .active {
        color: #000000;

        &::after {
          content: '';
          width: 100%;
          height: 7px;
          display: block;
          margin: 10px auto;
          border-bottom: 7px solid #000;
          border-radius: 7px;
        }
      }
    }

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
