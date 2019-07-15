import React from 'react';

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="text-secondary">{book.category}</div>
        <h4 className="card-title">{ book.title }</h4>
        <button
          className="btn btn-link card-link p-0"
          onClick={() => handleRemoveBook(book)}
        >Remove</button>
      </div>
    </div>
  )
}

export default Book;