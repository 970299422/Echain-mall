import axios from "axios"
import {
  getToken,
  removeToken
} from "@/api/token.js"
import {
  Message,
  Loading
} from "element-ui"

const BASE_URL = "/"

let loadingInstance = null //这里是loading

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const httpConfig = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 拦截器
httpConfig.interceptors.request.use(
  config => {

    loadingInstance = Loading.service({
      lock: true,
      text: 'loading...'
    })

    if (getToken()) {
      config.headers.token = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

httpConfig.interceptors.response.use(
  response => {

    loadingInstance.close()

    if (response.data.code === 206) {
      Message.warning(response.data.message)
      removeToken()
    }
    return response.data
  },
  error => {
    loadingInstance.close()

    if (error.response && error.response.status) {
      switch (error.response.status) {
        // 401: 未登录             
        case 401:
          // router.replace({
          //   path: '/login',
          //   query: {
          //     redirect: router.currentRoute.fullPath
          //   }
          // });
          break;
        // 403 token过期             
        case 403:
          Message.warning('登录过期，请重新登录')
          // 清除token
          localStorage.removeItem('token');
          // store.commit('loginSuccess', null);
          // // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
          // setTimeout(() => {
          //   router.replace({
          //     path: '/login',
          //     query: {
          //       redirect: router.currentRoute.fullPath
          //     }
          //   });
          // }, 1000);
          break;
        // 404请求不存在
        case 404:
          Message.warning('网络请求不存在')
          break;
          // 其他错误，直接抛出错误提示
        default:
          Message.warning(error.response.data.message)
      }
      return Promise.reject(error.response);
    }
    
  }
)

export default httpConfig

// function httpReq(subUrl, method, args) {
//   console.log(`request url: ${BASE_URL}${subUrl}`)
//   if (method === "POST" || method === "PUT") {
//     return errCheck(
//       httpConfig({
//         url: `${BASE_URL}${subUrl}`,
//         method,
//         data: args,
//       })
//     )
//   } else {
//     // if (method === "GET" || method === "DELETE") {
//     return errCheck(
//       httpConfig({
//         url: `${BASE_URL}${subUrl}`,
//         method,
//         data: args,
//       })
//     )
//   }
// }

// let httpGet = function ({subUrl, data}) {
//   console.log("get Request...", subUrl, data)
//   return httpReq(subUrl, "GET", data)
// }

// let httpPost = function ({subUrl, data}) {
//   console.log("post Request...", subUrl, data)
//   return httpReq(subUrl, "POST", data)
// }

// let httpPut = function ({subUrl, data}) {
//   console.log("put Request...", subUrl, data)
//   subUrl = `${subUrl}/${data.id}`
//   return httpReq(subUrl, "PUT", undefined)
// }

// let httpDel = function ({subUrl, data}) {
//   console.log("delete Request...", subUrl, data)
//   subUrl = `${subUrl}/${data.id}`
//   return httpReq(subUrl, "DELETE", undefined)
// }

// const Server = {
//   httpGet,
//   httpPost,
//   httpPut,
//   httpDel
// }

// export default Server