
import { Response, Responses } from '../index'

/**
 * 退出
 * 
 * 访问了 logout 后，服务端会让客户端清除 Cookie（即cookie max-Age=0），
 * 如果客户端 Cookie 实现合理，可以实现自动清理，
 * 如果本地做了用户账号密码和保存，及时清理。
 * 
 * http://www.wanandroid.com/user/logout/json
 * 
 * 方法：GET
 */
export function userLogout() {

}