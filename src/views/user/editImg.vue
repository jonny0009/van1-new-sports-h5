<template>
  <div class="editName">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <span @click="goBack()">取消</span>
      </template>
      <template #right>
        <span @click="handleSave()">保存</span>
      </template>
    </van-nav-bar>
    <div class="title">
      <van-image class="img_1" fit="contain" :src="userImg" />
    </div>
    <!-- 切换栏 -->
    <div class="area-btn_1">
      <span :class="index == 1 ? 'active' : ''" @click="index = 1">足球明星</span>
      <span :class="index == 2 ? 'active' : ''" @click="index = 2">其他人物</span>
      <span :class="index == 3 ? 'active' : ''" @click="index = 3">背景颜色</span>
    </div>
    <div class="content">
      <div v-if="index === 1" class="img-style">
        <div v-for="i in 16" :key="i" class="select-img">
          <van-image class="img_1" fit="contain" :src="getImgUrl(i, index)" />
        </div>
      </div>
      <div v-if="index === 2" class="img-style">
        <div v-for="i in 16" :key="i" class="select-img">
          <van-image class="img_1" fit="contain" :src="getImgUrl(i, index)" />
        </div>
      </div>
      <div v-if="index === 3" class="img-style">
        <div v-for="i in 16" :key="i" class="select-img">
          <div class="img_2" />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import headImg from '@/assets/images/user/head-img.png'

import { useRouter } from 'vue-router'
const $router = useRouter()
const index = ref(1)
const userImg = ref(headImg)

const title = ref('编辑头像')

const handleSave = () => {
  // $router.push('/user/userInfo')
}

const getImgUrl = (num: any, index: any) => {
  if (index === 1) {
    // return new URL(`@/assets/images/user/star/${num}.png`, import.meta.url).href
    return new URL(`../../assets/images/user/star/${num}.png`, import.meta.url).href
  }
  if (index === 2) {
    return new URL(`../../assets/images/user/else/${num}.png`, import.meta.url).href
  }
}
const goBack = () => {
  $router.back()
}

</script>

<style lang="scss" scope>
.editName {

  .bg-title {
    width: 100%;
    height: 150px;
    // background: url('@/assets/images/login/bg-tit@2x.png');
    background-size: 100% 100%;
    font-family: PingFangSC-Semibold;
    color: #7642FD;
    letter-spacing: 0;
    font-weight: 600;

  }

  .title {
    width: 210px;
    height: 252px;
    margin: 0 auto;

    background: #FFF;

    .img_1 {
      width: 100%;
      height: 100%;
    }
  }

  .area-btn_1 {
    margin-top: 69px;
    display: flex;
    justify-content: space-around;

    span {
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: #97a6ab;
      letter-spacing: 0;
      font-weight: 600;
      text-align: center;
      width: 212px;
    }

    .active {
      color: #000000;

      &::after {
        content: '';
        width: 100%;
        height: 7px;
        display: block;
        margin: 15px auto;
        border-bottom: 6px solid #000;
        border-radius: 7px;
      }
    }
  }

  .content {
    margin-top: -16px;
    padding: 40px 55px 0;
    height: calc(100vh - 530px);
    // padding: 56px 50px;
    background: #EFF1F2;

    .img-style {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .select-img {
      width: 137px;
      height: 137px;
      background: #EFF1F2;
      margin-right: 22px;
      margin-bottom: 36px;

      .img_1 {
        width: 137px;
        height: 137px;
      }

      .img_2 {
        width: 137px;
        height: 137px;
        background-image: linear-gradient(180deg, #9419CC 0%, #5721AB 100%);
        border-radius: 50%;
      }

    }

  }

}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 90px;
}

:deep(input::placeholder) {
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #97a6ab;
  letter-spacing: 0;
  font-weight: 600;
}

:deep(.bb.van-cell::after) {
  border-bottom: 8px solid #7642FD;
}

:deep(.van-cell::after) {
  border-bottom: 2px solid #97a6ab;
}

:deep(.van-cel::after) {
  border-bottom: 2px solid #97a6ab !important;
}

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}

:deep(.van-nav-bar__left) {
  font-size: 26px;
}

:deep(.van-nav-bar__right) {
  font-size: 26px;
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
  color: black;
}
</style>
