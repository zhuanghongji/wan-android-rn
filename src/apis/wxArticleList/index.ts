
import { Response, HttpManager } from '../index'

/**
 * 查看某个公众号历史数据
 * 
 * http://wanandroid.com/wxarticle/list/405/1/json  
 * 
 * - 方法：GET  
 * - 参数：  
 *   - 公众号 ID：拼接在 url 中，eg:405  
 *   - 公众号页码：拼接在url 中，eg:1  
 */
export function getWxArticleList(id: number, pageNum: number)
    : Promise<Response<WxArticleList>> {
  return HttpManager.get(`/wxarticle/list/${pageNum}/${id}/json`);
}

/**
 * 在某个公众号中搜索历史文章
 * 
 * http://wanandroid.com/wxarticle/list/405/1/json?k=Java
 * 
 * - 方法：GET
 * - 参数 ：
 *   - k : 字符串，eg:Java
 * 	 - 公众号 ID：拼接在 url 中，eg:405
 * 	 - 公众号页码：拼接在url 中，eg:1
 */
export function searchWxArticle(id: number, pageNum: number, k: string)
    : Promise<Response<WxArticleList>> {
  return HttpManager.get(`/wxarticle/list/${pageNum}/${id}/json?k=${k}`);
}

export interface WxArticleList {
  curPage: number;
  datas: WxArticleItem[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}

export interface WxArticleItem {
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
  tags: Tag[];
  title: string;
  type: number;
  userId: number;
  visible: number;
  zan: number;
}

export interface Tag {
  name: string;
  url: string;
}



