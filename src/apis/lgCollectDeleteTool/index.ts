
import { Response, HttpManager } from '../index'

/**
 * 删除收藏网站
 * 
 * http://www.wanandroid.com/lg/collect/deletetool/json
 * 
 * 方法：POST
 * 参数：
 * - id
 */
export function deleteLinkCollection(id: number): Promise<Response<null>> {
  return HttpManager.post('/lg/collect/deletetool/json', {
    id,
  })
}