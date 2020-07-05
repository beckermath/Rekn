import React from 'react'
import AppContext from '../AppContext'
import 'antd/dist/antd.css';
import { List, Typography } from 'antd';
const { Title } = Typography;

const styles = {
    padding: '20px'
}

const ExpenseList = () => {
    const ctx = React.useContext(AppContext)

    return(
        <div style={styles}>
            <Title level = {4}>Current Expenses</Title>
            <List
            bordered
            dataSource={ctx.expensesDisplay}
            renderItem={item => (
                <List.Item>
                    <Typography.Text mark></Typography.Text> {item}
                </List.Item>
            )}
            />
        </div>
    )
}

export default ExpenseList;