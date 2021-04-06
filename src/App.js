import React from 'react';
import './App.css'
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header'
import IncomeList from './components/IncomeList';
// import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
    return (
        // <GlobalContextProvider>
            <div className='container'>
                <div className="app-wrapper">
                    <Header />
                    <h3>re install vs code </h3>
                    <Balance />
                    <AddTransaction />
                    <IncomeList />
                    <ExpenseList />
                </div>
            </div>
        // </GlobalContextProvider>
    );
};

export default App;