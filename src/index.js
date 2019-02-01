import  React , {useState} from 'react';
import {render, ReactDoM} from 'react-dom';
import { Provider } from 'react-redux-dom';
import { Router } from 'react-router';
import routes from './routes';
import { syncHistoryWithStore, history } from 'react-router-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.


const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

ReactDoM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style/index.css';
// import App from './App';
// // import Registration from './app/registration';
// import Login from './app/login';
// import Logincontrol from './app/logincontrol';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Login />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
/* eslint-disable import/default */
