import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Button = ({ variant = 'default', children, ...rest }) => (
  <button
    className={styles[variant]}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'emoji']),
  children: PropTypes.node.isRequired,
};

export default Button;