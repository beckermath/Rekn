import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppContext from '../AppContext'
import { Typography } from '@material-ui/core';

import {calculateDebts } from '../calculator'

const PaymentList = () => {
    const ctx = React.useContext(AppContext);
    const [payments, setPayments] = React.useState([]);

    React.useLayoutEffect(() => {
        setPayments(calculateDebts(ctx.people, ctx.expenses))
    }, [ctx.people, ctx.expenses])
    
    return (
        <div>
            <br/>
            <Typography>It would take {payments.length} payments to even out all debts</Typography>
            <List>
                {payments.map((payment, index) => (
                    <ListItem key = {index} value={payment}>
                        <Typography variant = 'h6' color='secondary'>{payment.payer} pays {payment.reciever} ${payment.amount}</Typography>
                    </ListItem>
                ))}  
            </List> 
        </div>
    )
}

export default PaymentList;