import { h } from 'hyperapp';

import TodoList from 'src/components/TodoList/TodoList';
import { view as viewClass } from 'src/styles/view.scss';

const view = () => (
  <div className={viewClass}>
    <h1>Hyperapp Todo List</h1>
    <TodoList />
  </div>
);

export default view;
