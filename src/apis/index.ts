
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

import {
  postArticleQuery,
  ArticleQuery,
} from './articleQuery'

export {  
  getBanner,
  BannerItem,
} from './banner'

import {
  getFriend,
  Friend,
} from './friend'

export {
  getHotkey,
  Hotkey,
} from './hotkey'

import {
  collectArticle,
} from './lgCollect'

import {
  collectOutsideArticle,
  OutsideArticleCollection,
} from './lgCollectAdd'

import {
  collectLink,
  LinkCollection,
} from './lgCollectAddTool'

import {
  deleteLinkCollection,
} from './lgCollectDeleteTool'

import {
  getArticleCollectedList,
  ArticleCollectedList,
  ArticleCollected,
} from './lgCollectList'

import {
  collectUpdateTool,
  CollectUpdate,
} from './lgCollectUpdateTool'

import {
  getLinkCollectedList,
  LinkCollectedList,
  LinkCollected,
} from './lgCollectUserTools'

import {
  addTodo,
  AddTodo,
} from './lgTodoAdd'

import {
  deleteTodo,
} from './lgTodoDelete'

import {
  updateTodoStatus,
  UpdateTodo,
} from './lgTodoDone'

import {
  getTodoList,
  TodoList,
  TodoItem,
} from './lgTodoListDone'

import {

} from './lgTodoListNotDo'

import {

} from './lgTodoUpdate'

import {

} from './lgUncollect'

import {

} from './lgUncollectOriginId'

export {
  getNavi,
  NaviItem,
  NaviArticle,
} from './navi'

import {
  getProjectListByCid,
  ProjectList,
  ProjectItem,
} from './projectList'

import {
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

import {
  userLogout,
} from './userLogout'

import {
  userRegister,
  RegisterInfo,
} from './userRegister'

import {
  getWxArticleChapters,
  WxArticleChapter,
} from './wxArticleChapters'

import {
  getWxArticleList,
  searchWxArticle,
  WxArticleList,
  WxArticleItem,
} from './wxArticleList'










