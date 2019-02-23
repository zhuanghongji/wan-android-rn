
import { HttpManager } from './index'

/**
 * 导航数据
 * 
 * http://www.wanandroid.com/navi/json
 * 
 * 方法：GET  
 * 参数：无
 */
export function getNavi(): Promise<NaviItem[]> {
  return HttpManager.get('/navi/json')
}

export interface NaviItem {
  articles: NaviArticle[];
  cid: number;
  name: string;
}

export interface NaviArticle {
  apkLink: string;
  author: string;
  chapterId: number;
  chapterName: string;
  collect: boolean;
  courseId: number;
  desc: string;
  envelopePic: string;
  fresh: boolean;
  id: number;
  link: string;
  niceDate: string;
  origin: string;
  projectLink: string;
  publishTime: number;
  superChapterId: number;
  superChapterName: string;
  tags: any[];
  title: string;
  type: number;
  userId: number;
  visible: number;
  zan: number;
}