import React from 'react';
import './App.css';
import Balance from './Balance'
import NetIncome from './NetIncome';
import Expense from './Expenese';


function App() {
  return (
    <div className="App">
        <h1>Expense Tracker</h1>
        <Balance />


          
            <NetIncome  />
          
          
            <Expense />

        </div>
    
  );
}

export default App;
