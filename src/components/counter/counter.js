import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';
import CounterButton from '../counterButton/counterButton';
import { Component } from 'react';




class Counter extends Component{

  constructor(){
  super(); // call super first to avoid errors
  //this that state is where are states will be placed 
  //I think of states like javascript variables. 
    this.state = {
      counter: 0
    }

    //You change a state with a function without binding it 
    //bind it with this.functionName = this.functionName.bind(this)
    //Now in order to set state you need the .setstate({}) function below
    this.increment = this.increment.bind(this); 
  }

  render(){
    return(
      <div className={styles.Counter} data-testid="Counter">
    <CounterButton by= {1}></CounterButton>
      <CounterButton by= {5}></CounterButton>
      <CounterButton by= {100}></CounterButton>
      <CounterButton by= {500}></CounterButton>

      
  </div>
    )
  }


  //this is a function in a class component
//there is no function keyword before
increment() {
  //this.setState helps you mutate the state without any problems
  //It converts whatever state you have into a new state
  this.setState({
    //a little warning to myself for some reason ++ incrementation 
    //doesn't work just use +1
    counter: this.state.counter  //this.props.by
  });
}
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;
