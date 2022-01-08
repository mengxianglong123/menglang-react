import React,{useState} from 'react'
import { Menu, Button } from 'antd'
import {Link} from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import './nav.scss'
const { SubMenu } = Menu;
export default function Nav() {

    let [collapsed,setCollapsed] =  useState(false)

    function handleClick(){

    }

    return (
        <div className='left-nav'>
            <div className='logo'>孟郎诗词网后台</div>
          
          <Menu
                onClick={handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme='dark'
            >
                <Menu.Item icon={<span className='iconfont iconshouyejianying'></span>} key="home">
                    <Link to={'/main/home'}>首页</Link>
                </Menu.Item>
                <Menu.Item 
                 icon={<span className='iconfont iconiconfont-poetry' style={{fontSize:'16px'}}></span>} key="poem">
                    <Link to={'/main/poet'}>诗人管理</Link>
                 </Menu.Item>
                <Menu.Item icon={<span className='iconfont iconshu'></span>} key="poet">
                    <Link to={'/main/poem'}>诗词管理</Link>
                </Menu.Item>
               
            </Menu>
        </div>
      );
}
