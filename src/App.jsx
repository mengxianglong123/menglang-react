import { Route, Routes , Navigate ,useLocation,useNavigate } from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";
// 暂时不使用懒加载
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Poem from './pages/Main/children/Poem/Poem';
import Poet from './pages/Main/children/Poet/Poet';
import Home from './pages/Main/children/Home/Home';

import React from 'react'


export default function App() {
	let navigate = useNavigate()
	 // 通过挂载到window对象上来操作react-router的路由
	window._router = navigate
	// 获取当前路径
	let location = useLocation();
	React.useEffect(() => {
		// 获取登录信息
		const auth =  localStorage.getItem("Authorization");
		// 未登录进入其他页面
		if(location.pathname != "/login" && auth==null){
			navigate('/login',{replace:true})
		}
	}, [])

	return (
		<div className="App">
			<Routes>
			{/* 路由配置 */}
			<Route path="/main/*" element={<Main/>}>
				<Route path='home' element={<Home/>}/>
				<Route path='poem' element={<Poem/>}/>
				<Route path='poet' element={<Poet/>}/>
			</Route>
			<Route path="/login" element={<Login/>}/>
			{/* 使用Navigate组件实现重定向 */}
			<Route path='*' element={<Navigate to='/main'/>}/>
			</Routes>
		</div>
	)
}

