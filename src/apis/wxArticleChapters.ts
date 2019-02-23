import { HttpManager } from './index'

/**
 * 获取公众号列表
 * 
 * http://wanandroid.com/wxarticle/chapters/json  
 * 
 * - 方法： GET
 */
export function getWxArticleChapters(): Promise<WxArticleChapter> {
  return HttpManager.get('/wxarticle/chapters/json')
}

export interface WxArticleChapter {
  children: any[];
  courseId: number;
  id: number;
  name: string;
  order: number;
  parentChapterId: number;
  userControlSetTop: boolean;
  visible: number;
}
