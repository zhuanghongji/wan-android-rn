
/* 
  参考自：
  * http://www.wanandroid.com/blog/show/2
  * http://www.wanandroid.com/blog/show/2442 

  返回数据结构定义:
  {
    "data": ...,
    "errorCode": 0,
    "errorMsg": ""
  }
  其中 errorCode 如果为负数则认为错误，此时 errorMsg 会包含错误信息。
  data 为 Object，返回数据根据不同的接口而变化。

  errorCode = 0 代表执行成功，不建议依赖任何非0的 errorCode.
  errorCode = -1001 代表登录失效，需要重新登录。
*/


export const ErrorCode = {
  /** 接口调用成功*/
  SUCCESS: 0,
  /** 登录失效，需要重新登录 */
  LOGIN_FAILED: -1001,
}

export interface Response<T> {
  data: T;
  errorCode: number;
  errorMsg: string;
}

export interface Responses<T> {
  data: T[];
  errorCode: number;
  errorMsg: string;
}

export { HttpManager } from '../managers/HttpManager'


// ------------------------------------

export {  
  getArticleList,
  getArticleListByCid,
  ArticleList,
  ArticleItem,
  Tag,
} from './articleList'

export {
  getArticleListProject,
  ArticleListProject,
  Project,
} from './articleListProject'

export {
  postArticleQuery,
  ArticleQuery,
} from './articleQuery'

export {  
  getBanner,
  BannerItem,
} from './banner'

export {
  getFriend,
  Friend,
} from './friend'

export {
  getHotkey,
  Hotkey,
} from './hotkey'

export {
  collectArticle,
} from './lgCollect'

export {
  collectOutsideArticle,
  OutsideArticleCollection,
} from './lgCollectAdd'

export {
  collectLink,
  LinkCollection,
} from './lgCollectAddTool'

export {
  deleteLinkCollection,
} from './lgCollectDeleteTool'

export {
  getArticleCollectedList,
  ArticleCollectedList,
  ArticleCollected,
} from './lgCollectList'

export {
  collectUpdateTool,
  CollectUpdate,
} from './lgCollectUpdateTool'

export {
  getLinkCollectedList,
  LinkCollectedList,
  LinkCollected,
} from './lgCollectUserTools'

export {
  addTodo,
  AddTodoResult,
} from './lgTodoAdd'

export {
  deleteTodo,
} from './lgTodoDelete'

export {
  updateTodoStatus,
  UpdateTodoStatusResult,
} from './lgTodoDone'

export {
  getTodoList,
  getTodoListOfTodo,
  getTodoListOfDone,
  TodoList,
  TodoItem,
} from './lgTodoList'

export {
  updateTodo,
  UpdateTodoParams,
  UpdateTodoResult,
} from './lgTodoUpdate'

import {

} from './lgUncollect'

export {
  uncollectArticle,
} from './lgUncollectOriginId'

export {
  getNavi,
  NaviItem,
  NaviArticle,
} from './navi'

export {
  getProjectListByCid,
  ProjectList,
  ProjectItem,
} from './projectList'

export {
  getProjectTrees,
  ProjectTree,
} from './projectTree'

export {
  getTree,
  Tree,
  Children,
} from './tree'

export {
  userLogin,
  LoginInfo,
} from './userLogin'

export {
  userLogout,
} from './userLogout'

export {
  userRegister,
  RegisterInfo,
} from './userRegister'

export {
  getWxArticleChapters,
  WxArticleChapter,
} from './wxArticleChapters'

export {
  getWxArticleList,
  searchWxArticle,
  WxArticleList,
  WxArticleItem,
} from './wxArticleList'










