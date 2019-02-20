
import { Response, HttpManager } from '../index'

/**
 * 收藏站外文章
 * 
 * http://www.wanandroid.com/lg/collect/add/json
 * 
 * 方法：POST 
 * 参数：
 * - title
 * - author
 * - link
 */
export function collectOutsideArticle(title: string, author: string, link: string)
      : Promise<Response<OutsideArticleCollection>> {
  return HttpManager.post('/lg/collect/add/json', {
    title, 
    author, 
    link,
  })
}

/**
 * 收藏站外文章
 */
export interface OutsideArticleCollection {
  author: string;
  chapterId: number;
  chapterName: string;
  courseId: number;
  desc: string;
  envelopePic: string;
  id: number;
  link: string;
  niceDate: string;
  origin: string;
  originId: number;
  publishTime: number;
  title: string;
  userId: number;
  visible: number;
  zan: number;
}