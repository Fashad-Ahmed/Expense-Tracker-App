import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/accountSummary';
import { TransactionHistory } from './components/transactionHistory';
import { AddTransaction } from './components/addTransaction';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
