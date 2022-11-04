import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styles from './counterButton.module.css';



//define the initial state in a constructor 
//increment by +

//style is done within an object and is camelCased in react
//However this is just for inline styling in most cases we dont do that
// const style = {fontSize: "50px", padding: "15px 30px"};
class CounterButton extends Component {

  //Using a constructor you can handle things like state 
  constructor() {
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
    this.decrement = this.decrement.bind(this);
  }
  
render(){
  return(
    
  <div className={styles.CounterButton} data-testid="Counter">
  
    <button onClick={this.increment}> +{this.props.by} </button>
    <button onClick={this.decrement}> -{this.props.by} </button>

 
  </div>

  
     );
}

//this is a function in a class component
//there is no function keyword before
    increment() {
      //this.setState helps you mutate the state without any problems
      //It converts whatever state you have into a new state
      this.setState({
        //a little warning to myself for some reason ++ incrementation 
        //doesn't work just use +1
        counter: this.state.counter + this.props.by
      });
      //get the increment method from the parent class
      this.props.incrementMethod(this.props.by);
    
  } 
  decrement() {
   
   this.setState({
   
    counter: this.state.counter + this.props.by
  });
    this.props.decrementMethod(this.props.by)
    
  }


}


//Default props lets you start with default property data to be passed
//this allows you to define it at the beginning when youre first using a component
CounterButton.defaultProps = {

  by: 1
};

export default CounterButton;
