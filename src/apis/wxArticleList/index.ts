
import { Response, Responses } from '../index'

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
export function getWxArticleList(id: number, pageNum: number): Response<WxArticleList> {
  return {} as Response<WxArticleList>;
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
export function searchWxArticle(id: number, pageNum: number): Response<WxArticleList> {
  return {} as Response<WxArticleList>;
}

interface WxArticleList {
  curPage: number;
  datas: any[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}



