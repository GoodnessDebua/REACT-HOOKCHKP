import React from 'react';

const Filter = ({ filterText, filterRating, setFilterText, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => setFilterRating(e.target.value)}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
