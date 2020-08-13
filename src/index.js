import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LoginBoo from "./scenes boostrap/auth boostrap/login boostrap";
import NavbarBoo from "./ component boostrap/common boostrap/navbar";
import NavigationBoo from "./navigation boostrap";


ReactDOM.render(
  <React.StrictMode>
      <NavigationBoo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
