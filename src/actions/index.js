import uuid from 'uuid/v1';

export const createBook = ({ title, category }) => ({
  type: 'CREATE_BOOK',
  book: {
    id: uuid(),
    title,
    category,
  },
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksLoaded = newBooks => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksError = error => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error,
});

export const fetchBooks = (api, dispatch) => () => {
  dispatch(booksRequested());
  api.fetchBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err.message)));
};