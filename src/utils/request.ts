import axios from 'axios'
import router from '@/router'
import { showDialog } from 'vant'
import { getToken, removeToken } from './auth'
import { getBrowserLanguage } from './index'
import store from '@/store'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
// .env.development/.env.production配置
const baseURL: any = import.meta.env.VITE_BASE_API
const service = axios.create({
  baseURL,
  timeout: 30000 // request timeout
})
// 不需要传groupId参数的数组
const noGroupId: Array<string> = [
  '/order/all/betRecordTab',
  '/common/businessConfig',
  '/merchantAccountServer/api/c/getCMerAccessType'
]
// 发起请求之前的拦截器
service.interceptors.request.use(
  (config: any) => {
    // 如果有token 就携带tokon
    const token = getToken()
    if (token) {
      config.headers.token = token
    }
    const groupId = 3
    config.headers['Content-Type'] = 'application/json'
    config.headers.token = token
    config.headers.terType = '16'
    config.headers.wid = store.state.user.currentWallet?.walletId || 1
    config.headers.lang = localStorage.getItem('locale') || getBrowserLanguage()
    config.headers.apiVer = '4.11'
    config.headers.groupId = groupId

    if (config.method === 'post') {
      if (noGroupId.indexOf(config.url) < 0) {
        config.data = config.data || {}
        config.data = Object.assign({}, { groupId }, config.data)
      }
    } else if (config.method === 'get') {
      if (noGroupId.indexOf(config.url) < 0) {
        config.params = config.params || {}
        config.params = Object.assign({}, { groupId }, config.params)
      }
    }
    return config
  },
  (error: any) => Promise.reject(error)
)
const authCode: any = [401, 403, 1010]

// 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    if (authCode.includes(response.data.code)) {
      // removeToken()
      const locale: any = (localStorage.getItem('locale') || getBrowserLanguage()).toLocaleLowerCase()
      const visitor = localStorage.getItem('visitor')

      const inform: any = {
        'zh-cn': '登录信息已失效,请重新登录',
        'vi-vn': 'Thông tin đăng nhập đã hết hạn, vui lòng đăng nhập lại',
        'ko-kr': '로그인 정보가 만료되었습니다. 다시 로그인해 주세요.',
        'pt-pt': 'As informações de login expiraram, faça login novamente.',
        'pt-br': 'As informações de login expiraram, faça login novamente.',
        'en-us': 'Login Information Has Expired, Please Log In Again.',
        'ja-jp': 'ログイン情報の有効期限が切れています。再度ログインしてください.',
        'ja': 'ログイン情報の有効期限が切れています。再度ログインしてください.',
        'zh-tw': '登入資訊已失效,請重新登入',
        'zh-sg': '登入資訊已失效,請重新登入',
        'es-es': 'La información de inicio de sesión ha caducado, inicie sesión nuevamente',
        'es': 'La información de inicio de sesión ha caducado, inicie sesión nuevamente',
        'id-id': 'Informasi login telah habis masa berlakunya, silakan login kembali',
        'id': 'Informasi login telah habis masa berlakunya, silakan login kembali',
        'hi-in': 'लॉगिन जानकारी समाप्त हो गई है, कृपया दोबारा लॉग इन करें',
        'hi': 'लॉगिन जानकारी समाप्त हो गई है, कृपया दोबारा लॉग इन करें',
        'tr-tr': 'Giriş bilgilerinin süresi doldu, lütfen tekrar giriş yapın',
        'tr': 'Giriş bilgilerinin süresi doldu, lütfen tekrar giriş yapın',
        'th-th': 'ข้อมูลการเข้าสู่ระบบหมดอายุแล้ว กรุณาเข้าสู่ระบบอีกครั้ง',
        'th': 'ข้อมูลการเข้าสู่ระบบหมดอายุแล้ว กรุณาเข้าสู่ระบบอีกครั้ง'
      }
      const informVisitor: any = {
        'zh-cn': '试玩时间已过期，请重新试玩',
        'vi-vn': 'Đã hết thời gian dùng thử, vui lòng thử lại',
        'ko-kr': '평가판 기간이 만료되었습니다. 다시 시도해 주세요.',
        'pt-pt': 'O tempo de teste expirou, tente novamente.',
        'pt-br': 'O tempo de teste expirou, tente novamente.',
        'en-us': 'The trial time has expired, please try again.',
        'ja-jp': '試用期間が終了しました。もう一度お試しください.',
        'ja': '試用期間が終了しました。もう一度お試しください.',
        'zh-tw': '試玩時間已過期，請重新試玩',
        'zh-sg': '試玩時間已過期，請重新試玩',
        'es-es': 'El tiempo de prueba ha expirado, inténtalo de nuevo.',
        'es': 'El tiempo de prueba ha expirado, inténtalo de nuevo.',
        'id-id': 'Masa uji coba telah habis, silakan coba lagi',
        'id': 'Masa uji coba telah habis, silakan coba lagi',
        'hi-in': 'परीक्षण का समय समाप्त हो गया है, कृपया पुनः प्रयास करें',
        'hi': 'परीक्षण का समय समाप्त हो गया है, कृपया पुनः प्रयास करें',
        'tr-tr': 'Deneme süresi doldu, lütfen tekrar deneyin',
        'tr': 'Deneme süresi doldu, lütfen tekrar deneyin',
        'th-th': 'เวลาทดลองใช้หมดลงแล้ว โปรดลองอีกครั้ง',
        'th': 'เวลาทดลองใช้หมดลงแล้ว โปรดลองอีกครั้ง'
      }
      let message = inform[locale]
      let url = '/login'
      if (visitor === '1') {
        message = informVisitor[locale]
        url = '/sign_in'
      }

      showDialog({
        message,
        theme: 'round-button'
      }).then(() => {
        removeToken()
        router.push(url)
      })
      // router.push('/login')
    } else if (+response.data.code === 403) {
      router.push('/403')
    } else if (+response.data.code === 503) {
      store.commit('app/updateMantainInfo', response.data.msg)
      if (location.href.indexOf('/503') === -1) {
        router.push('/503')
      }
    } else {
      return response.data
    }
  },
  (error: any) => {
    if (error.response && authCode.includes[error.response.status]) {
      removeToken()
      // router.push('/login')
    }
    const timer = setTimeout(() => {
      let Text = ''
      let TextB = ''
      try {
        Text = `request：${error.response.config.url}${error.message.split('code')[1]}！`
        if (error.response.data.msg.includes('#')) {
          TextB = error.response.data.msg.split('#')[1]
        } else {
          TextB = error.response.data.msg
        }
      } catch (e) {
        Text = error.message
        TextB = error.message
      }

      console.error(Text)
      clearTimeout(timer)
    }, 400)
    return Promise.reject(error).catch(() => {})
  }
)

export default service
