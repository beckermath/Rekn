import React from 'react'

const AppContext = React.createContext({
    people: [],
    setPeople: null,
    expenses: [],
    expensesDisplay: [],
    balances: [],
    payments: [],
    activeTab: 1
});

export default AppContext;