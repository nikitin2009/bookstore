import React from 'react';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <BooksList />
        <hr className="mt-5 mb-4"/>
        <BooksForm />
      </div>
    </>
  )
}

export default App;