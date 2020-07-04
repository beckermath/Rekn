import React from 'react'

import Typography from '@material-ui/core/Typography';
import AddPerson from './AddPerson'
import GroupList from './GroupList';


const Group = () => {
    const [people, setPeople] = React.useState(['person1', 'person2']);

    const handleAdd = React.useCallback((name) => {
        let current = people
        console.log(people)
        current.push(name)
        console.log(current)
        setPeople(current);
    }, [people])

    return (
        <div>
            <Typography variant = 'h6'>Add Person</Typography>
            <AddPerson onAdd = {handleAdd} /><br/>
            <Typography variant = 'h6'>Group</Typography>
            <GroupList people = {people}/>
        </div>
    )
}

export default Group;