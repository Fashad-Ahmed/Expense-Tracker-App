import React, { useContext } from 'react';
import { Transaction } from './transaction';
import { GlobalContext } from "../context/globalState";

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div className='transac-hist'>
            <h3>
                Transaction History
            </h3>

            <ul className='list'>

                { transactions.map(transaction => (
                    <Transaction key={ transaction.id } transaction={ transaction }/>
                ))}
            </ul>
        </div>
    )
}