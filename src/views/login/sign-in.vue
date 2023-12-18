<template>
  <div class="signIn">
    <van-nav-bar class="signInBar">
      <template #left>
        <img height="18" width="18" src="@/assets/images/login/arrow@2x.png" alt="" @click="goBack()" />
      </template>
      <template #title>
        <span class="title">登录</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">用户名/邮箱</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">手机</span>
      </div>

      <div v-if="index == 1" class="form">
        <van-field
          v-model="form.username"
          name=""
          label=""
          clearable
          placeholder="用户名或电子邮箱"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <div></div>
        <van-field
          v-model="form.password"
          type="password"
          name=""
          label=""
          class="van-cel"
          placeholder="密码"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div></div>
      </div>
      <div v-if="index == 2" class="form">
        <van-field
          v-model="form.username"
          name=""
          label=""
          placeholder="手机号码"
          clearable
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <div></div>
        <van-field
          v-model="form.password"
          type="password"
          name=""
          label=""
          class="van-cel"
          clearable
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div></div>
      </div>
      <!--忘记密码  -->
      <p class="forgetPassword" @click="toForget()">忘记密码?</p>
      <div class="loginBtn" @click="handleLogin()">
        登录
      </div>
      <div class="google" />
      <p class="literal">还没账号? <span class="register" @click="register">注册</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const index = ref(1)
const form = reactive({
  username: '',
  password: ''
})
const goBack = () => {
  $router.back()
}
// const onSubmit = (values: any) => {
//   console.log('submit', values)
// }
const register = () => {
  $router.push({ path: '/register' })
}
const handleLogin = (values?: any) => {
  console.log('登录===', values)
}
const toForget = (values?: any) => {
  console.log('忘记密码=====', values)
}
</script>

<style lang="scss" scope>
.signIn {
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .content {
    padding: 28px 25px;

  }

  .area-btn_1 {
    display: flex;
    justify-content: space-around;

    span {
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #97a6ab;
      letter-spacing: 0;
      font-weight: 600;
    }

    .active {
      color: #000000;

      &::after {
        content: '';
        width: 50%;
        height: 3px;
        display: block;
        margin: 10px auto;
        border-bottom: 3px solid #000;
        border-radius: 3px;
      }
    }
  }

  .forgetPassword {
    margin-top: 31px;
    margin-left: 10px;
    font-family: PingFangSC-Semibold;
    font-size: 12px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .loginBtn {
    height: 40px;
    width: 325px;
    margin-top: 23px;
    border-radius: 40px;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #1F2630;
    letter-spacing: 0;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    background: #DFE4E5;
  }

  .google {
    margin-top: 10px;
    height: 40px;
    width: 325px;
    border-radius: 40px;
    background: url("@/assets/images/login/google.png");
    background-size: 100% 100%;
  }

  .literal {
    margin-top: 20px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 12px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .register {
    font-family: PingFangSC-Semibold;
    font-size: 12px;
    color: #7642FD;
    letter-spacing: 0;
    font-weight: 600;
  }

  .van-cel {
    margin-top: 30px;

    &::after {
      border-bottom: 1px solid #97a6ab;
    }
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 45px;
}

:deep(input::placeholder) {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #97a6ab;
  letter-spacing: 0;
  font-weight: 600;
}

:deep(.van-cell::after) {
  border-bottom: 1px solid #97a6ab;
}

:deep(.van-cel::after) {
  border-bottom: 1px solid #97a6ab !important;
}
</style>
