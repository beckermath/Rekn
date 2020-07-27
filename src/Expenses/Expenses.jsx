import React from 'react'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'
import AppContext from '../AppContext'

const styles = {
    padding: '20px',
    margin: 'auto',
    maxWidth: 800
}

const Expenses = () => {
    const ctx = React.useContext(AppContext);

    return(
        <div style = {styles}>
            <AddExpense/>
            {ctx.expenses.length > 0 && 
                <ExpenseList/>
            }
        </div>
       
    )
}

export default Expenses;