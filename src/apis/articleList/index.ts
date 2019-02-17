
import { Response, HttpManager } from '../index'

/**
 * 首页文章列表
 * 
 * http://www.wanandroid.com/article/list/0/json
 * 
 * 方法：GET  
 * 参数：页码，拼接在连接中，从0开始。  
 * 注意：页码从0开始，拼接在链接上。
 * 
 * 其中有两个易混淆的字段:
 *
 * "superChapterId": 153,   
 * "superChapterName": "framework", // 一级分类的名称
 *   
 * superChapterId 其实不是一级分类id，因为要拼接跳转url，内容实际都挂在二级分类下，
 * 所以该id实际上是一级分类的第一个子类目的id，拼接后故可正常跳转。  
 */
export function getArticleList(pageNum: number): Promise<Response<ArticleList>> {
  return HttpManager.get<Response<ArticleList>>(`/article/list/${pageNum}/json`);
}

/**
 * 知识体系下的文章
 * 
 * http://www.wanandroid.com/article/list/0/json?cid=60
 * 
 * 方法：GET  
 * 参数：
 * - cid 分类的id，上述二级目录的id
 * - 页码：拼接在链接上，从0开始。
 */
export function getArticleListByCid(pageNum: number, cid: number): Response<ArticleList> {
  return {} as Response<ArticleList>;
}

/**
 * 文章列表
 */
export interface ArticleList {
  curPage: number;
  datas: ArticleItem[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}

/**
 * 文章项
 */
export interface ArticleItem {
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

/**
 * 标签
 */
export interface Tag {
  name: string;
  url: string;
}