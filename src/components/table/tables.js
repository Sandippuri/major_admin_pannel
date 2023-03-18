import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import "./style.css";

const style = {
  cells: {
    style: {
      fontSize: "14px",
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
    },
  },
};

const Tables = (props) => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    return (
      <input
        className="input-field w-1/5 mb-2"
        id="search"
        type="text"
        placeholder="Filter table data..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText]);

  return (
    <DataTable
      columns={props.columns}
      data={filteredItems}
      pagination
      highlightOnHover
      customStyles={style}
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Tables;
