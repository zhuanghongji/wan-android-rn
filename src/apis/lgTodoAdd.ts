
import { HttpManager } from './index'

/**
 * 新增一条Todo
 * 
 * http://www.wanandroid.com/lg/todo/add/json
 * 
 * 方法：POST
 * 参数：
 * - title: 新增标题（必须）
 * - content: 新增详情（必须）
 * - date: 2018-08-01 预定完成时间（不传默认当天，建议传）
 * - type: 大于0的整数（可选）；
 * - priority 大于0的整数（可选）；
 * 
 * type 可以用于，在app 中预定义几个类别：例如 工作1；生活2；娱乐3；
 * 新增的时候传入0，1，2，查询的时候，传入type 进行筛选；
 * 
 * priority 主要用于定义优先级，在app 中预定义几个优先级：
 * 重要（1），一般（2）等，查询的时候，传入priority 进行筛选；
 */
export function addTodo(title: string, content: string, date = "", type = 0, priority = 1): Promise<AddTodoResult> {
  return HttpManager.post('http://www.wanandroid.com/lg/todo/add/json', {
    title,
    content,
    date,
    type,
    priority,
  })
}

export interface AddTodoParam {
  title: string;
  content: string;
  date: number;
  type: number;
  priority: number;
}


export interface AddTodoResult {
  completeDate?: any;
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