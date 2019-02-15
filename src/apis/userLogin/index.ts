
import { Response, Responses } from '../index'

/**
 * 登录，登录后会在cookie中返回账号密码，只要在客户端做cookie持久化存储即可自动登录验证。
 * 
 * http://www.wanandroid.com/user/login
 * 
 * 方法：POST
 * 参数：
 * - username，password
 */
export function userLogin(username: string, password: string) {

}