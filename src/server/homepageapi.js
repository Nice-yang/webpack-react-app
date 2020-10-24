import { get, post, domain } from '../request';

export async function getInitData(param) {
  return await get(`${domain}test/init_data.json`, param);
}

export async function submitData(param) {
  return await post(`${domain}test/submit.json`, param);
}
