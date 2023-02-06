import React, { useState,useEffect,useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./filterComponent";
import "./style.css"

const style = {
  cells: {
    style: {
      fontSize: "13px",
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
    },
  }
};

const Tables = (props) => {
  const data = props.data;
  // const [filteredData, setFilteredData] = useState(data);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setFilteredData(data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
  // }, [search])
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  

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
