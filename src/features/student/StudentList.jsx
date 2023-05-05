import React, { useEffect, useState, useMemo } from "react";
import {
  useGetAllStudentsQuery,
  useDeleteStudentMutation,
} from "../../redux-toolkit/apiSlices/student";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import AddStudentModal from "./components/addStudentModal";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import EditStudentModal from "./components/editStudentModal";
import DeleteModal from "./components/deleteModal";

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
  const [studentId, setStudentId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editStudentModalOpen, setEditStudentModalOpen] = useState(false);
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();
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
    { name: "Roll number", selector: (row) => row.rollNumber, sortable: true },
    { name: "Student name", selector: (row) => row.name, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            id={row.ID}
            onClick={() => {
              setStudentId(row.id);
              setDeleteModalOpen(true);
            }}
            // onClick={() => deleteDepartment(row.ID)}
            className="text-primary hover:text-red-500"
          >
            <MdOutlineDelete size={24} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
            <div className=" h-[80vh] flex justify-center items-center">
              <div
                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
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
      <EditStudentModal
        isOpen={editStudentModalOpen}
        closeModal={() => setEditStudentModalOpen(false)}
        studentId={studentId}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteStudent(studentId);
            console.log(response);
            if (response?.error?.originalStatus === 400) {
              toast.error(response?.error?.data);
            } else {
              toast.success("Student deleted successfully");
              setDeleteModalOpen(false);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </>
  );
};

export default StudentList;
