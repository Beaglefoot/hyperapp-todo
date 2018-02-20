import createTodoItem from 'src/helpers/createTodoItem';

export default {
  addToList(text = '') {
    return state => ({
      list: [createTodoItem({ value: text })].concat(state.list)
    });
  },
  toggleDone(index = 0) {
    return state => ({
      list: [
        ...state.list.slice(0, index),
        { ...state.list[index], done: !state.list[index].done },
        ...state.list.slice(index + 1)
      ]
    });
  },
  changeFilter(filter = 'all') {
    return () => ({ filter });
  },
  toggleEditing(index = 0) {
    return state => ({
      list: [
        ...state.list.slice(0, index),
        { ...state.list[index], isEditing: !state.list[index].isEditing },
        ...state.list.slice(index + 1)
      ]
    });
  },
  changeValue({ value = '', index = 0 } = {}) {
    return state => ({
      list: [
        ...state.list.slice(0, index),
        { ...state.list[index], value },
        ...state.list.slice(index + 1)
      ]
    });
  },
  removeItem(index = 0) {
    return state => ({
      list: [...state.list.slice(0, index), ...state.list.slice(index + 1)]
    });
  },
  removeFinished() {
    return state => ({
      list: state.list.filter(item => !item.done)
    });
  }
};
