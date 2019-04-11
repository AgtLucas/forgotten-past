import React from 'react';
import styles from './styles.module.css';

const Input = props => (
  <input className={styles.input} {...props} />
);

export default Input;