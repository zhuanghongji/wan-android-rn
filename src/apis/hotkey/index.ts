
import { Responses, HttpManager } from '../index'

/**
 * 搜索热词，即目前搜索最多的关键词。
 * 
 * http://www.wanandroid.com/hotkey/json
 * 
 * 方法：GET  
 * 参数：无
 */
export function getHotkey(): Promise<Responses<Hotkey>> {
  return HttpManager.get('/hotkey/json')
}

export interface Hotkey {
  id: number;
  link: string;
  name: string;
  order: number;
  visible: number;
}