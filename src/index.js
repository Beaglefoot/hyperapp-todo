import { h, app } from 'hyperapp';
// import logger from '@hyperapp/logger';

import view from 'src/view';
import initialState from 'src/initialState';
import actions from 'src/actions';

const syncWithLocalStorage = view => (state, actions) => {
  localStorage.setItem('hyperappTodoList', JSON.stringify(state));
  return view(state, actions);
};

const savedState = JSON.parse(localStorage.getItem('hyperappTodoList'));

app(
  savedState || initialState,
  actions,
  syncWithLocalStorage(view),
  document.getElementById('app')
);
