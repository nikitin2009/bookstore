import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeBook, changeFilter, fetchBooks } from '../actions';
import { api } from '../REST/api';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';

class BooksList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {
      filter,
      loading,
      error,
      books,
      removeBook: removeBookDispatch,
      changeFilter: changeFilterDispatch,
    } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Some error occurred when loading books: { error }</p>;
    }

    if (books.length === 0) {
      return <p>No books at the moment</p>;
    }

    return (
      <>
        <CategoryFilter
          filter={filter}
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
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = ({ filter, booksList: { loading, error, books } }) => ({
  filter,
  loading,
  error,
  books: filter
    ? books.filter(({ category }) => category === filter)
    : books,
});

const mapDispatchToProps = dispatch => ({
  removeBook,
  changeFilter,
  fetchBooks: fetchBooks(api, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
