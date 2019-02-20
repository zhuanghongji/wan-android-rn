
import { Response, Responses } from '../index'

/**
 * 取消收藏（我的收藏页面（该页面包含自己录入的内容））
 * 
 * http://www.wanandroid.com/lg/uncollect/2805/json
 * 
 * 方法：POST  
 * 参数： 
 * - id:拼接在链接上
 * - originId:列表页下发，无则为-1
 * 
 * originId 代表的是你收藏之前的那篇文章本身的id； 
 * 但是收藏支持主动添加，这种情况下，没有 originId 则为 -1
 */
export function uncollectArticle(id: number, originId: number) {

}