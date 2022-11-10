import React, {Component}from 'react';
import PropTypes from 'prop-types';
import styles from './AuthenticatedRoute.module.css';
import AuthenticationService from '../TodoApp/AuthenticationService';
import {Route, Navigate} from 'react-router-dom' ; 

class AuthenticatedRoute extends Component{
  render(){
   
    if(AuthenticationService.isUserLoggedIn()){
      return {...this.props.children}
    }else{
     return <Navigate to="/login"/> 
    }
  }
 

}


export default AuthenticatedRoute;
