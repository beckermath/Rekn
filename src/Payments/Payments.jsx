import React from 'react'
import Balances from './Balances'
import PaymentList from './PaymentList'
import Typography from '@material-ui/core/Typography';

const Payments = () => {
    return (
        <div>
            <Balances/><br/>
            
            <PaymentList/>
        </div>
    )
}

export default Payments;