const booksForm = (state, action) => {

  if (state === undefined) {
    return {
      loading: false,
      error: '',
    }
  }

  switch (action.type) {
    case 'CREATE_BOOK_REQUESTED':
      return {
        loading: true,
        error: '',
      };

    case 'CREATE_BOOK_SUCCESS':
      return {
        loading: false,
        error: '',
      };

    case 'CREATE_BOOK_FAILURE':
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default booksForm;