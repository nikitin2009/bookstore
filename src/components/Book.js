import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="card mb-3">
    <div className="card-body">
      <div className="text-secondary">{book.category}</div>
      <h4 className="card-title">{ book.title }</h4>
      <button
        type="button"
        className="btn btn-link card-link p-0"
        onClick={() => handleRemoveBook(book.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
