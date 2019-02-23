

import { HttpManager } from './index'


/**
 * 首页 banner
 * 
 * http://www.wanandroid.com/banner/json
 * 
 * 方法：GET  
 * 参数：无
 */
export function getBanner(): Promise<BannerItem[]> {
  return HttpManager.get('/banner/json')
}

/**
 * 单个轮播图数据
 */
export interface BannerItem {
  desc: string;
  id: number;
  imagePath: string;
  isVisible: number;
  order: number;
  title: string;
  type: number;
  url: string;
}