import React from 'react';

const CreateTransactionForm = ({ formRef, handleSubmit, handleChange, transaction }) => (
  <form ref={formRef} method='post' onSubmit={handleSubmit}>
    <label>
      Descrição
      <input
        type='text'
        name='description'
        value={transaction.description}
        onChange={handleChange}
      />
    </label>
    <label>
      Valor
      <input
        min='0'
        type='number'
        name='price'
        value={transaction.price}
        onChange={handleChange}
      />
    </label>
    <label>
      Crédito
      <input
        type='radio'
        name='type'
        value='credit'
        onChange={handleChange}
      />
    </label>
    <label>
      Débito
      <input
        type='radio'
        name='type'
        value='debit'
        onChange={handleChange}
      />
    </label>
    <button type='submit'>Adicionar transação</button>
  </form>
);

export default CreateTransactionForm;