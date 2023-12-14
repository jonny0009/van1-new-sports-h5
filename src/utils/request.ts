import axios from 'axios'
import router from '@/router'
import { getToken, removeToken } from './auth'
// .env.development/.env.production配置
const baseURL: any = import.meta.env.VITE_BASE_API
const service = axios.create({
  baseURL,
  timeout: 30000 // request timeout
})

// 发起请求之前的拦截器
service.interceptors.request.use(
  (config: any) => {
    // 如果有token 就携带tokon
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    // other：放置其它需要传入的参数
    const headers: any = (config.data && config.data.other && config.data.other.headers) || {}
    for (const k in headers) {
      config.headers[k] = headers.headers[k]
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
      removeToken()
      router.push('/login')
    } else if (+response.data.code !== 200) {
      return response.data
    } else {
      return response.data
    }
  },
  (error: any) => {
    if (error.response && authCode.includes[error.response.status]) {
      removeToken()
      router.push('/login')
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

    return Promise.reject(error)
  }
)

export default service
