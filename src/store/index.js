import Vue from 'vue'
import Vuex from 'vuex'
import {
  setToken,
  getToken,
  removeToken
} from '@/api/token';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: !!getToken(),
    userInfo: ''
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.loginStatus = status
    },
    SET_USERINFO(state, infoStr) {
      state.userInfo = infoStr
    }
  },
  actions: {
  },
  modules: {
  }
})
