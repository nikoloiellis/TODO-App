import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Logout.module.css';

class Logout extends Component {
  render(){
    return(
      <div className={styles.Logout} data-testid="Logout">
      <h1> You are Logged out thank you for using our application</h1>
      <h2>thank you for using our application</h2>
    </div>
    )
  }

}


Logout.propTypes = {};

Logout.defaultProps = {};

export default Logout;
