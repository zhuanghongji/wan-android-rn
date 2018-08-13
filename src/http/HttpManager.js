
const base_url = 'http://www.wanandroid.com'

function getFormData(params) {
    let formData = new FormData()
    for (var key in params) {
        formData.append(key, params[key])
    }
    return formData
}

function request(method, url, params = '') {
  let request_url =  base_url + url
  if (url.startsWith('http://') || url.startsWith('https://')) {
      request_url= url
  } else {
      request_url =  base_url + url
  }
  console.log('请求链接', method, request_url)

  let config = {
      method: method
  }
  if (params != '') {
      config['body'] = getFormData(params)
  }
  console.log('参数', config)

  return new Promise((resolve, reject) => {
      fetch(request_url, config)
        .then((response) => response.json())
        .then((responseData) => {
          // 网络请求成功返回的数据
          console.log('res:', url, responseData);   
          resolve(responseData);
        })
        .catch((err) => {
          // 网络请求失败返回的数据  
          console.log('err:',url, err);   
          reject(err);
        });

  })
}

export default class HttpUtil {
  static get(url, params = '') {
      return request('GET', url, params)
  }

  static post(url, params = '') {
      return request('POST', url, params)
  }
}