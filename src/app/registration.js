import React, { Component } from 'react';
// import * as React from 'react';
import logo from '../assects/logo.jpg';
import '../style/App.css';

class Registration extends Component {
  render() {
    return (
      <div className="App App-bg">
        <header className="App-bg">
         <form>
         <div class="container">
            <h1>Register</h1>
             <p>Please fill in this form to create an account.</p>
              <hr></hr>

             <label for="email"><b>Email</b></label>
             <input type="text" placeholder="Enter Email" name="email" required></input>

             <label for="psw"><b>Password</b></label>
             <input type="password" placeholder="Enter Password" name="psw" required></input>

            <label for="psw-repeat"><b>Repeat Password</b></label>
               <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
              <hr></hr>

             <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
               <button type="submit" class="registerbtn">Register</button>
          </div>           
            <div class="signin">
              <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
         </form>
        </header>
      </div>
    );
  }
}

export default Registration;
