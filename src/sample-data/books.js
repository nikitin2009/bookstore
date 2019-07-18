import { createBook } from '../actions';

import categories from './categories';

const initialBooks = [0, 1, 2].map((i) => {
  const newBook = {
    title: `Book ${i}`,
    category: categories[i],
  };

  return createBook(newBook).book;
});

export default initialBooks;
