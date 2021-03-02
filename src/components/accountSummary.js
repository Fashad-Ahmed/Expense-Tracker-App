import React, { useContext } from 'react';
import { GlobalContext } from "../context/globalState";
import { Transaction } from './transaction';

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(
        transaction => transaction.transactionAmount
        );
    
    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((cou, transaction) => (cou += transaction), 0);
    
        const expense = Math.abs(transactionAmounts
            .filter(transaction => transaction < 0)
            .reduce((cou, transaction) => (cou += transaction), 0)
            );
    

    return (
        <div className='in-exp-con'>
            <div>
                <h4>Income</h4>
                <p className='mon-pl'>
                    +{ income }
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='mon-min'>
                    -{ expense }
            </p>
            </div>
        </div>


    )
}