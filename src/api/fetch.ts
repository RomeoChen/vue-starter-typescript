/**
 * 封装axios
 * 若要统一配置，请在此文件修改
 */

import axios from 'axios';

/** 创建axios实例 */
const axiosInstance = axios.create({
  baseURL: 'http://....../api',
});

/** request拦截器 */
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    console.error(error.toString());
    Promise.reject(error);
  }
);

/** respone拦截器 */
axiosInstance.interceptors.response.use(
  response => {
    if (response.data.code !== 1) {
      console.info(response.data.message);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
