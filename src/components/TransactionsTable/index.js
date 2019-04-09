import React from 'react';

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
          <td>{transaction.type}</td>
        </tr>
      )).reverse()}
      </tbody>
    </table>
  )
}

export default TransactionsTable;