
import { Response, Responses } from '../index'

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
export function searchArticle(pageNum: number, k: string): Response<SearchArticle> {
  return {} as Response<SearchArticle>;
}

interface SearchArticle {
  curPage: number;
  datas: Data[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}

interface Data {
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

interface Tag {
  name: string;
  url: string;
}