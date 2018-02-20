import createTodoItem from 'src/helpers/createTodoItem';

export default {
  list: ['open an issue', 'read the source code'].map(value =>
    createTodoItem({ value })
  ),
  filter: 'all' || 'finished' || 'unfinished'
};
