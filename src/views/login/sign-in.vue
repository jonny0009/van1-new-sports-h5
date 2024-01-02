<template>
  <div class="signIn">
    <van-nav-bar class="bg-title" :border="false">
      <template #left>
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
      <template #title>
        <span class="title">{{ t('user.logOn') }}</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">{{ t('user.usernameE') }}</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">{{ t('user.mobilePhone') }}</span>
      </div>

      <van-form @submit="onSubmit">
        <div v-if="index == 1" class="form">
          <van-field
            v-model="form.username"
            name=""
            label=""
            clearable
            :placeholder="t('user.text2')"
            :rules="[{ required: true, message: t('user.text2') }]"
          />
          <div></div>
          <van-field
            v-model="form.password"
            type="password"
            name=""
            label=""
            class="van-cel"
            :placeholder="t('user.password')"
            clearable
            :rules="[{ required: true, message: t('user.password') }]"
          />
          <div></div>
        </div>
        <div v-if="index == 2" class="form">
          <van-field
            v-model="form.username"
            name=""
            label=""
            :placeholder="t('user.phoneNumber')"
            clearable
            :rules="[{ required: true, message: t('user.phoneNumber') }]"
          />
          <div></div>
          <van-field
            v-model="form.password"
            type="password"
            name=""
            label=""
            class="van-cel"
            clearable
            :placeholder="t('user.password')"
            :rules="[{ required: true, message: t('user.password') }]"
          />
          <div></div>
        </div>
        <p class="forgetPassword" @click="toForget()">{{ t('user.forgotPassword') }}?</p>
        <van-button
          van-button
          class="loginBtn"
          :class="[Boolean(form.password && form.username) ? 'ifBtn' : '']"
          native-type="submit"
        >
          {{ t('user.logOn') }}
        </van-button>
      </van-form>
      <!-- <p class="literal">还没账号? <span class="register" @click="register">注册</span></p> -->
      <p class="literal" @click="tryPlay">{{ t('user.text13') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import store from '@/store'
import { useRouter } from 'vue-router'
import md5 from 'md5'
// getLanguages
import { login, tryLogin } from '@/api/login'
import { showToast } from 'vant'
import { setToken } from '@/utils/auth'
import localStore from '@/utils/localStore'
import Fingerprint2 from 'fingerprintjs2'
import aesUtil from '@/utils/aesUtil'
const keyStr = computed(() => store.state.app.businessConfig.loginKey)
const $router = useRouter()
const index = ref(1)
// const merchantId = ref('')
const form = reactive({
  username: '',
  password: ''
})
onMounted(() => {
  // 浏览器指纹
  if (!localStore.getItem('appFingerprint')) {
    Fingerprint2.get((components: any) => {
      // 参数只有回调函数或者options为{}时，默认浏览器指纹依据所有配置信息进行生成
      const values = components.map((component: any) => component.value) // 配置的值的数组
      const murmur = Fingerprint2.x64hash128(values.join(''), 31) // 生成浏览器指纹

      localStore.setItem('appFingerprint', murmur)
    })
  } // end 浏览器指纹
})
const goBack = () => {
  $router.back()
}

const tryPlay = async () => {
  const rDecrypt = localStore.getItem('appFingerprint')
  if (rDecrypt) {
    const aDecrypt = aesUtil.encrypt(rDecrypt, keyStr.value)
    const params = {
      loginTempName: aDecrypt
    }

    console.log('key', keyStr.value)
    console.log('设备ID', rDecrypt)
    console.log('加密后', params.loginTempName)
    const res: any = await tryLogin(params)
    if (res.code === 200) {
      const { token } = res.data || {}
      setToken(token)
      // setUserInfo()
      window.location.href = '/'
    } else {
      showToast(res.msg)
    }
  }
}

const onSubmit = async (values?: any) => {
  console.log(values)
  if (!form.username || !form.password) return
  const params = {
    // merchantId: merchantId,
    loginName: form.username,
    passWord: md5(encodeURI(form.password))
  }
  const res: any = await login(params)
  if (res.code === 200) {
    setToken(res.data)
    window.location.href = '/'
    // checkFirstEnter()
    return
  } else if (res.code === 205) {
    showToast(t('user.text14'))
  } else if (res.code === 204) {
    showToast(t('user.text15'))
  } else if (res.code === 207) {
    showToast(t('user.text16'))
  } else {
    showToast(res.msg)
  }
}
// const checkFirstEnter = async () => {
//   // 获取商户设置的语言，如果属于属于新账号国际版则直接跳到首页
//   const res:any = await getLanguages({})
// }
const toForget = (values?: any) => {
  console.log('忘记密码=====', values)
}
</script>

<style lang="scss" scope>
:root {
  --van-toast-text-padding: 20px 30px;
  --van-toast-font-size: 28px;

}

.signIn {
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

  >.content {
    height: calc(100vh - 96px);
    background-color: var(--color-background-color);
    padding: 28px 25px;

  }

  .area-btn_1 {
    display: flex;
    justify-content: space-around;

    span {
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: var(--color-search-box-text-2);
      letter-spacing: 0;
      font-weight: 600;
    }

    .active {
      color: var(--color-search-box-text-1);

      &::after {
        content: '';
        width: 50%;
        height: 6px;
        display: block;
        margin: 20px auto;
        border-bottom: 6px solid var(--color-search-box-text-1);
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
    // width: 650px;
    width: 100%;
    margin-top: 50px;
    border-radius: 80px;
    font-family: PingFangSC-Semibold;
    font-size: 27px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
    line-height: 80px;
    text-align: center;
    background: var(--color-search-box-frame);
    border: none;
  }

  .ifBtn {
    // background: var(--color-search-box-text);
    background-image: linear-gradient(to right, var(--color-login-button-color-1), var(--color-login-button-color-2));
    color: #FFFF;
  }

  .literal {
    margin-top: 40px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
  }

  .register {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: var(--color-bg-1);
    letter-spacing: 0;
    font-weight: 600;
  }

  .van-cel {
    margin-top: 60px;

    &::after {
      border-bottom: 1px solid var(--color-search-box-text-2);
    }
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 96px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color: var(--title-text-font-color);

}

:deep(input::placeholder) {
  /* font-family: PingFangSC-Semibold; */
  font-size: 24px;
  color: var(--color-search-box-text-2);
  /* letter-spacing: 0; */
  font-weight: 600;
}

:deep(.van-cell::after) {
  border-bottom: 2px solid var(--color-search-box-text-2);
}

:deep(.van-cel::after) {
  border-bottom: 2px solid var(--color-search-box-text-2) !important;
}

:deep(.van-field__control) {
  height: 50px;
  font-size: 32px;
}
:deep(.van-field){
  background: var(--color-background-color);
}

:deep(.van-field__error-message) {
  height: 50px;
  font-size: 24px;
}

:deep(.van-icon) {
  font-size: 38px;
}

:deep(.van-toast__text) {
  font-size: 38px;
}
</style>
