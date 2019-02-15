
import { Response, Responses } from '../index'

/**
 * 项目列表数据
 * 
 * 某一个分类下项目列表数据，分页展示
 * 
 * http://www.wanandroid.com/project/list/1/json?cid=294
 * 
 * 方法：GET
 * 参数：
 * - cid 分类的id，上面项目分类接口
 * - 页码：拼接在链接中，从1开始。
 */
export function getProjectListByCid(): Response<ProjectList> {
  return {} as Response<ProjectList>;
}


interface ProjectList {
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