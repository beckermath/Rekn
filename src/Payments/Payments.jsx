import React from 'react';
import Balances from './Balances';
import PaymentList from './PaymentList';

const styles = {
    padding: '20px',
    margin: 'auto',
    maxWidth: 800
}

const Payments = () => {
    return (
        <div style = {styles}>
            <Balances/><br/>
            <PaymentList/>
        </div>
    )
}

export default Payments;