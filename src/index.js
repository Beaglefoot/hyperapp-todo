import { h, app } from 'hyperapp';

import view from 'src/view';
import initialState from 'src/initialState';
import actions from 'src/actions';

import 'src/styles/global.scss';

app(initialState, actions, view, document.getElementById('app'));
