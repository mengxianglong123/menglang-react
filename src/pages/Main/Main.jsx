import React, { Component } from 'react'
import { Layout } from 'antd';
// 引入样式
import './main.scss'
import Nav from './children/Nav/Nav'
import { Outlet} from 'react-router-dom';



const { Header, Footer, Sider, Content } = Layout;


export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Layout className='main-layout' style={{ minHeight: '100vh',overflow:'auto' }}>
                     {/* 侧边导航栏 */}
                     <Sider className='main-left' style={{width:'320px',minHeight:'100%'}}>
                            <Nav/>
                        </Sider>
                    
                    <Layout style={{ overflow:'auto' }}>
                        
                        <Header className='main-header'>Header</Header>
                        <Content className='main-center' style={{overflow:'auto'}}>
                            {/* 相当于Vue的 router-view 用来占坑*/}
                            <Outlet/>
                        </Content>
                        <Footer className='main-footer' style={{textAlign:'center'}}>孟郎诗词网版权所有</Footer>
                    </Layout>
                    
                </Layout>
            </div>
        )
    }
}
