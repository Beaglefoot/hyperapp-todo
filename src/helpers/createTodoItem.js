import cuid from 'cuid';

const createTodoItem = ({ value = '', done = false }) => ({
  value,
  done,
  id: cuid(),
  isEditing: false
});

export default createTodoItem;
