import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';
import CounterButton from '../counterButton/counterButton';
import { Component } from 'react';



const style = {fontSize: "50px", padding: "15px 30px"};
class Counter extends Component{

  
  constructor(){
  super(); 
    this.state = {
      counter: 0
    }

 
    this.increment = this.increment.bind(this); 
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this); 
  }

  render(){
    return(
      <div className={styles.Counter} data-testid="Counter">
      <CounterButton by= {1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
      <CounterButton by= {5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
      <CounterButton by= {100} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
      <CounterButton by= {500} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton> 
      <span 
    style={style}>{this.state.counter}</span>
   <div><button className={styles.red} onClick={this.reset}>Reset</button></div> 

  </div>
  
    )
  }


//give it by a property to use as a parameter and use it 
increment(by) {

  //console.log(`increment from parent + ${by}`);
  this.setState((previousState) => {
   
    return {counter: previousState.counter  + by}
  });
  
}
decrement(by) {

 
  this.setState((previousState) => {
   
    return {counter: previousState.counter  - by}
  });

 
}

reset() {

 
  this.setState((previousState) => {
   
    return {counter: previousState.counter  = 0}
  });
}
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;
