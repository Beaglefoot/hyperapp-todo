import { h } from 'hyperapp';
import classNames from 'classnames';

import TodoRecords from 'src/components/TodoRecords/TodoRecords';
import TodoFilter from 'src/components/TodoFilter/TodoFilter';
import getFilteredList from 'src/helpers/getFilteredList';

import { todoList, afterRow, addItem, cleanUp } from './TodoList.scss';

const TodoList = () => ({ list, filter }, actions) => {
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

      <TodoRecords filteredList={filteredList} />

      <div class={afterRow}>
        <div>Total: {filteredList.length}</div>
        <div
          class={classNames(cleanUp, 'fa', 'fa-trash-o')}
          onclick={actions.removeFinished}
        />
      </div>

      <TodoFilter />
    </div>
  );
};

export default TodoList;
