import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import Registration from './app/registration';
import Login from './app/login';
import Logincontrol from './app/logincontrol';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
