import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 Axios 实例
const service: AxiosInstance = axios.create({
  baseURL: '/api', // 基础路径，可根据需要修改
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // 可以在这里添加 token，或者其他请求头信息
    config.headers = {
      ...config.headers,
      'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
    };
    return config;
  },
  (error: any) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 可以根据业务需求对响应数据进行处理
    if (response.status === 200) {
      const res = response.data;
      if (res.code !== 200) {
        // 根据返回状态码进行全局错误处理
        console.error(res.message || '请求错误');
        return Promise.reject(new Error(res.message || '请求错误'));
      } else {
        return res;
      }
    } else {
      return Promise.reject(new Error('网络错误'));
    }
  },
  (error: any) => {
    // 响应错误处理，比如网络错误等
    console.error('响应错误:', error);
    return Promise.reject(error);
  }
);

export default service;