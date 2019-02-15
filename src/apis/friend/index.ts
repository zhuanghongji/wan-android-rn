
import { Response, Responses } from '../index'

/**
 * 常用网站
 * 
 * http://www.wanandroid.com/friend/json
 * 
 * 方法：GET 
 * 参数：无
 */
export function getFriends(): Responses<Friend> {
  return {} as Responses<Friend>;
}

interface Friend {
  icon: string;
  id: number;
  link: string;
  name: string;
  order: number;
  visible: number;
}