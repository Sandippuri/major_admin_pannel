import React from "react";

const FilterComponent = ({ filterText, onFilter}) => (
  <>
    <input
    className="input-field w-1/5 mb-2"
      id="search"
      type="text"
      placeholder="Filter table data..."
      value={filterText}
      onChange={onFilter}
    />
  </>
);

export default FilterComponent;
