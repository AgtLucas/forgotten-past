import React, { useState, useEffect } from 'react';

const CreateTransactionForm = ({ handleSubmit, handleChange, transaction }) => (
  <form method='post' onSubmit={handleSubmit}>
    <label>
      Value
      <input
        type="text"
        name='value'
        value={transaction.value}
        onChange={handleChange}
      />
    </label>
    <label>
      Date
      <input
        type="text"
        name='date'
        value={transaction.date}
        onChange={handleChange}
      />
    </label>
    <button type='submit'>Adicionar transação</button>
  </form>
);

const App = () => {
  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  const [transaction, setTransaction] = useState({ value: '', date: '' });
  const [transactions, setTransactions] = useState(localStorageTransactions || []);

  const handleChange = e => {
    const { name, value } = e.target;
    setTransaction(transaction => ({ ...transaction, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTransactions(transactions => [ ...transactions, transaction ]);
    setTransaction(transaction => ({ ...transaction, value: '', date: '' }));
  };

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div>
      <CreateTransactionForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        transaction={transaction}
      />
      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={i}>
              <td>{transaction.value}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
