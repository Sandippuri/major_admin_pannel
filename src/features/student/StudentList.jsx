import React, { useEffect, useState, useMemo } from "react";
import { useGetAllStudentsQuery } from "../../redux-toolkit/apiSlices/student";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import AddStudentModal from "./components/addStudentModal";
import { useSelector } from "react-redux";

const style = {
  cells: {
    style: {
      fontSize: "14px",
      cursor: "pointer",
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
    },
  },
};

const StudentList = () => {
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllStudentsQuery();
  // const { singleStudentData = data } = useGetStudentQuery(1);
  // const studentData = data?.value;
  // console.log(singleStudentData);
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);

  const filteredItems = data?.value?.filter(
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

  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Student name", selector: (row) => row.name, sortable: true },
    {
      name: "Date of Birth",
      selector: (row) => new Date(row.dateOfBirth).toDateString(),
      sortable: true,
    },
    {
      name: "Citizenship Number",
      selector: (row) => row.citizenshipNumber,
      sortable: true,
    },
  ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
        <div className="flex justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Student Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddStudentModalOpen(true)}
          >
            + Add Student
          </button>
        </div>

        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && (
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              highlightOnHover
              customStyles={style}
              subHeader
              subHeaderComponent={subHeaderComponent}
              onRowClicked={(row) => navigate(`/students/${row.id}`)}
            />
          )}
        </div>
      </div>
      <AddStudentModal
        isOpen={addStudentModalOpen}
        closeModal={() => setAddStudentModalOpen(false)}
      />
    </>
  );
};

export default StudentList;
