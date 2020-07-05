import React from 'react'
import 'antd/dist/antd.css';
import AppContext from '../AppContext'
import { List, Typography } from 'antd';
import { getBalances } from '../calculator';
const { Title } = Typography;

const styles = {
    padding: '20px'
}

const Balances = () => {
    const ctx = React.useContext(AppContext);

    const [balances, setBalances] = React.useState([]);

    React.useLayoutEffect(() => {
        setBalances(getBalances(ctx.people, ctx.expenses))
    }, [ctx.people, ctx.expenses])

    console.log(getBalances(ctx.people, ctx.expenses))

    return (
        <div style={styles}>
            <Title level = {4}>Balances</Title>
            <List
            bordered
            dataSource={balances}
            renderItem={(item, index) => (
                <List.Item>
                    <Typography.Text mark></Typography.Text> {ctx.people[index]}: {item.toFixed(2)}
                </List.Item>
            )}
            />
        </div>
    )
}

export default Balances;