
import axios from "axios";

const service = axios.create({
    // baseURL: import.meta.env.VITE_BASE_API,  // 环境变量配置 ‌:ml-citation{ref="4,6" data="citationList"}
    baseURL: "/api",
    timeout: 10000,  // 超时时间默认 10s ‌:ml-citation{ref="3,4" data="citationList"}
    headers: { "Content-Type": "application/json" }  // 统一请求头 ‌:ml-citation{ref="4,6" data="citationList"}
});

service.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token) { // 添加 Token ‌:ml-citation{ref="2,6" data="citationList"}
            // config.headers.Authorization = `Bearer ${token}`;
            config.headers.Authorization = `${token}`;
        } 
        return config;
    },
    (error) => Promise.reject(error)  // 请求错误处理 ‌:ml-citation{ref="2,4" data="citationList"}
);

service.interceptors.response.use(
    (response) => response.data,  // 直接返回核心数据 ‌:ml-citation{ref="4,6" data="citationList"}
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401: 
                    localStorage.removeItem("token");
                    window.location.href = "/login";  // Token 失效跳转登录 ‌:ml-citation{ref="2,6" data="citationList"}
                    break;
            }
        }
        return Promise.reject(error);  // 传递错误信息 ‌:ml-citation{ref="3,7" data="citationList"}
    }
);

const http = {
    get: (url, params) => service.get(url, { params }),
    post: (url, data) => service.post(url, data),
    put: (url, data) => service.put(url, data),
    delete: (url) => service.delete(url),
}

export default http;