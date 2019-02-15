
import { Response, Responses } from '../index'

/**
 * 体系数据，主要标识的网站内容的体系结构，二级目录。
 * 
 * http://www.wanandroid.com/tree/json
 * 
 * 方法：GET
 * 参数：无
 */
export function getTrees(): Responses<Tree> {
  return {} as Responses<Tree>;
}

interface Tree {
  children: Child[];
  courseId: number;
  id: number;
  name: string;
  order: number;
  parentChapterId: number;
  userControlSetTop: boolean;
  visible: number;
}

interface Child {
  children: any[];
  courseId: number;
  id: number;
  name: string;
  order: number;
  parentChapterId: number;
  userControlSetTop: boolean;
  visible: number;
}