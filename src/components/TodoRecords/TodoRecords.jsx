import { h } from 'hyperapp';
import TodoText from 'src/components/TodoText/TodoText';

import { cross, todoItem, noPadding } from './TodoRecords.scss';

const TodoRecords = ({ filteredList }) => (_, { removeItem }) => (
  <ul class={noPadding}>
    {filteredList.map((item, index) => (
      <li key={item.id} class={todoItem}>
        <TodoText {...item} index={index} />
        <div class={cross} onclick={() => removeItem(index)}>
          &#10006;
        </div>
      </li>
    ))}
  </ul>
);

export default TodoRecords;
