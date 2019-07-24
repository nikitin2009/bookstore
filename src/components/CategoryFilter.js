import React from 'react';
import PropTypes from 'prop-types';

import categories from '../sample-data/categories';

const CategoryFilter = ({ handleFilterChange, filter }) => (
  <>
    <span className="mr-3">Filter by category:</span>
    <select
      className="custom-select w-auto my-3"
      value={filter}
      onChange={e => handleFilterChange(e.target.value)}
    >
      <option value="">All</option>
      { categories.map(cat => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      )) }
    </select>
  </>
);

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
