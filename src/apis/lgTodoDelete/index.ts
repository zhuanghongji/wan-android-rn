
import { Response, HttpManager } from '../index'

/**
 * 删除一条Todo
 * http://www.wanandroid.com/lg/todo/delete/83/json
 * 
 * 方法：POST
 * 参数：
 * id: 拼接在链接上，为唯一标识
 */
export function deleteTodo(id: number): Promise<Response<null>> {
  return HttpManager.post(`/lg/todo/delete/${id}/json`)
}