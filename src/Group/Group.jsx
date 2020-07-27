import React from 'react';
import AddPerson from './AddPerson';
import GroupList from './GroupList';
import AppContext from '../AppContext';

const Group = () => {
    const [people, setPeople] = React.useState([]);
    const ctx = React.useContext(AppContext);

    const handleAdd = React.useCallback((name) => {
        let current = people;
        current.push(name);
        setPeople(current);
    }, [people])

    return (
        <div>
            <AddPerson onAdd = {handleAdd}/>
            {ctx.people.length > 0 && 
                <GroupList people = {people}/>
            }
        </div>
    )
}

export default Group;