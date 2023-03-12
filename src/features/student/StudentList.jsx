import React, { useEffect, useState } from "react";
import {
  useGetAllStudentsQuery,
  useGetStudentQuery,
} from "../../redux-toolkit/apiSlices/student";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/table/tables";
import AddStudentModal from "./components/addStudentModal";

const StudentList = () => {
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false);
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllStudentsQuery();
  const { singleStudentData = data } = useGetStudentQuery(1);
  const studentData = data?.value;
  console.log(singleStudentData);
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
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
          {!!data && <Tables data={studentData} columns={columns} />}
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
