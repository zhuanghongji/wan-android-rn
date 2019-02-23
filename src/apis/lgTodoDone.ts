
import { HttpManager } from './index'

/**
 * 仅更新完成状态Todo
 * http://www.wanandroid.com/lg/todo/update/80/json
 * 
 * 方法：POST
 * 参数：
 * 	
 * id: 拼接在链接上，为唯一标识，列表数据返回时，每个todo 都会有个id标识 （必须）
 * title: 更新标题 （必须）
 * content: 新增详情（必须）
 * date: 2018-08-01（必须）
 * status: 0 // 0为未完成，1为完成
 * type: ；
 * priority: ；
 * 
 * 如果有当前状态没有携带，会被默认值更新，
 * 比如当前 todo status=1，更新时没有带上，会认为被重置。
 */
export function updateTodoStatus(id: number, statusDesc: 'todo' | 'done'): Promise<UpdateTodo> {
  const status = statusDesc === 'todo' ? 0 : 1
  return HttpManager.post(`/lg/todo/update/${id}/json`, {
    status,
  })
}

export interface UpdateTodo {
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
