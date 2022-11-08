import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoApp.module.css';
import Login from '../Login/Login';

const TodoApp = () => (
  <div className={styles.TodoApp} data-testid="TodoApp">
    <Login/>
  </div>
);

TodoApp.propTypes = {};

TodoApp.defaultProps = {};

export default TodoApp;
