
import { Response, HttpManager } from '../index'

/**
 * 编辑收藏网站
 * 
 * http://www.wanandroid.com/lg/collect/updatetool/json
 * 
 * 方法：POST
 * 参数：
 * - id
 * - name
 * - link
 */
export function collectUpdateTool(id: number, name: string, link: string)
    : Promise<Response<CollectUpdate>> {
  return HttpManager.post('/lg/collect/updatetool/json', {
    id,
    name,
    link,
  })
}

/**
 * 编辑收藏网站
 */
export interface CollectUpdate {
  desc: string;
  icon: string;
  id: number;
  link: string;
  name: string;
  order: number;
  userId: number;
  visible: number;
}