
import { Response, Responses } from '../index'
import { HttpManager } from 'src/managers/HttpManager';

/**
 * 收藏站内文章
 * 
 * http://www.wanandroid.com/lg/collect/1165/json
 * 
 * 方法：POST
 * 参数： 文章 id，拼接在链接中。
 */
export function collectArticle(articleId: number): Promise<Response<null>> {
    return HttpManager.post(`/lg/collect/${articleId}/json`)
}