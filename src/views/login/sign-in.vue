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

      <van-form @submit="onSubmit">
        <div v-if="index == 1" class="form">
          <van-field
            v-model="form.username"
            name=""
            label=""
            clearable
            placeholder="用户名或电子邮箱"
            :rules="[{ required: true, message: '请填写用户名或电子邮箱' }]"
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
        <p class="forgetPassword" @click="toForget()">忘记密码?</p>
        <van-button
          van-button
          class="loginBtn"
          :class="[Boolean(form.password && form.username) ? 'ifBtn' : '']"
          native-type="submit"
        >
          登录
        </van-button>
      </van-form>
      <!-- <p class="literal">还没账号? <span class="register" @click="register">注册</span></p> -->
      <p class="literal" @click="tryPlay">还没账号?试玩一下 </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
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
    Fingerprint2.get((components:any) => {
      // 参数只有回调函数或者options为{}时，默认浏览器指纹依据所有配置信息进行生成
      const values = components.map((component:any) => component.value) // 配置的值的数组
      const murmur = Fingerprint2.x64hash128(values.join(''), 31) // 生成浏览器指纹

      localStore.setItem('appFingerprint', murmur)
    })
  } // end 浏览器指纹
})
const goBack = () => {
  $router.back()
}
// const register = () => {
//   $router.push({ path: '/register' })
// }
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
  if ([901008].includes(res.code)) {
    showToast(
      '会员功能关闭,' + '\t\n' + '您的会员功能已被暂时关闭,您将无法登录!如有疑问请联系客服:400-000-0000'
    )
    return false
  }
  if (res.code === 200) {
    setToken(res.data)
    window.location.href = '/'
    // checkFirstEnter()
    return
  } else if (res.code === 205) {
    showToast('账号或密码错误')
  } else if (res.code === 204) {
    showToast('账号不存在')
  } else if (res.code === 207) {
    showToast('账号已禁用')
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
  --van-toast-text-padding:20px 30px;
  --van-toast-font-size:28px;

}
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

  .ifBtn {
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
  font-size: 32px;
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
