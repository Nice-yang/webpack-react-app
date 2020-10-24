import { get, domain } from '../request';

export async function getTodoList(param) {
  return await get(`${domain}test/todo_list.json`, param);
}
