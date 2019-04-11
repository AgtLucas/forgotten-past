import React from 'react';
import styles from './styles.module.css';

const ErrorMessage = ({ children, ...rest }) => (
  <span
    className={styles.error}
    aria-live='polite'
    {...rest}
  >
    {children}
  </span>
);

export default ErrorMessage;