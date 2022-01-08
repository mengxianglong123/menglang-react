
import request from './request'

/************** 诗词页相关请求 **************/
// 分页查询所有诗词
export const GetPoemByPage = (params) => request.get('/poem/getPoemByPage',{params}); //花括号是为了解构


// 按照标题查询诗词
export const GetPoemByTitle = (params) => request.get('/poem/getPoemByTitle',{params});

// 按照内容查询诗词
export const GetPoemByContent = (params) => request.get('/poem/getPoemByContent',{params});

// 按照诗人查询诗词
export const GetPoemByPoet = (params) => request.get('/poem/getPoemByPoet',{params});

// 按照id查询诗词信息
export const GetPoemById = (params) => request.get("/poem/getPoemById",{params});

// 更新诗词信息
export const UpdatePoem = (params) => request.post('/poem/updatePoem', params);

// 给诗词添加标签
export const AddPoemTag = (params) => request.post('/poem/addTag', params,{'Content-Type': 'application/x-www-form-urlencoded'});

// 删除诗词的标签
export const DelPoemTag = (params) => request.post('/poem/delTag', params,{'Content-Type': 'application/x-www-form-urlencoded'});

// 新增诗词
export const AddPoem = (params) => request.post('/poem/addPoem', params);

// 删除诗词
export const DelPoem = (params) => request.post('/poem/delPoem', params,{'Content-Type': 'application/x-www-form-urlencoded'});