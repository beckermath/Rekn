import React from 'react'
import AddExpense from './AddExpense2'
import ExpenseList from './ExpenseList2'
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