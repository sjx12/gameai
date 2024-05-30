import { getToken } from '@/utils/tokenStore'
export default {
  namespaced: true,
  state: {
    tokenInfo: getToken() || null, //保存登录状态信息
    userInfo: {
      userName: '小周',
      address: '郑州'
    } //保存当前所在租户信息
  },
  mutations: {
    // 获取用户信息
    UPDATE_USERINFO: (state, data) => {
      state.userInfo = data
    },
    UPDATE_TOKEN: (state, data) => {
      state.tokenInfo = data
    }
  },
  actions: {}
}
