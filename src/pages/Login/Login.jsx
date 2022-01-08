import React from 'react'

import {login} from '../../api/login'
import './login.scss'
// 引入qs
import qs from 'qs'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// 引入react-router的编程式导航的钩子
import { useParams, useNavigate } from "react-router-dom";


export default function Login(props) {

    let navigate = useNavigate()
   


     /**
     * 处理登录
     * @param {用户输入的值}} values 
     */
    function onFinish(values){
        // 发送login请求
        login(qs.stringify(values)).then(res => {
            console.log(res)
            // 登录成功
            if(res.code == 200) {
                // 存储token信息
                localStorage.setItem("Authorization",res.data.token)
                // 提示登录成功
                message.success("登录成功")
                // 跳转至主页
                navigate("/main")
            } else {
                // 登录失败
                message.error('账号或密码错误')
            }
        })
    } 


    return (
        <div className='login'>
           {/* 登录表单 */}
           <div className='login-form'>
		   		<h2 className='login-form-title'>孟郎后台管理系统</h2>
               <Form
                    className="login-form-items"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                   
                    {/* 账号 */}
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入账号！' }]}
                    >
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                    </Form.Item>

                    {/* 密码 */}
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码！' }]}
                    >
                        <Input
						size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>
                    {/* 登录按钮 */}
                    <Form.Item>
                        <Button type="primary"
							size='large'
						 	htmlType="submit"
						 	className="login-form-button">
                        	登录
                        </Button>
                    </Form.Item>
            </Form>
            
           </div>
        </div>
    )
}
