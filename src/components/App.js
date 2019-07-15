import React from 'react';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <BooksList />
      <BooksForm />
    </>
  )
}

export default App;