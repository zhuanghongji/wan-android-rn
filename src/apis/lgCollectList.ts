
import { HttpManager } from './index'

// 注意所有收藏相关都需要登录操作，
// 建议登录将返回的cookie（其中包含账号、密码）持久化到本地即可。

/**
 * 收藏文章列表
 * 
 * http://www.wanandroid.com/lg/collect/list/0/json
 * 
 * 方法：GET  
 * 参数： 
 * - 页码：拼接在链接中，从0开始。
 */
export function getArticleCollectedList(pageNum: number): Promise<ArticleCollectedList> {
  return HttpManager.get(`/lg/collect/list/${pageNum}/json`)
}


export interface ArticleCollectedList {
  curPage: number;
  datas: ArticleCollected[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}

/**
 * 已收藏的文章
 */
export interface ArticleCollected {
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