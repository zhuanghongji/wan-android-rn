
import { Response, Responses } from '../index'

/**
 * 首页 banner
 * 
 * http://www.wanandroid.com/banner/json
 * 
 * 方法：GET  
 * 参数：无
 */
export function getBanners(): Responses<Banner> {
  return {} as Responses<Banner>;
}

interface Banner {
  desc: string;
  id: number;
  imagePath: string;
  isVisible: number;
  order: number;
  title: string;
  type: number;
  url: string;
}