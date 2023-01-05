import React, { useState,useEffect } from "react";
import DataTable from "react-data-table-component";

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
  },
};

const Tables = (props) => {
  const data = props.data;
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredData(data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
  }, [search])
  

  return (
    <DataTable
      columns={props.columns}
      data={filteredData}
      pagination
      highlightOnHover
      customStyles={style}
      subHeader
      subHeaderComponent={
        <input
          type="text"
          className="block p-2 rounded-md w-1/5 text-sm font-medium text-gray-900 border"
          placeholder="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      }
    />
  );
};

export default Tables;
