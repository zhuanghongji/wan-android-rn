import { func } from "prop-types";

interface WanResponse<T> {
  data: T;
  errorCode: number;
  errorMsg: string;
}

interface WanError {
  code: number,
  message: string,
}

const ErrorCode = {
  /** 接口调用成功*/
  SUCCESS: 0,
  /** 登录失效，需要重新登录 */
  LOGIN_FAILED: -1001,

  /** 网络请求异常（自定义） */
  RESPONSE_ONT_OK: -1,
  /** 网络请求异常（自定义） */
  RESPONSE_ERROR: -2,
}

/**
 * The base url of wanandroid.com api
 */
const BASE_URL = 'http://www.wanandroid.com'

/**
 * 从 params 中解析出参数
 * @param params 如 { a: 'A'}
 */
function getFormData(params: any): FormData {
  let formData = new FormData()
  for (var key in params) {
      formData.append(key, params[key])
  }
  return formData
}

/**
 * 
 * @param method 请求方法，如 'GET', 'POST' 等
 * @param path api 路径，如 '/banner/json'
 * @param params 参数
 */
function request<T>(method: string, path: string, params = undefined): Promise<T> {
  let requestUrl =  BASE_URL + path
  if (path.startsWith('http://') || path.startsWith('https://')) {
    requestUrl = path
  }
  console.log('请求方法和地址：', method, requestUrl)

  let requestInit: RequestInit = {
    method: method,
    credentials: 'same-origin',
  }
  if (params) {
    requestInit['body'] = getFormData(params)
  }
  console.log('requestInit = ', requestInit)

  return new Promise((resolve: (data: T) => void, reject: (e: WanError | null) => void) => {
    fetch(requestUrl, requestInit)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return null
      }).then((wanResponse: WanResponse<T> | null) => {
        // 网络请求成功返回的数据
        console.log('response:', requestUrl, wanResponse);  
        if (!wanResponse) {
          reject({ code: ErrorCode.RESPONSE_ONT_OK, message: '网络请求异常，请稍后重试'})
          return
        }
        
        if (wanResponse.errorCode === ErrorCode.SUCCESS) {
          resolve(wanResponse.data)
          return
        } 
        // if (wanResponse.errorCode === ErrorCode.LOGIN_FAILED) {
        //   reject({ code: wanResponse.errorCode, message: wanResponse.errorMsg })
        //   return
        // }
        reject({ code: wanResponse.errorCode, message: wanResponse.errorMsg })
      })
      .catch((e) => {
        // 网络请求失败返回的数据  
        console.log('catch:', requestUrl, e);   
        reject({ code: ErrorCode.RESPONSE_ERROR, message: e.message })
      });
  })
}

/**
 * 网络请求管理类
 */
class HttpManager {

  /**
   * 通过 GET 请求资源
   * 
   * @param path 资源路径，如 '/banner/json'
   * @param params 参数，如 { a: 'A' }，默认值为 undefined
   */
  static get<T>(url: string, params = undefined) {
      return request<T>('GET', url, params)
  }

  /**
   * 通过 POST 请求资源
   * 
   * @param path 资源路径，如 '/lg/todo/add/json'
   * @param params 参数，如 { a: 'A' }，默认值为 undefined
   */
  static post<T>(url: string, params: any = undefined) {
      return request<T>('POST', url, params)
  }
}

export {
  HttpManager,
}