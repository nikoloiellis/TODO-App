import React from 'react';
import PropTypes from 'prop-types';
import styles from './withParamas.module.css';
import {useParams} from "react-router-dom";

//This is a params function for passing parameters to
function WithParamas(Component){
  return props => <Component {...props} params = {useParams} />
}

WithParamas.propTypes = {};

WithParamas.defaultProps = {};

export default WithParamas;
