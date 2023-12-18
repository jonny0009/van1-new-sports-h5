<template>
  <div class="login-page">
    <van-nav-bar class="bg-title">
      <template #left>
        <img height="18" width="18" src="@/assets/images/login/arrow@2x.png" alt="" />
      </template>
      <template #title>
        <span class="title">登录</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">用户名/邮箱</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">手机</span>
      </div>

      <div v-if="index == 1" class="form">
        <van-field
          v-model="username"
          name=""
          label=""
          placeholder="用户名或电子邮箱"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <div></div>
        <van-field
          v-model="password"
          type="password"
          name=""
          label=""
          class="van-cel"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field

          v-model="password"
          type="password"
          name=""
          label=""
          style="display: none"
          placeholder=""
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const index = ref(1)

const onSubmit = (values: any) => {
  console.log('submit', values)
}
</script>

<style lang="scss" scope>
.title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #000;
  letter-spacing: 0;
  font-weight: 600;
}

.content {
  padding: 28px 25px;

  .area-btn {
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
}

.van-cel {
  &::after {
    border-bottom: 1px solid #97a6ab;
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
