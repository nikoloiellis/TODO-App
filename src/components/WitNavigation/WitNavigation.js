import React from 'react';
import PropTypes from 'prop-types';
import styles from './WitNavigation.module.css';
import { useNavigate } from 'react-router-dom';

function WitNavigation (Component){ 
  
  return props => <Component{...props} navigate = {useNavigate()} /> ;
}
WitNavigation.propTypes = {};

WitNavigation.defaultProps = {};

export default WitNavigation;
