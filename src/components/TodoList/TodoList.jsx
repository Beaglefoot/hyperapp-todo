import { h } from 'hyperapp';
import classNames from 'classnames';

import TodoText from 'src/components/TodoText/TodoText';
import getFilteredList from 'src/helpers/getFilteredList';

import {
  todoList,
  todoItem,
  cross,
  afterRow,
  filter as filterClass,
  addItem,
  noPadding,
  cleanUp
} from './TodoList.scss';

const TodoList = ({ state: { list, filter }, actions }) => {
  const filteredList = getFilteredList(filter, list);
  const handleChange = e => {
    // on Enter press
    const enterKeyCode = 13;
    if (e.charCode === enterKeyCode) {
      actions.addToList(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div className={todoList}>
      <input
        className={addItem}
        type="text"
        onKeyPress={e => handleChange(e)}
        placeholder="Add an item"
      />
      <ul className={noPadding}>
        {filteredList.map((item, index) => (
          <li key={item.id} className={todoItem}>
            <TodoText
              {...item}
              toggleDone={actions.toggleDone}
              toggleEditing={actions.toggleEditing}
              changeValue={actions.changeValue}
              index={index}
            />
            <div className={cross} onClick={() => actions.removeItem(index)}>
              &#10006;
            </div>
          </li>
        ))}
      </ul>

      <div className={afterRow}>
        <div>Total: {filteredList.length}</div>
        <div
          className={classNames(cleanUp, 'fa', 'fa-trash-o')}
          onClick={actions.removeFinished}
        />
      </div>

      <ul
        className={classNames(filterClass, noPadding)}
        onClick={e => actions.changeFilter(e.target.textContent.toLowerCase())}
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
    </div>
  );
};

export default TodoList;
