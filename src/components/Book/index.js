import React from 'react';

const Book = ({ book, handleRemoveBook }) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleRemoveBook(book)}
        >Remove</button>
      </td>
    </tr>
  )
}

export default Book;