import React from 'react';
import Dinero from 'dinero.js';
import styles from './styles.module.css';

const TRANSACTION_TYPE = {
  'credit': 'Crédito',
  'debit': 'Débito',
};

const BRL = value =>
  Dinero({ amount: value, currency: 'BRL' })
    .setLocale('pt-BR')
    .toFormat('$0,0.00');

const TransactionsTable = ({ transactions, getTransactionsTotalPrice }) => {
  if (!transactions || !transactions.length) return (
    <p className={styles.disclaimer}>
      Você ainda não cadastrou nenhuma transação
    </p>
  );

  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Tipo de transação</th>
      </tr>
      </thead>
      <tfoot>
      <tr>
        <th colSpan={3}>Total: {BRL(getTransactionsTotalPrice())}</th>
      </tr>
      </tfoot>
      <tbody>
      {transactions.map((transaction, i) => (
        <tr key={i}>
          <td>{transaction.description}</td>
          <td>{BRL(parseInt(transaction.price))}</td>
          <td>{TRANSACTION_TYPE[transaction.transactionType]}</td>
        </tr>
      )).reverse()}
      </tbody>
    </table>
  )
};

export default TransactionsTable;