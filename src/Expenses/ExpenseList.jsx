import React from 'react'
import AppContext from '../AppContext'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

const ExpenseList = () => {
    const ctx = React.useContext(AppContext)

    return(
        <List>
        {ctx.expensesDisplay.map((expenseDisplay, index) => (
            <ListItem key = {index} value={expenseDisplay}>
                <Typography>{expenseDisplay}</Typography>
            </ListItem>
        ))}  
        </List> 
    )
}

export default ExpenseList;