import fetch from './fetch';

/**
 * 获取用户信息
 * @param username 用户名
 */
export function getUserInfo(username: string) {
  return fetch({
    url: 'user-info',
    params: { username },
  });
}
