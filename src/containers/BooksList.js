import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';

import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';

const BooksList = ({
  books,
  removeBook: removeBookDispatch,
  changeFilter: changeFilterDispatch,
  currentFilter,
}) => (
  <>
    <CategoryFilter
      currentFilter={currentFilter}
      handleFilterChange={changeFilterDispatch}
    />
    { books.map(book => (
      <Book
        book={book}
        key={book.id}
        handleRemoveBook={removeBookDispatch}
      />
    )) }
  </>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentFilter: state.filter,
  books: state.filter
    ? state.books.filter(({ category }) => category === state.filter)
    : state.books,
});

export default connect(
  mapStateToProps,
  { removeBook, changeFilter },
)(BooksList);
