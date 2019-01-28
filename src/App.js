import React, { Component } from 'react';
import 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory  } from 'react-router-dom'
import Registration from './app/registration';
import Login  from './app/login';
// import logo from './logo.svg';
import './style/App.css';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <ul>
           <li><link to={'/app/login'}>Login</link></li>
           <li><link to={'/app/registration'}>Registration</link></li>
         </ul>
         <hr/>
         <switch>
           <Router exact path='/app/login' Component = {Login}/>
           <Router exact path='./app/registartion' Component = {Registration}/>
         </switch>
       </div>
     </Router>
    );
  }
}

export default App;
