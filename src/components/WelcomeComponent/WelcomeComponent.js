import React, {Component} from 'react';
import styles from './WelcomeComponent.module.css';
import {Link } from 'react-router-dom';
import HelloWorldService from '../../api/HelloWorldService';

class WelcomeComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      welcomeMessage:""
    }
  

    this.retrieveWelcoemMessage = this.retrieveWelcoemMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    
  }
render(){
return(
  <>
  <div className={styles.WelcomeComponent} data-testid="WelcomeComponent">
    {/* This isn't working properly figure out why  */}
    WelcomeComponent {this.props.params.name}
    {/* Link in React is like the A tag, however the a tag refreshes the page */}
    You can manage your todos  <Link to='/todo'>here</Link>
    
  </div>
    <div>
  Click here to get custimized welcome message 
  <button onClick={this.retrieveWelcoemMessage}>Get Welcome Message</button>
    
  </div>
  <div>
    {this.state.welcomeMessage}
  </div>
  </>
)
}

//all responses are ascynronous so we use promises more or so
retrieveWelcoemMessage(){
  //use then to do something after the response
   HelloWorldService.excutedHelloWorldService().then(response => this.handleSuccessfulResponse(response)).catch(
    error => this.handleError(error)
    );
  // HelloWorldService.excutedHelloWorldBeanService().then(response => this.handleSuccessfulResponse(response));
  //this one is for path params you need to input a parameter for the params
  //HelloWorldService.excutedHelloWorldPathVariableService(this.props.params.name).then(response => this.handleSuccessfulResponse(response))
}


handleSuccessfulResponse(response){

  //for an object you need to actually map the response and find said response 
  //use the structure of the json message
  //this.setState({welcomeMessage:response.data.message});
  this.setState({welcomeMessage:response.data});
}

handleError(error){
  console.log(error.response);
  this.setState({welcomeMessage:error.response.data.message});
}
}
  


WelcomeComponent.propTypes = {};

WelcomeComponent.defaultProps = {};

export default WelcomeComponent;
