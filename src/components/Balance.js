import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(
        transaction => transaction.transactionAmount);

    const balance = transactionAmounts.reduce((cou, item) => 
        ( cou += item ), 0);
    return (
        <div className='bal-an'>
            <h4>Current Balance</h4>
            <h1 id='balance'>${ balance }</h1>
        </div>
    )
}