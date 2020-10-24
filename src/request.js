import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

function parseResponse(res) {
  const { code, data } = res;
  switch (code) {
    case 200:
      return data;
    default:
      return null;
  }
}

function buildRequest(url, method, param) {
  const token = (window.GlobalConfig || {}).token;
  const params = { ...param, token };
  const config = method === 'get' ? { params } : params;

  return instance[method](url, config).then(res => {
    const data = parseResponse(res.data);
    if (data) return data;
  }).catch(error => {
    console.log(error);
  })
}

export const domain = 'http://mock-api.com/lKGx6QzA.mock/';
export const get = (url, param) => buildRequest(url, 'get', param);
export const post = (url, param) => buildRequest(url, 'post', param);
