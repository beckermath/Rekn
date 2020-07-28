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
    const ctx = React.useContext(AppContext);

    return (
        <div style = {styles}>
            <br/>
            <Title style= {{textAlign: 'center'}} level = {2}>Create Group</Title>
            <AddPerson/>
            {ctx.people.length > 0 && 
                <GroupList/>
            }
        </div>
    )
}

export default Group;