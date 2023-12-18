<template>
  <div class="register">
    <van-nav-bar class="signInBar" :border="false">
      <template #left>
        <img height="18" width="18" src="@/assets/images/login/arrow@2x.png" alt="" @click="goBack()" />
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
      <div class="google" />
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
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .content {
    padding: 28px 25px;

    .setPassWorld {
      font-family: PingFangSC-Semibold;
      font-size: 17px;
      color: #000000;
      letter-spacing: 0;
      font-weight: 600;
      margin-left: 10px;
    }
  }

  .userName {
    margin-top: 3px;
    font-family: PingFangSC-Semibold;
    font-size: 12px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
    margin-left: 15px;
  }

  .explain {
    margin-top: 3px;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 400;
    margin-left: 15px;

    .noPitch {
      width: 11px;
      height: 11px;
      margin-right: 7px;
    }

  }

  .loginBtn {
    height: 40px;
    width: 325px;
    margin-top: 40px;
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

  .registerBtn {
    background: #7642FD;
    color: #FFFF;
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
      // border-bottom: 1px solid #97a6ab;
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

:deep(.bb.van-cell::after) {
  border-bottom: 4px solid #7642FD;
}

:deep(.van-cell::after) {
  border-bottom: 1px solid #97a6ab;
}

:deep(.van-cel::after) {
  border-bottom: 1px solid #97a6ab !important;
}
</style>
