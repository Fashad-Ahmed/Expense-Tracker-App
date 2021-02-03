import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { accountSummary } from './components/accountSummary';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />

      </div>
    </div>
  )
}

export default App;
