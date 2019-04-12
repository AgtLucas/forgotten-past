import React from 'react';
import styles from './styles.module.css';

const Select = ({ children, ...props }) => (
  <select className={styles.select} {...props}>
    {children}
  </select>
);

export default Select;