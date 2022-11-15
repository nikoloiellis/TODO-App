import React, {Component} from 'react';
import PropTypes from 'prop-types';
//This is what is actually needed to use react css not just an install
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TodoApp.module.css';
import Login from '../Login/Login';

import Welcome from '../WelcomeComponent/WelcomeComponent';
import WitNavigation from '../WitNavigation/WitNavigation';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import WithParamas from '../withParamas/withParamas';
import ListToDOesComponent from '../ListToDOesComponent/ListToDOesComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import{
  Box,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles.js";
import Navbar from 'react-bootstrap/Navbar';
import AuthenticationService from './AuthenticationService';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'; 
import Logout from '../Logout/Logout';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import TodoComponent from '../TodoComponent/TodoComponent';



class TodoApp extends Component{


  render(){
    //A function for navigation however it feels depricated so remember to update this
    const LoginComponentWithNavigation = WitNavigation(Login);
    const WelcomeComponentWithParams = WithParamas(Welcome);
    const HeaderComponentWithNavigation = WitNavigation(HeaderComponent)


    return( <div className={styles.TodoApp} data-testid="TodoApp">
  
    <Router>
    <HeaderComponentWithNavigation />
      <Routes>
       
        <Route path='/'element={<LoginComponentWithNavigation/>}/> 
        {/* <Route path='/login'element={<Login />}/>  */}
        <Route path='/login'element={< LoginComponentWithNavigation  />}/>

        <Route path='/todo'element={
        <AuthenticatedRoute>
          < ListToDOesComponent  />
          </AuthenticatedRoute>
          }/>
        <Route path='/welcome/:name'element={<AuthenticatedRoute>
          <WelcomeComponentWithParams />
          </AuthenticatedRoute>}/>  
         
          <Route path='/todo'element={<AuthenticatedRoute>
            <TodoComponent/>
          </AuthenticatedRoute>}/> 


        <Route path='/logout'element={< Logout  />}/>
        <Route path='*' element={<ErrorComponent/>}></Route>

      
        {/* The error component just uses the inside asterik now to use it im guessin */}
      </Routes>
      {/* <FooterComponent/> */}
    </Router>
 
  </div>)
  }
 
}

class HeaderComponent extends Component {

 
  render(){

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TestingNav</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to='/welcome/:name' >Home </Link></Nav.Link>
            <Nav.Link href="#features">Todo</Nav.Link>
            <Nav.Link href="#pricing">Welcome</Nav.Link>
        
          </Nav>
          <Navbar.Toggle />
            <Nav className="justify-content-end">

           {!isUserLoggedIn && <Nav.Link><Link to='/login' >Login</Link></Nav.Link>}
          {isUserLoggedIn && <Nav.Link > <Link to='/logout' onClick={AuthenticationService.logout}>Logout</Link></Nav.Link>}
        </Nav>
        </Container>
      </Navbar>
      <br />
  
    </>
    ); 
  }

}

class FooterComponent extends Component {
  render(){
    return (
      <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Testing React!
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    ); 
  }

}

TodoApp.propTypes = {};

TodoApp.defaultProps = {};

export default TodoApp;
