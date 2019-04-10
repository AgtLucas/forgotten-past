import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const TransactionSchema = Yup.object().shape({
  description: Yup.string()
    .min(2, 'Descreva melhor sua transação.')
    .max(100, 'Calma aí, não precisa escrever 1 livro também...')
    .required('Você deve descrever a sua transação.'),
  price: Yup.number()
    .required('Por favor, adicione o valor da transação.'),
  transactionType: Yup.string()
    .required('Por favor, escolha o tipo da transação.')
});

const CreateTransactionForm = ({ formRef, handleSubmit }) => (
  <Formik
    initialValues={{ description: '', price: '', transactionType: '' }}
    validationSchema={TransactionSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      handleSubmit(values);
      resetForm();
      setSubmitting(false);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form ref={formRef} method='post' onSubmit={handleSubmit}>
        <label>
          Descrição
          <input
            type='text'
            name='description'
            value={values.description}
            placeholder='Ex.: Fatura Banco XYZ'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
        </label>
        <label>
          Valor
          <input
            min='0'
            type='number'
            name='price'
            value={values.price}
            placeholder='Ex.: 200'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
        </label>
        <label>
          <select
            name='transactionType'
            value={values.transactionType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Tipo de transação</option>
            <option value='credit'>Crédito</option>
            <option value='debit'>Débito</option>
          </select>
          {errors.transactionType && touched.transactionType ? (
            <div>{errors.transactionType}</div>
          ) : null}
        </label>
        <button type='submit' disabled={isSubmitting}>Adicionar transação</button>
      </form>
    )}
  </Formik>
);

export default CreateTransactionForm;