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