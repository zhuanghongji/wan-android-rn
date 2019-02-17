
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
  }
  if (params) {
    requestInit['body'] = getFormData(params)
  }
  console.log('requestInit = ', requestInit)

  return new Promise((resolve: (_: T) => void, reject: (e: any) => void) => {
    fetch(requestUrl, requestInit)
      .then((response) => response.json())
      .then((responseData: T) => {
        // 网络请求成功返回的数据
        console.log('res:', requestUrl, responseData);   
        resolve(responseData);
      })
      .catch((err) => {
        // 网络请求失败返回的数据  
        console.log('err:', requestUrl, err);   
        reject(err);
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
  static post<T>(url: string, params = undefined) {
      return request<T>('POST', url, params)
  }
}

export {
  HttpManager,
}