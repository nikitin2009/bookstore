import React from 'react';

import Book from '../../components/Book';

import { connect } from 'react-redux';

const BooksList = ({books}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        { books.map(book => (
          <Book book={book} key={book.id}/>
        )) }
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, null)(BooksList);