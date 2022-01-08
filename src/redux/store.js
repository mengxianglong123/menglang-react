/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore，专门用于创建Redux最为核心的store对象
import {applyMiddleware, createStore} from 'redux'
// 引入汇总后的reducer
import reducer from './reducers'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux开发工具
import {composeWithDevTools} from 'redux-devtools-extension'

// 暴露store，并将对开发者工具和redux-thunk的支持添加进去
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
