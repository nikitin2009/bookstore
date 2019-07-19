import initialBooks from '../sample-data/books';

const books = (state = initialBooks, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { ...action.book }];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
