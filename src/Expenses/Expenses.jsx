import React from 'react'
import Typography from '@material-ui/core/Typography';
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'

const Expenses = () => {
    return(
        <div>
            <Typography variant = 'h6'>Add Expense</Typography>
            <AddExpense/><br/>
            <Typography variant = 'h6'>Expenses</Typography>
            <ExpenseList/>
        </div>
       
    )
}

export default Expenses;