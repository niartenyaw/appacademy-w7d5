import React from 'react';
import ReactDOM from 'react-dom';
import * as Actions from './actions/session_actions';
import configureStore from './store/store';

window.signin = Actions.signin;
window.signup = Actions.signup;
window.signout = Actions.signout;

document.addEventListener('DOMContentLoaded',() => {
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
