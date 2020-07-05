import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppContext from '../AppContext'
import Typography from '@material-ui/core/Typography';

const GroupList = () => {
    const ctx = React.useContext(AppContext)

    return (
        <div>
            <Typography variant = 'h6'>Group</Typography>
            <List>
                {ctx.people.map((person, index) => (
                    <ListItem key = {index} value={person}>
                        <ListItemText>{person}</ListItemText>
                    </ListItem>
                ))}  
            </List> 
        </div>
        
    )
}

export default GroupList;