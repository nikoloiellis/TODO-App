import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeComponent.module.css';
import WithParamas from '../withParamas/withParamas';
import {Link } from 'react-router-dom';

class WelcomeComponent extends Component{
render(){
return(
  <div className={styles.WelcomeComponent} data-testid="WelcomeComponent">
    {/* This isn't working properly figure out why  */}
    WelcomeComponent {this.props.params.name}
    {/* Link in React is like the A tag, however the a tag refreshes the page */}
    You can manage your todos  <Link to='/todo'>here</Link>
  </div>
)
}
}
  


WelcomeComponent.propTypes = {};

WelcomeComponent.defaultProps = {};

export default WelcomeComponent;
