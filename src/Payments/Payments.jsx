import React from 'react'
import Balances from './Balances2'
import PaymentList from './PaymentList2'
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