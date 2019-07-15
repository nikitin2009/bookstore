import React from 'react';

import Book from '../../components/Book';

import { connect } from 'react-redux';
import { removeBook } from '../../actions';

const BooksList = ({books, removeBook}) => {
  return (
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
        { books.map(book => (
          <Book 
            book={book} 
            key={book.id} 
            handleRemoveBook={removeBook} />
        )) }
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, { removeBook })(BooksList);