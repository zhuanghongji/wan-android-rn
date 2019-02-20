
import { Response, HttpManager } from '../index'

/**
 * 注册
 * 
 * http://www.wanandroid.com/user/register
 * 
 * 方法：POST  
 * 参数
 * - username, password, repassword
 */
export function userRegister(username: string, password: string, repassword: string)
    : Promise<Response<RegisterInfo>> {
  return HttpManager.post('/user/register', {
    username,
    password,
    repassword,
  })
}

export interface RegisterInfo {
  chapterTops: any[];
  collectIds: any[];
  email: string;
  icon: string;
  id: number;
  password: string;
  token: string;
  type: number;
  username: string;
}