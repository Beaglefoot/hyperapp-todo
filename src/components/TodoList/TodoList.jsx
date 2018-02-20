import { h } from 'hyperapp';

import TodoText from 'src/components/TodoText/TodoText';
import getFilteredList from 'src/helpers/getFilteredList';

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
    <div class="todo-list">
      <input
        id="add-item"
        type="text"
        onkeypress={e => handleChange(e)}
        placeholder="Add an item"
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={item.id} class="todo-item">
            <TodoText
              {...item}
              toggleDone={actions.toggleDone}
              toggleEditing={actions.toggleEditing}
              changeValue={actions.changeValue}
              index={index}
            />
            <div class="cross" onclick={() => actions.removeItem(index)}>
              &#10006;
            </div>
          </li>
        ))}
      </ul>

      <div class="after-row">
        <div>Total: {filteredList.length}</div>
        <div class="clean-up fa fa-trash-o" onclick={actions.removeFinished} />
      </div>

      <ul
        class="filter"
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
