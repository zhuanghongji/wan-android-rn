
import { HttpManager } from './index'

/**
 * 收藏网站列表
 * 
 * http://www.wanandroid.com/lg/collect/usertools/json
 * 
 * 方法：GET  
 * 参数：无
 */
export function getLinkCollectedList(): Promise<LinkCollectedList[]> {
  return HttpManager.get('/lg/collect/usertools/json')
}

export interface LinkCollectedList {
  data: LinkCollected[];
  errorCode: number;
  errorMsg: string;
}

export interface LinkCollected {
  desc: string;
  icon: string;
  id: number;
  link: string;
  name: string;
  order: number;
  userId: number;
  visible: number;
}