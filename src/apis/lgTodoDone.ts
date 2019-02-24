
import { HttpManager } from './index'

/**
 * 仅更新完成状态Todo
 * http://www.wanandroid.com/lg/todo/done/80/json
 * 
 * 方法：POST
 * 参数：
 * 	
 * id: 拼接在链接上，为唯一标识
 * status: 0或1，传1代表未完成到已完成，反之则反之。
 * 
 * 只会变更status，未完成->已经完成 or 已经完成->未完成。
 */
export function updateTodoStatus(id: number, statusDesc: 'todo' | 'done'): Promise<UpdateTodoStatusResult> {
  const status = statusDesc === 'todo' ? 0 : 1
  return HttpManager.post(`/lg/todo/done/${id}/json`, {
    status,
  })
}


export interface UpdateTodoStatusResult {
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
