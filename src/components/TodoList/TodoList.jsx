import { h } from 'hyperapp';
import classs from 'classnames';

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
    <div class={todoList}>
      <input
        class={addItem}
        type="text"
        onkeypress={e => handleChange(e)}
        placeholder="Add an item"
      />
      <ul class={noPadding}>
        {filteredList.map((item, index) => (
          <li key={item.id} class={todoItem}>
            <TodoText
              {...item}
              toggleDone={actions.toggleDone}
              toggleEditing={actions.toggleEditing}
              changeValue={actions.changeValue}
              index={index}
            />
            <div class={cross} onclick={() => actions.removeItem(index)}>
              &#10006;
            </div>
          </li>
        ))}
      </ul>

      <div class={afterRow}>
        <div>Total: {filteredList.length}</div>
        <div
          class={classs(cleanUp, 'fa', 'fa-trash-o')}
          onclick={actions.removeFinished}
        />
      </div>

      <ul
        class={classs(filterClass, noPadding)}
        onclick={e => actions.changeFilter(e.target.textContent.toLowerCase())}
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
