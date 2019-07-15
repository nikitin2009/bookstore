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
      <div className="text-right">
        <CategoryFilter 
          currentFilter={currentFilter}
          handleFilterChange={changeFilter}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          { getVisibleBooks(books, currentFilter).map(book => (
            <Book 
              book={book} 
              key={book.id} 
              handleRemoveBook={removeBook} />
          )) }
        </tbody>
      </table>
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