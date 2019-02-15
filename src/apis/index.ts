
/* 
  参考自：
  * http://www.wanandroid.com/blog/show/2
  * http://www.wanandroid.com/blog/show/2442 

  返回数据结构定义:
  {
    "data": ...,
    "errorCode": 0,
    "errorMsg": ""
  }
  其中 errorCode 如果为负数则认为错误，此时 errorMsg 会包含错误信息。
  data 为 Object，返回数据根据不同的接口而变化。

  errorCode = 0 代表执行成功，不建议依赖任何非0的 errorCode.
  errorCode = -1001 代表登录失效，需要重新登录。
*/


export const ErrorCode = {
  /** 接口调用成功*/
  SUCCESS: 0,
  /** 登录失效，需要重新登录 */
  LOGIN_FAILED: -1001,
}

export interface Response<T> {
  data: T;
  errorCode: number;
  errorMsg: string;
}

export interface Responses<T> {
  data: T[];
  errorCode: number;
  errorMsg: string;
}










