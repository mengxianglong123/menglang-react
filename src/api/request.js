import axios from "axios";



// 封装axios
// 创建单例
const instance = axios.create({
    baseURL: 'http://localhost:8082',
    timeout: 5000
});


// 响应拦截
instance.interceptors.response.use(res=>{
    // 首先判断token在后台验证是否有效
    if (res.data.code === 401){
        //window.location = '/login'
        // 通过挂载到window对象上来操作react-router的路由
        window._router('/')
    }
    return res.data; //直接将数据返回
}, err=>{
    return Promise.reject(err)
});

// 请求拦截
instance.interceptors.request.use(config => {
   config.headers.Authorization = localStorage.getItem("Authorization");
   return config;
});

export default instance;