const getFilteredList = (filter, list) => {
  switch (filter) {
    case 'finished':
      return list.filter(item => item.done);
    case 'unfinished':
      return list.filter(item => !item.done);
    default:
      return list;
  }
};

export default getFilteredList;
