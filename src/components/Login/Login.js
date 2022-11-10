import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import AuthenticationService from '../TodoApp/AuthenticationService';

class Login extends Component{

  constructor(props){
    super(props);

      this.state = {
        username: 'Work',
        password: '' ,
        hasLoginFailed: false,
        showSuccessMessage: false

      }

      //NOTE TO SELF 
      //Be careful with bind events, even getting anything wrong for it will have you scratching your head for 20 minutes wondering
      //why your events aren't working properly MAKE SURE TO HAVE IT with .bind(this) NO MISTAKES!
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this); 
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
  }
  


  //Handle change is a catch all it gets the name event as a generic 
  //It can handle all changes for any text element
  handleChange(event){
    console.log(event.target.value);
    this.setState({
      [event.target.name]:event.target.value

    })
  }
  //Synthtic event
  handleUserNameChange(event){

    console.log(event.target.name);
    //Updating the state with a sythethic event
    this.setState({username:event.target.value})
  }
 
  //Synthtic event
  handlePasswordChange(event){

      console.log(event.target.value);
      //Updating the state with a sythethic event event.target.value finds the events value 
      //.target targets an event and shows yo that 
      //.value specifically shows you the valeu
      this.setState({password:event.target.value})
  }


  loginClicked(){

    //console.log(this.state);


    if(this.state.username === 'Work' && this.state.password === 'test')
    {
      AuthenticationService. registerSuccessfulLogin(this.state.username, this.state.password);      //This is for routing if its successful
      this.props.navigate(`/welcome/${this.state.username}`);
      this.setState({
        showSuccessMessage:true,
        hasLoginFailed: false
      });
    }else{
      this.setState({
        showSuccessMessage:false,
        hasLoginFailed:true
      });
    }
  }


  render() {return (
  <div className={styles.Login} data-testid="Login">
    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
    {/*If statements in jsx are a bit odd this is basically saying if hasloginfailed also show Invalid credentals instead of
    if haslogin failed and invalid credentials is shown. && works as a block of code rather than and AND  */}
    {this.state.hasLoginFailed && <div> Invalid Credentials </div> }
    <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessMessage>
    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
    Password: <input type="password" name="password"  value={this.state.password} onChange={this.handleChange}/>
    <button onClick={this.loginClicked}>Login</button> 
  </div>
);
}
}

function ShowInvalidCredentials(props){
  if(props.hasLoginFailed){
    return <div>Invalid Credentials </div>
  }
  else {
    return null;
  }
}

function ShowLoginSuccessMessage(props){
  if(props.showSuccessMessage){
    return <div>Login Successful!</div>
  }
  return null;
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
