import React from 'react';
import AddPerson from './AddPerson';
import GroupList from './GroupList';
import AppContext from '../AppContext';
import { Typography } from 'antd';
const { Title } = Typography;

const styles = {
    padding: '20px',
    margin: 'auto',
    maxWidth: 600
}

const Group = () => {
    const [people, setPeople] = React.useState([]);
    const ctx = React.useContext(AppContext);

    const handleAdd = React.useCallback((name) => {
        let current = people;
        current.push(name);
        setPeople(current);
    }, [people])

    return (
        <div style = {styles}>
            <br/>
            <Title style= {{textAlign: 'center'}}level = {2}>Create Group</Title>
            <AddPerson onAdd = {handleAdd}/>
            {ctx.people.length > 0 && 
                <GroupList people = {people}/>
            }
        </div>
    )
}

export default Group;