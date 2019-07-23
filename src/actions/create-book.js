const requested = () => ({
  type: 'CREATE_BOOK_REQUESTED',
});

const success = () => ({
  type: 'CREATE_BOOK_SUCCESS',
});

const failure = error => ({
  type: 'CREATE_BOOK_FAILURE',
  payload: error,
});

const addBook = book => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const createBook = (api, dispatch) => (book) => {
  dispatch(requested());
  api.createBook(book)
    .then((data) => {
      dispatch(success());
      dispatch(addBook(data));
    })
    .catch(err => dispatch(failure(err.message)));
};
