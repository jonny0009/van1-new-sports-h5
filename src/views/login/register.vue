<template>
  <div class="register">
    <van-nav-bar class="bg-title" :border="false">
      <template #left>
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
      <template #title>
        <span class="title">{{ $t('user.register') }}</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <p class="setPassWorld">{{ $t('user.CreateUsername') }}</p>
      <van-field
        v-model="username"
        :class="[username ? 'bb' : '']"
        name=""
        label=""
        :placeholder="$t('user.userName')"
        maxlength="16"
        clearable
        :rules="[{ required: true, message: $t('user.CreateUsername') }]"
        @update:model-value="updateName"
      />

      <!--用户名规则  -->
      <p class="userName">{{ $t('user.text3') }}:</p>
      <p class="explain">
        <img v-if="!ifStandard" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>{{ $t('user.text4') }}</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpecial" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>{{ $t('user.text5') }}</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpace" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>{{ $t('user.text6') }}</span>
      </p>
      <div v-if="ifStandard && ifSpecial && ifSpace" class="loginBtn registerBtn" @click="handleRegister()">
        {{ $t('user.register') }}
      </div>
      <div v-else class="loginBtn">
        {{ $t('user.nextStep') }}
      </div>
      <p class="literal"> {{ $t('user.ExistingAccount') }}? <span class="register" @click="loginIn">{{ $t('user.logOn') }}</span></p>
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
  .bg-title {
    background-color: var(--color-background-color);

    .img_1 {
      margin-top: -15px;
      width: 36px;
      height: 36px;
      color: var(--title-text-font-color);

    }
  }
  .title {
    // font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
  }

  .content {
    height: calc(100vh - 90px);
    background-color: var(--color-background-color);
    padding: 56px 50px;

    .setPassWorld {
      font-family: PingFangSC-Semibold;
      font-size: 34px;
      color: var( --color-search-box-text-1);
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
    color: var( --color-search-box-text-1);
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
    color:var( --color-search-box-text-1) ;
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
    // width: 650px;
    width: 100%;
    margin-top: 80px;
    border-radius: 80px;
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
    line-height: 80px;
    text-align: center;
    background: var(--color-search-box-frame);
  }

  .registerBtn {
    background: var(--color-search-box-text);
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
    color: var( --color-bg-1);
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
  color: var(--color-search-box-text-2);
  letter-spacing: 0;
  font-weight: 600;
}

:deep(.bb.van-cell::after) {
  border-bottom: 8px solid var(--color-bg-1);
}

:deep(.van-cell::after) {
  border-bottom: 2px solid var(--color-search-box-text-2);
}
:deep(.van-field){
  background: var(--color-background-color);
}
:deep(.van-cel::after) {
  border-bottom: 2px solid var(--color-search-box-text-2) !important;
}
:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}
:deep(.van-icon) {
  font-size: 40px;
}
</style>
