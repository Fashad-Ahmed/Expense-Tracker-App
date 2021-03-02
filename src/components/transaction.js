import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransac } = useContext(GlobalContext);
    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            { transaction.description }
            <span>{sign}${ Math.abs(transaction.transactionAmount) }</span>
            <button className='delete-btn'
                    onClick={ () => deleteTransac(transaction.id)}>
                X
                </button>
        </li>
    )
}