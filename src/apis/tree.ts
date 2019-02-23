
import { HttpManager, ArticleItem } from './index'

/**
 * 体系数据，主要标识的网站内容的体系结构，二级目录。
 * 
 * http://www.wanandroid.com/tree/json
 * 
 * 方法：GET
 * 参数：无
 */
export function getTree(): Promise<Tree[]> {
  return HttpManager.get('/tree/json');
}

export interface Tree {
  children: Children[];
  courseId: number;
  id: number;
  name: string;
  order: number;
  parentChapterId: number;
  userControlSetTop: boolean;
  visible: number;
}

export interface Children {
  children: ArticleItem[];
  courseId: number;
  id: number;
  name: string;
  order: number;
  parentChapterId: number;
  userControlSetTop: boolean;
  visible: number;
}