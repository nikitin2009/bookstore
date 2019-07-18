import uuid from 'uuid/v1';

export const createBook = ({ title, category }) => ({
  type: 'CREATE_BOOK',
  book: {
    id: uuid(),
    title,
    category,
  },
});

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
