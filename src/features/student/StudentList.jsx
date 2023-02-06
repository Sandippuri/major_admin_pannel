import React, { useEffect, useState } from "react";
import { useGetAllStudentsQuery } from "../../redux-toolkit/apiSlices/student";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/table/tables";
import AddStudentModal from "./components/addStudentModal";

const StudentList = () => {
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false);
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllStudentsQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Student name", selector: (row) => row.name, sortable: true },
    { name: "Roll Number", selector: (row) => row.roll, sortable: true },
    { name: "Batch", selector: (row) => row.batch, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
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
          {!!data && <Tables data={data} columns={columns} />}
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
