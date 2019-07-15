import React from 'react';

import { categories } from '../containers/BooksForm';

const CategoryFilter  = ({handleFilterChange, currentFilter}) => {
  return (
    <>
      <span className="mr-3">Filter by category:</span>
      <select
        className="custom-select w-auto my-3" 
        defaultValue={currentFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value=''>All</option>
        { categories.map(cat => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        )) }
      </select>
    </>
  );
}

export default CategoryFilter;