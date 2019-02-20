
import { Response, HttpManager } from '../index'

/**
 * 收藏网址
 * 
 * http://www.wanandroid.com/lg/collect/addtool/json
 * 
 * 方法：POST
 * 参数：
 * - name,link
 */
export function collectLink(name: string, link: string): Promise<Response<LinkCollection>> {
  return HttpManager.post('/lg/collect/addtool/json', {
    name,
    link,
  })
}

/**
 * 收藏网址
 */
export interface LinkCollection {
  desc: string;
  icon: string;
  id: number;
  link: string;
  name: string;
  order: number;
  userId: number;
  visible: number;
}