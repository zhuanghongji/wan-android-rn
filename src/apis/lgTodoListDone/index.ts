
import { Response, HttpManager } from '../index'

/**
 * TODO 列表
 * 
 * http://www.wanandroid.com/lg/todo/v2/list/页码/json
 * 
 * 页码从1开始，拼接在url 上
 * status 状态， 1-完成；0未完成; 默认全部展示；
 * type 创建时传入的类型, 默认全部展示
 * priority 创建时传入的优先级；默认全部展示
 * orderby 1:完成日期顺序；2.完成日期逆序；3.创建日期顺序；4.创建日期逆序(默认)；
 * 
 * 方法：POST
 * 参数：
 * 类型：类型拼接在链接上，目前支持0,1,2,3
 * 页码: 拼接在链接上，从1开始；
 */
export function getTodoList(pageNum: number, status: number, type: number, priority: number, orderby: number)
    : Promise<Response<TodoList>> {
  return HttpManager.post(`/lg/todo/v2/list/${pageNum}/json`, {
    status,
    type,
    priority,
    orderby,
  })
}

export interface TodoList {
  curPage: number;
  datas: TodoItem[];
  offset: number;
  over: boolean;
  pageCount: number;
  size: number;
  total: number;
}

export interface TodoItem {
  completeDate: number;
  completeDateStr: string;
  content: string;
  date: number;
  dateStr: string;
  id: number;
  priority: number;
  status: number;
  title: string;
  type: number;
  userId: number;
}