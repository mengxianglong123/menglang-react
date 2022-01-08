import React,{useState,useEffect} from 'react'
import { Table, Tag, Space,Button } from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {GetPoemByPage} from '../../../../../api/poem'
import {connect} from 'react-redux'
import {updatePoem} from '../../../../../redux/actions/poem'
const { Column, ColumnGroup } = Table;


  

function DataTable(props) {

    const [total, setTotal] = useState(0)


    /**
     * 处理编辑操作
     * @param {} text 
     * @param {*} record 
     */
    function handleEdit(text,record){
        console.log(text)
    }

    /**
     * 处理分页变化
     * @param {} page 
     * @param {*} pageSize 
     */
    function changePage(page, pageSize){
        GetPoemByPage({pageNum:page,pageSize}).then(res => {
            props.updatePoem(res.data.list)
        })
    }

    // 挂载时的钩子
    useEffect(() => {
        
        // 请求数据
        GetPoemByPage({pageNum:1,pageSize:15}).then(res => {
            if(res.code === 200){
                props.updatePoem(res.data.list)
                setTotal(res.data.total)
            }
        })
    }, [])

    return (
        <div>
            <Table 
            dataSource={props.poems} 
            pagination={{defaultPageSize:15,total,pageSize:15,onChange:changePage}}
            rowKey='id' >
                <Column title="id" dataIndex="id" width='50px' key="id"/>
                <Column title="标题" dataIndex="title" width='350px' key='title'/>
                <Column title="正文" dataIndex="content"  key="content"/>
                
                <Column
                width='100px'
                title="操作"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <Button type="primary" key='edit' icon={<EditOutlined />} onClick={() => handleEdit(text,record)} />
                        <Button type="primary" key='del' icon={<DeleteOutlined />}/>
                    </Space>
                )}
                />
            </Table>
        </div>
    )
}

export default connect(state => ({
    poems:state.poem.poems
}),
{updatePoem}
)(DataTable)