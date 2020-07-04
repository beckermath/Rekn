import React from 'react'
import Balances from './Balances'
import PaymentList from './PaymentList'
import Typography from '@material-ui/core/Typography';

const Payments = () => {
    return (
        <div>
            <Typography variant = 'h6'>Balances</Typography>
            <Balances/><br/>
            <Typography variant = 'h6'>Payments</Typography>
            <PaymentList/>
        </div>
    )
}

export default Payments;