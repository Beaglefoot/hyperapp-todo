import { h } from 'hyperapp';

const TodoText = ({
  done,
  value,
  isEditing,
  toggleDone,
  toggleEditing,
  changeValue,
  index
}) => (
  <div class="todo-item">
    {isEditing ? (
      <input
        class="todo-edit"
        value={value}
        onchange={e => changeValue({ value: e.target.value, index })}
        onkeydown={e => {
          const enterKeyCode = 13;
          const escapeKeyCode = 27;
          if (e.which === enterKeyCode || e.which === escapeKeyCode)
            toggleEditing(index);
        }}
      />
    ) : (
      <div
        class="todo-text"
        onclick={() => {
          console.log('toggleDone');
          toggleDone(index);
        }}
        style={done ? { textDecoration: 'line-through' } : {}}
      >
        {value}
      </div>
    )}
    <div class="edit" onclick={() => toggleEditing(index)}>
      &#9998;
    </div>
  </div>
);

export default TodoText;
