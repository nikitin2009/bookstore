import { fetchBooks } from './fetch-books';
import { createBook } from './create-book';
import { removeBook } from './remove-book';

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export {
  fetchBooks,
  createBook,
  removeBook,
};
