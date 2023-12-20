<template>
  <div class="userInfo">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
      <template #right>
        <img class="img_1" src="@/assets/images/user/edit.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="user">
      <div class="user-info">
        <div class="user-img"></div>
      </div>
    </div>
    <!-- <div class="content">
    </div> -->

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
// const dataList = reactive([])
const goBack = () => {
  $router.back()
}
const title = ref('个人档案')

</script>

<style lang="scss" scoped>
.userInfo {
  .bg-title {
    width: 100%;
    height: 120px;
    // background: url('@/assets/images/login/bg-tit@2x.png');
    background-image: linear-gradient(180deg, #181F2A 0%, #260B62 100%);
    background-size: 100% 100%;

    .img_1 {
      width: 30px;
      height: 30px;
    }
  }

  .content {
    height: calc(100vh - 350px);
    overflow-y: auto;
    padding: 42px 36px;

  }

}
</style>

<style scoped>
:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}

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
  font-weight: 600;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
