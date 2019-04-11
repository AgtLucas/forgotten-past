import React, { useState, useEffect, useRef } from 'react';
import CreateTransactionForm from './components/CreateTransactionForm';
import TransactionsTable from './components/TransactionsTable';

const App = () => {
  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  const [transactions, setTransactions] = useState(localStorageTransactions || []);
  const formElement = useRef(null);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = values => {
    setTransactions(transactions => [ ...transactions, values ]);
  };

  const getTransactionsTotalPrice = () => {
    if (!transactions.length) return;
    return `${transactions.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}`;
  };

  return (
    <main>
      <CreateTransactionForm
        formRef={formElement}
        handleSubmit={handleSubmit}
      />
      <TransactionsTable
        transactions={transactions}
        getTransactionsTotalPrice={getTransactionsTotalPrice}
      />
    </main>
  );
};

export default App;
