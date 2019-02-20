
import { Responses, HttpManager } from '../index'

/**
 * 项目分类，项目为包含一个分类，该接口返回整个分类。
 * 
 * http://www.wanandroid.com/project/tree/json
 * 
 * 方法： GET   
 * 参数： 无
 */
export function getProjectTrees(): Promise<Responses<ProjectTree>> {
  return HttpManager.get('/project/tree/json')
}

export interface ProjectTree {
  children: any[];
  courseId: number;
  id: number;
  name: string;
  order: number;
  parentChapterId: number;
  userControlSetTop: boolean;
  visible: number;
}