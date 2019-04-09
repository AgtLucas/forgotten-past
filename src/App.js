import React, { Fragment, useState, useEffect, useRef } from 'react';
import CreateTransactionForm from './components/CreateTransactionForm';
import TransactionsTable from './components/TransactionsTable';

const App = () => {
  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  const [transaction, setTransaction] = useState({ description: '', price: '', type: '' });
  const [transactions, setTransactions] = useState(localStorageTransactions || []);
  const formElement = useRef(null);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleChange = e => {
    const { name, value } = e.target;
    const v = name === 'price' ? parseInt(value) : value;
    setTransaction(transaction => ({ ...transaction, [name]: v }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTransactions(transactions => [ ...transactions, transaction ]);
    formElement.current.reset();
  };

  const getTransactionsTotalPrice = () => {
    if (!transactions.length) return;
    return `${transactions.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}`;
  };

  return (
    <Fragment>
      <CreateTransactionForm
        formRef={formElement}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        transaction={transaction}
      />
      <TransactionsTable
        transactions={transactions}
        getTransactionsTotalPrice={getTransactionsTotalPrice}
      />
    </Fragment>
  );
};

export default App;
