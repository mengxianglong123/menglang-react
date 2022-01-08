import React from 'react'
import { PageHeader, Button,Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Search } = Input;

export default function Header() {

    function onSearch(){

    }

    return (
        <div>
            <PageHeader
            ghost={false}
            title="诗词管理"
            extra={[
                <Search key='search' placeholder="搜索诗词" onSearch={onSearch} style={{ width: 200 }} />,
                <Button key='add-button' type="primary" icon={<PlusOutlined />}  >添加诗词</Button>
            ]}
            >
            </PageHeader>
        </div>
    )
}
