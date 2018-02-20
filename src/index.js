import { h, app } from 'hyperapp';

import view from 'src/view';
import initialState from 'src/initialState';
import actions from 'src/actions';

import 'src/styles/global.scss';

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
