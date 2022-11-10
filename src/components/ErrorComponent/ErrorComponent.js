import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorComponent.module.css';

const ErrorComponent = () => (
  <div className={styles.ErrorComponent} data-testid="ErrorComponent">
    An Error occured. Please contact Management at 1-800-Error-mangement
  </div>
);

ErrorComponent.propTypes = {};

ErrorComponent.defaultProps = {};

export default ErrorComponent;
