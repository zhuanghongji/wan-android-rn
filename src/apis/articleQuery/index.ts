
import { Response, HttpManager, ArticleItem } from '../index'

/**
 * 搜索
 * 
 * http://www.wanandroid.com/article/query/0/json
 * 
 * 方法：POST
 * 参数：
 * - 页码：拼接在链接上，从0开始。
 * - k ： 搜索关键词
 * 
 * 注意：支持多个关键词，用空格隔开
 */
export function postArticleQuery(pageNum: number, k: string): Promise<Response<ArticleQuery>> {
  return HttpManager.post(`/article/query/${pageNum}/json`, { k })
}

export interface ArticleQuery {
  curPage: number;
  datas: ArticleItem[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}