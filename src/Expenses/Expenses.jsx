import React from 'react'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'
import AppContext from '../AppContext'

const Expenses = () => {
    const ctx = React.useContext(AppContext);

    return(
        <div>
            <AddExpense/>
            {ctx.expenses.length > 0 && 
                <ExpenseList/>
            }
        </div>
       
    )
}

export default Expenses;