
import { Response, HttpManager } from '../index'

/**
 * 最新项目tab (首页的第二个tab)，按时间分页展示所有项目（最新项目）。
 * 
 * http://wanandroid.com/article/listproject/0/json
 * 
 * 方法：GET  
 * 参数：页码，拼接在连接中，从0开始。
 */
export function getArticleListProject(pageNum: number): Promise<Response<ArticleListProject>> {
  return HttpManager.get(`/article/listproject/${pageNum}/json`)
}

export interface ArticleListProject {
  curPage: number;
  datas: Project[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}

export interface Project {
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