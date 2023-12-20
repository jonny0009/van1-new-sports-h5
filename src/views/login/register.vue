<template>
  <div class="register">
    <van-nav-bar class="signInBar" :border="false">
      <template #left>
        <img class="img_1" src="@/assets/images/login/arrow@2x.png" alt="" @click="goBack()" />
      </template>
      <template #title>
        <span class="title">注册</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <p class="setPassWorld">创建用户名</p>
      <van-field
        v-model="username"
        :class="[username ? 'bb' : '']"
        name=""
        label=""
        placeholder="用户名"
        maxlength="16"
        clearable
        :rules="[{ required: true, message: '请填写用户名' }]"
        @update:model-value="updateName"
      />

      <!--用户名规则  -->
      <p class="userName">用户名必须:</p>
      <p class="explain">
        <img v-if="!ifStandard" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>至少6个字母数字（最多16个）</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpecial" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>不能有特殊字符</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpace" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>不能有空格</span>
      </p>
      <div v-if="ifStandard && ifSpecial && ifSpace" class="loginBtn registerBtn" @click="handleRegister()">
        注册
      </div>
      <div v-else class="loginBtn">
        下一步
      </div>
      <p class="literal">已有账号? <span class="register" @click="loginIn">登录</span></p>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const $router = useRouter()
const username = ref<String>('')
const ifSpace = ref<Boolean>(false)
const ifSpecial = ref<Boolean>(false)
const ifStandard = ref<Boolean>(false)
// const form = reactive({
//   username: '',
//   password: ''
// })
const updateName = (str: string) => {
  if (!str) {
    ifSpace.value = false
    ifSpecial.value = false
    ifStandard.value = false
    return
  }
  if (str.indexOf(' ') !== -1) {
    ifSpace.value = false
  } else {
    ifSpace.value = true
  }
  // const regex = /^[a-zA-Z0-9]{6,16}$/
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/
  if (regex.test(str)) {
    ifStandard.value = true
  } else {
    ifStandard.value = false
  }
  if (str.indexOf('admin') > 0 || str.indexOf('test') > 0) {
    ifSpecial.value = false
  } else {
    ifSpecial.value = true
  }
}
const loginIn = () => {
  $router.push({ path: '/sign_in' })
}
const goBack = () => {
  $router.back()
}
const handleRegister = (e?: any) => {
  console.log(e, '注册====')
}

</script>

<style lang="scss" scope>
.register {
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
    padding: 56px 50px;

    .setPassWorld {
      font-family: PingFangSC-Semibold;
      font-size: 34px;
      color: #000000;
      letter-spacing: 0;
      font-weight: 600;
      margin-left: 10px;
      margin-bottom: 29px;
    }
  }

  .userName {
    margin-top: 12px;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
    margin-left: 15px;
  }

  .explain {
    margin-top: 12px;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 400;
    margin-left: 15px;

    .noPitch {
      width: 23px;
      height: 23px;
      margin-right: 14px;
    }

  }

  .loginBtn {
    height: 80px;
    width: 650px;
    margin-top: 80px;
    border-radius: 80px;
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #1F2630;
    letter-spacing: 0;
    font-weight: 600;
    line-height: 80px;
    text-align: center;
    background: #DFE4E5;
  }

  .registerBtn {
    background: #7642FD;
    color: #FFFF;
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
    margin-top: 30px;

    &::after {
      // border-bottom: 1px solid #97a6ab;
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
</style>
