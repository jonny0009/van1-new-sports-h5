import router from '@/router'
import Fingerprint2 from 'fingerprintjs2'
import localStore from '@/utils/localStore'
import aesUtil from '@/utils/aesUtil'
import store from '@/store'
import { tryLogin } from '@/api/login'

const createFingerprint = () => {
  // 浏览器指纹
  if (!localStore.getItem('appFingerprint')) {
    Fingerprint2.get((components: any) => {
      // 参数只有回调函数或者options为{}时，默认浏览器指纹依据所有配置信息进行生成
      const values = components.map((component: any) => component.value) // 配置的值的数组
      const murmur = Fingerprint2.x64hash128(values.join(''), 31) // 生成浏览器指纹

      localStore.setItem('appFingerprint', murmur)
    })
  } // end 浏览器指纹
}

router.beforeEach(async (_to: any, _from: any, next) => {
  const hasToken = store.state.user.token
  if (hasToken) {
    await store.dispatch('app/businessConfig')
    next()
  } else {
    createFingerprint()
    try {
      await store.dispatch('app/businessConfig')

      // 试玩自动登录
      const { loginKey } = store.state.app.businessConfig
      const rDecrypt = localStore.getItem('appFingerprint')

      if (rDecrypt) {
        const aDecrypt = aesUtil.encrypt(rDecrypt, loginKey)
        const params = {
          loginTempName: aDecrypt
        }
        // console.log('key', loginKey)
        // console.log('设备ID', rDecrypt)
        // console.log('加密后', params.loginTempName)
        const res: any = await tryLogin(params)
        if (res.code === 200) {
          const { token } = res.data || {}
          store.commit('user/SET_TOKEN', token)
          next()
        }
      } else {
        next('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }
})

router.afterEach(() => {})
