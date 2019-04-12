import React, { useState, useEffect } from 'react';
import CreateTransactionForm from './components/CreateTransactionForm';
import TransactionsTable from './components/TransactionsTable';

const App = () => {
  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  const [transactions, setTransactions] = useState(localStorageTransactions || []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = values => {
    setTransactions(transactions => [ ...transactions, values ]);
  };

  const getTransactionsTotalPrice = () => {
    if (!transactions.length) return;
    return transactions.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  };

  const deleteTransactionById = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  };

  return (
    <main>
      <CreateTransactionForm handleSubmit={handleSubmit} />
      <TransactionsTable
        transactions={transactions}
        transactionsTotalPrice={getTransactionsTotalPrice()}
        deleteTransactionById={deleteTransactionById}
      />
    </main>
  );
};

export default App;
