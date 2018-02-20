import { h } from 'hyperapp';

import TodoList from 'src/components/TodoList/TodoList';

const view = (state, actions) => (
  <div>
    <h1>Hyperapp Todo List</h1>
    <TodoList state={state} actions={actions} />
  </div>
);

export default view;
