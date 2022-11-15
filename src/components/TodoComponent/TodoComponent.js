import React, {Component}from 'react';
import PropTypes from 'prop-types';
import styles from './TodoComponent.module.css';

class TodoComponent extends Component{
  render(){

    return (<div className={styles.TodoComponent} data-testid="TodoComponent">
    TodoComponent Component for id - {}
  </div>
    );
  }




}
TodoComponent.propTypes = {};

TodoComponent.defaultProps = {};

export default TodoComponent;
