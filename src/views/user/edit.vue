<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="top1">
        <span>{{ "用户名" }}</span>
        <span class="font2">{{ "chuanly130" }}</span>
      </div>
      <div class="top1">
        <span>{{ "货币" }}</span>
        <span class="font2">{{ "RMB" }}</span>
      </div>
      <div class="top1">
        <span>{{ "语言" }}</span>
        <div class="font3">
          <span class="font2">{{ lang || "中文" }}</span>
          <img class="arrow" src="@/assets/images/login/go@2x.png" />
        </div>
      </div>
      <div class="top1" @click="showPk()">
        <span>{{ "盘口" }}</span>
        <div class="font3">
          <span class="font2">{{ pankou || "欧洲盘[DEC]" }}</span>
          <img class="arrow" src="@/assets/images/login/go@2x.png" />
        </div>
      </div>
    </div>
    <van-popup v-model:show="showBottom" position="bottom" closeable round :style="{ height: '200px' }">
      <div class="pankou-title">盘口</div>
      <div class="pk-list">
        <div class="item" @click="setPk(1)">欧洲盘[DEC]</div>
        <div class="item" @click="setPk(2)">香港盘</div>
      </div>
    </van-popup>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
// const dataList = reactive([])
// const content = ref('111111')
const lang = ref('')
const pankou = ref('')
const showBottom = ref(false)
const goBack = () => {
  $router.back()
}
const title = ref('账号')
function showPk(val?: any) {
  console.log(val)
  showBottom.value = true
}
function setPk(val: any) {
  pankou.value = val === 1 ? '欧洲盘[DEC]' : '香港盘'
  showBottom.value = false
  console.log(val)
}

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
    height: calc(100vh - 150px);
    overflow-y: auto;
    padding: 42px 36px;

    .top1 {
      margin-bottom: 20px;
      width: 678px;
      height: 100px;
      padding: 30px 24px;
      background: #EFF1F2;
      border-radius: 20px;
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .font2 {
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #96A5AA;
        letter-spacing: 0;
        text-align: right;
        font-weight: 500;
      }
      .font3{
        display: flex;
        align-items: center;
        .arrow{
          margin-left: 10px;
          height: 26px;
          width: 26px;
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
