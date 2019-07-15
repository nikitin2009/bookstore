export const createBook = ({id, title, category}) => ({
  type: 'CREATE_BOOK',
  id,
  title,
  category
});

export const removeBook = ({id}) => ({
  type: 'REMOVE_BOOK',
  id
});