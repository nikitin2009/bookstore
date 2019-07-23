const booksList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: '',
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: '',
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: '',
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

    case 'CREATE_BOOK':
      return [...state, { ...action.book }];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default booksList;
