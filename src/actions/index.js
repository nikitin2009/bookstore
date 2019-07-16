let nextBookId = 0;

export const createBook = ({ title, category }) => ({
  type: 'CREATE_BOOK',
  id: nextBookId++,
  title,
  category,
});

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
