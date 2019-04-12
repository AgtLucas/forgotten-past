import React from 'react';
import Dinero from 'dinero.js';
import Button from '../Button';
import styles from './styles.module.css';

const TRANSACTION_TYPE = {
  'credit': 'Crédito',
  'debit': 'Débito',
};

const BRL = value =>
  Dinero({ amount: value, currency: 'BRL' })
    .setLocale('pt-BR')
    .toFormat('$0,0.00');


const TransactionsTable = ({ transactions, transactionsTotalPrice, deleteTransactionById }) => {
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
        <th></th>
      </tr>
      </thead>
      <tfoot>
      <tr>
        <th colSpan={4}>Total: {BRL(transactionsTotalPrice)}</th>
      </tr>
      </tfoot>
      <tbody>
      {transactions.map((transaction, i) => (
        <tr key={i}>
          <td>{transaction.description}</td>
          <td>{BRL(parseInt(transaction.price))}</td>
          <td>{TRANSACTION_TYPE[transaction.transactionType]}</td>
          <td style={{ width: '30px' }}>
            <Button
              variant='emoji'
              onClick={() => deleteTransactionById(transaction.id)}
              title={`Deletar transação: ${transaction.description}`}
            >
              <span role='img' aria-label={`Deletar transação: ${transaction.description}`}>
                ❌
              </span>
            </Button>
          </td>
        </tr>
      )).reverse()}
      </tbody>
    </table>
  )
};

export default TransactionsTable;