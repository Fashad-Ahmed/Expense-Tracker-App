import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/accountSummary';
import { TransactionHistory } from './components/transactionHistory';
import { AddTransaction } from './components/addTransaction';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;
