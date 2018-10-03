import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import {fetchTodos} from './util/todo_api_util';
import {receiveTodos} from './actions/todo_actions';




document.addEventListener('DOMContentLoaded', () => {

  window.fetchTodos = fetchTodos;

  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  window.store = store;
  window.hannah = receiveTodos; 

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
