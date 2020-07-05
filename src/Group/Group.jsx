import React from 'react';
import AddPerson from './AddPerson2';
import GroupList from './GroupList2';
import AppContext from '../AppContext';


const Group = () => {
    const [people, setPeople] = React.useState(['person1', 'person2']);
    const ctx = React.useContext(AppContext);

    const handleAdd = React.useCallback((name) => {
        let current = people
        console.log(people)
        current.push(name)
        console.log(current)
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