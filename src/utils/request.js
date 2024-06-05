import axios from 'axios'
import { getToken } from './tokenStore'
const service = axios.create({
  baseURL: 'http://hiyou.space/api',
  withCredentials: false,
  timeout: 35000
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    let token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status && response.status !== 200) {
      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
