// login相关接口
import request from './request'


// 按需导出api
// 登录（注意添加请求头的方式）
export const login = (params) => request.post('/login', params ,{'Content-Type': 'application/x-www-form-urlencoded'});