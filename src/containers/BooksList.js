import React from 'react';

import Book from '../components/Book';

import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';

import CategoryFilter from '../components/CategoryFilter';

const getVisibleBooks = (books, currentFilter) => {
  if (currentFilter === '') {
    return books;
  }
  return books.filter(book => book.category === currentFilter);
};

const BooksList = ({
  books, 
  removeBook, 
  changeFilter,
  currentFilter
}) => {
  return (
    <>
      <CategoryFilter 
        currentFilter={currentFilter}
        handleFilterChange={changeFilter}
      />
      { getVisibleBooks(books, currentFilter).map(book => (
        <Book 
          book={book} 
          key={book.id} 
          handleRemoveBook={removeBook} />
      )) }
    </>
  )
}

const mapStateToProps = (state) => ({ 
  books: state.books,
  currentFilter: state.filter
});

export default connect(
  mapStateToProps, 
  { removeBook, changeFilter }
)(BooksList);