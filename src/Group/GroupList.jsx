import React from 'react'
import 'antd/dist/antd.css';
import AppContext from '../AppContext'
import { List, Typography } from 'antd';
const { Title } = Typography;

const styles = {
    padding: '20px',
    margin: 'auto',
    maxWidth: 600
}

const linkStyles = {
    color: '#1890ff'
}

const GroupList2 = () => {
    const ctx = React.useContext(AppContext);
    const [people, setPeople] = React.useState([]);

    const handleRemove = React.useCallback((event) => {
        if(ctx.expenses.length === 0){
            const removalIndex = ctx.people.indexOf(event.target.id)
        
            if(removalIndex > -1){
                let temp = ctx.people;
                temp.splice(removalIndex, 1);

                setPeople(temp);
            }
        }
        else{
            window.alert("Please clear expenses before removing group members");
        }
        
    }, [people, ctx.people, ctx.expenses])

    return (
        <div style={styles}>
            <Title level = {4}>Current Group</Title>
            <List
            bordered
            dataSource={ctx.people}
            renderItem={item => (
                
                <List.Item
                actions={[<a style = {linkStyles} id = {item} onClick={handleRemove}>remove</a>]}>
                    <Typography.Text mark></Typography.Text> {item}
                </List.Item>
            )}
            />
        </div>
    )
}

export default GroupList2;