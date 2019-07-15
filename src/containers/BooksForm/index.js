import React from 'react';

const BooksForm = ({ book }) => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  return (
    <form className="form-inline">
      <input className="form-control mr-2" type="text" placeholder="Title"/>
      <select className="form-control mr-2" defaultValue="">
        <option value="" disabled>Category</option>
        { categories.map(cat => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        )) }
      </select>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

export default BooksForm;