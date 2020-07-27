import React from 'react'
import 'antd/dist/antd.css';
import AppContext from '../AppContext'
import { List, Typography } from 'antd';
const { Title } = Typography;
const styles = {
    padding: '20px'
}

const GroupList2 = () => {
    const ctx = React.useContext(AppContext)

    return (
        <div style={styles}>
            <Title level = {4}>Current Group</Title>
            <List
            bordered
            dataSource={ctx.people}
            renderItem={item => (
                <List.Item>
                    <Typography.Text mark></Typography.Text> {item}
                </List.Item>
            )}
            />
        </div>
    )
}

export default GroupList2;