import { fetchBooks } from './fetch-books';
import { createBook } from './create-book';

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export {
  fetchBooks,
  createBook,
};