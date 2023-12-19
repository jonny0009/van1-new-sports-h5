<template>
  <div class="login-page">
    <van-nav-bar class="bg-title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
      <template #title>
        <img class="img_2" src="@/assets/images/login/ai-logo@2x.png" alt="" />
      </template>
      <template #right>
        <img class="img_3" src="@/assets/images/login/service@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <div class="content">
      <p class="title">欢迎来到AI！</p>
      <span class="desc">全球最领先的体育社交平台</span>
      <div class="area-btn">
        <span @click="register">注册</span>
        <span @click="login">登录</span>
      </div>
      <div class="ban">
        <img class="ban_1" src="@/assets/images/login/login.png" alt="" />
      </div>

      <div class="list-set">
        <div class="item">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/lang@2x.png" /></div>
            <div class="label">{{ '语言' }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ lang || ' 中文' }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
        </div>
        <div class="item">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/area@2x.png" /></div>
            <div class="label">{{ '地区' }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ int || '国际' }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
        </div>
        <div class="item" @click="showPk()">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/pankou@2x.png" /></div>
            <div class="label">{{ '盘口' }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ pankou || ' 欧洲盘[DEC]' }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
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
const lang = ref('')
const int = ref('')
const pankou = ref('')
const showBottom = ref(false)
function showPk(val?: any) {
  console.log(val)
  showBottom.value = true
}

function setPk(val: any) {
  pankou.value = val === 1 ? '欧洲盘[DEC]' : '香港盘'
  showBottom.value = false
  console.log(val)
}

const goBack = () => {
  $router.back()
}
const register = () => {
  $router.push({ path: '/register' })
}
const login = () => {
  $router.push({ path: '/sign_in' })
}

</script>

<style lang="scss" scope>
.bg-title {
  width: 100%;
  height: 150px;
  background: url('@/assets/images/login/bg-tit@2x.png');
  background-size: 100% 100%;

  .img_1 {
    width: 36px;
    height: 36px;
  }

  .img_2 {
    width: 77px;
    height: 63px;
  }

  .img_3 {
    width: 34px;
    height: 37px;
  }
}

.content {
  background: #ffffff;
  border-radius: 16px 16px 0px 0px;
  padding: 0 45px;

  .title {
    font-family: PingFangSC-Semibold;
    font-size: 40px;
    color: #000;
    letter-spacing: 0;
    font-weight: 600;
    padding-top: 22.5px;
  }

  .desc {
    display: block;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #97a6ab;
    letter-spacing: 0;
    font-weight: 600;
  }

  .area-btn {
    margin-top: 20px;

    span {
      display: inline-block;
      background-image: linear-gradient(to right, #623AF8, #4121AF);
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      font-family: PingFangSC-Semibold;
      height: 80px;
      line-height: 80px;
      width: 320px;
      border-radius: 80px;

      &:first-child {
        background: #e5ecf3;
        color: #000;
      }

      &:last-child {
        color: #ffff;
        margin-left: 20px;
      }
    }
  }

  .ban {
    margin-top: 35px;

    img {
      width: 100%;
      height: 274px;
    }
  }

  .list-set {
    padding-top: 73px;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 73px;

      &:not(:last-child) {
        margin-bottom: 15px;
      }

      .label-info {
        font-size: 27px;

        .icon {
          width: 36px;
          height: 36px;
          margin-right: 23px;

          >img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }

      .label-right {
        display: flex;
        align-items: center;

        .label {
          font-family: PingFangSC-Regular;
          font-size: 27px;

          color: #96a5aa;
          letter-spacing: 1px;
          text-align: right;
          font-weight: 400;
        }

        .arrow {
          margin-left: 8px;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}

.flex {
  display: flex;

  &.align-center {
    align-items: center;
  }
}

.pankou-title {
  font-family: PingFangSC-Regular;
  font-size: 40px;
  color: #1f2630;
  letter-spacing: px;
  font-weight: 400;
  padding-left: 40px;
  padding-top: 20px;
}

.pk-list {
  padding: 30px 40px;

  .item {
    font-size: 40px;
    color: #1f2630;
    letter-spacing: 1px;
    padding: 10px 0;
    border-bottom: 2px solid #eaeaea;
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 150px;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
