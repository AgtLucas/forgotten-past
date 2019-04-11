import React from 'react';
import styles from './styles.module.css';

const TRANSACTION_TYPE = {
  'credit': 'Crédito',
  'debit': 'Débito',
};

const TransactionsTable = ({ transactions, getTransactionsTotalPrice }) => {
  if (!transactions || !transactions.length) return <p>Você não cadastrou nenhuma transação</p>;

  return (
    <table>
      <thead>
      <tr>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Tipo de transação</th>
      </tr>
      </thead>
      <tfoot>
      <tr>
        <th colSpan={3}>Total: R$ {getTransactionsTotalPrice()}</th>
      </tr>
      </tfoot>
      <tbody>
      {transactions.map((transaction, i) => (
        <tr key={i}>
          <td>{transaction.description}</td>
          <td>{transaction.price}</td>
          <td>{TRANSACTION_TYPE[transaction.transactionType]}</td>
        </tr>
      )).reverse()}
      </tbody>
    </table>
  )
}

export default TransactionsTable;