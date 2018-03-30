import { h } from 'hyperapp';
import classNames from 'classnames';

import { filter as filterClass, noPadding } from './TodoFilter.scss';

const TodoFilter = () => ({ filter }, { changeFilter }) => (
  <ul
    class={classNames(filterClass, noPadding)}
    onclick={e => changeFilter(e.target.textContent.toLowerCase())}
  >
    {['All', 'Unfinished', 'Finished'].map((value, index) => (
      <li
        key={index}
        style={value.toLowerCase() === filter ? { color: 'inherit' } : {}}
      >
        {value}
      </li>
    ))}
  </ul>
);

export default TodoFilter;
