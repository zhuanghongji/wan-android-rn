
import { Response, Responses } from '../index'

/**
 * 导航数据
 * 
 * http://www.wanandroid.com/navi/json
 * 
 * 方法：GET  
 * 参数：无
 */
export function getNavis(): Responses<Navi> {
  return {} as Responses<Navi>; 
}

interface Navi {
  articles: Article[];
  cid: number;
  name: string;
}

interface Article {
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