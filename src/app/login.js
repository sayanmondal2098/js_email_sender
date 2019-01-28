import React, { Component } from 'react';
// import * as React from 'react';
// import logo from '../assects/logo.jpg';
import registration from './registration';
import '../style/App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
    
    renderregistration = () => {
        return(
            <registration />
        )
    }
    
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="App App-bg">
        <header className="App-bg">
         <form>
         <div class="container">
            <h1>Login</h1>
             <p>Please Enter LOgin Credentials</p>
              <hr></hr>

             <label for="email"><b>Email</b></label>
             <input type="text" placeholder="Enter Email" name="email" required></input>

             <label for="psw"><b>Password</b></label>
             <input type="password" placeholder="Enter Password" name="psw" required></input>

             <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
          </div>           
            
         </form>
         <div class="signin">
              <p>Have'nt an account? 
     <button className="btn" onClick={this.renderregistration}> registerbtn</button></p>
            </div>
        </header>
      </div>
    );
    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
      }
      
      function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
      }
      
      function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <UserGreeting />;
        }
        return <GuestGreeting />;
      }
      
      function LoginButton(props) {
        return (
          <button onClick={props.onClick}>
            Login
          </button>
        );
      }
      
      function LogoutButton(props) {
        return (
          <button onClick={props.onClick}>
            Logout
          </button>
        );
      }
      
  }
  
}

export default Login
