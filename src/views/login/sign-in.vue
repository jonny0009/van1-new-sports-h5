<template>
  <div class="signIn">
    <van-nav-bar class="signInBar" :border="false">
      <template #left>
        <img class="img_1" src="@/assets/images/login/arrow@2x.png" alt="" @click="goBack()" />
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
  .img_1 {
    width: 35px;
    height: 35px;
  }

  .title {
    // font-family: PingFangSC-Semibold;
    font-size: 28px;
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
      font-size: 28px;
      color: #97a6ab;
      letter-spacing: 0;
      font-weight: 600;
    }

    .active {
      color: #000000;

      &::after {
        content: '';
        width: 50%;
        height: 6px;
        display: block;
        margin: 20px auto;
        border-bottom: 6px solid #000;
        border-radius: 6px;
      }
    }
  }

  .form {
    margin-top: 40px;
  }

  .forgetPassword {
    margin-top: 62px;
    margin-left: 20px;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .loginBtn {
    height: 80px;
    width: 650px;
    margin-top: 50px;
    border-radius: 80px;
    font-family: PingFangSC-Semibold;
    font-size: 27px;
    color: #1F2630;
    letter-spacing: 0;
    font-weight: 600;
    line-height: 80px;
    text-align: center;
    background: #DFE4E5;
  }

  .literal {
    margin-top: 40px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .register {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #7642FD;
    letter-spacing: 0;
    font-weight: 600;
  }

  .van-cel {
    margin-top: 60px;

    &::after {
      border-bottom: 1px solid #97a6ab;
    }
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 180px;
}

:deep(input::placeholder) {
  /* font-family: PingFangSC-Semibold; */
  font-size: 24px;
  color: #97a6ab;
  /* letter-spacing: 0; */
  font-weight: 600;
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
</style>
