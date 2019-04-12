import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';
import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import Select from '../Select';
import styles from './styles.module.css';

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

const CreateTransactionForm = ({ handleSubmit }) => (
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
      <form
        method='post'
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <label className={styles.label}>
          Tipo de transação
          <Select
            name='transactionType'
            value={values.transactionType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Escolha o tipo de transação</option>
            <option value='credit'>Crédito</option>
            <option value='debit'>Débito</option>
          </Select>
          {errors.transactionType && touched.transactionType ? (
            <ErrorMessage>{errors.transactionType}</ErrorMessage>
          ) : null}
        </label>
        <label className={styles.label}>
          Descrição
          <Input
            type='text'
            name='description'
            value={values.description}
            placeholder='Ex.: Fatura Banco XYZ'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description ? (
            <ErrorMessage>{errors.description}</ErrorMessage>
          ) : null}
        </label>
        <label className={styles.label}>
          Valor
          <Input
            min='0'
            type='number'
            name='price'
            value={values.price}
            placeholder='Ex.: 200'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && touched.price ? (
            <ErrorMessage>{errors.price}</ErrorMessage>
          ) : null}
        </label>
        <Button type='submit' disabled={isSubmitting}>Adicionar transação</Button>
      </form>
    )}
  </Formik>
);

export default CreateTransactionForm;