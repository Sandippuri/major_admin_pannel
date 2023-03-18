import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllSubjectsQuery,
  useDeleteSubjectMutation,
} from "../../redux-toolkit/apiSlices/subject";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import AddSubjectModal from "./components/addSubjectModal";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import EditSubjectModal from "./components/editSubjectModal";
import DeleteModal from "./components/deleteModal";
import Card from "../../components/ui/card";
import { toast } from "react-toastify";

const SubjectList = () => {
  // const dispatch = useDispatch();
  const [subjectId, setSubjectId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editSubjectModalOpen, setEditSubjectModalOpen] = useState(false);
  const [addSubjectModalOpen, setAddSubjectModalOpen] = useState(false);
  const [deleteSubject] = useDeleteSubjectMutation();
  const { data, isLoading } = useGetAllSubjectsQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  const subjectData = data?.value;
  console.log(subjectData);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Course ID", selector: (row) => row.courseId, sortable: true },
    { name: "Subject name", selector: (row) => row.fullName, sortable: true },
    {
      name: "Practical",
      cell: (row) => (
        <input
          type="checkbox"
          disabled={true}
          checked={Boolean(row.Practical)}
        />
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="text-primary hover:text-green-500"
            onClick={() => {
              setSubjectId(row.id);
              setEditSubjectModalOpen(true);
            }}
          >
            <MdOutlineModeEditOutline size={24} />
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setSubjectId(row.id);
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
          <h2 className="text-xl font-bold">Subject Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddSubjectModalOpen(true)}
          >
            + Add Subject
          </button>
        </div>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 my-3">
          <Card title={"Constituent Colleges"} count={4} />
          <Card title={"Affiliated Colleges"} count={17} />
        </div> */}
        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={subjectData} columns={columns} />}
        </div>
      </div>
      <AddSubjectModal
        isOpen={addSubjectModalOpen}
        closeModal={() => setAddSubjectModalOpen(false)}
      />
      <EditSubjectModal
        isOpen={editSubjectModalOpen}
        closeModal={() => setEditSubjectModalOpen(false)}
        subjectId={subjectId}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteSubject(subjectId);
            console.log(response);
            if (response?.error?.originalStatus === 400) {
              toast.error(response?.error?.data);
            } else {
              toast.success("Subject deleted successfully");
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

export default SubjectList;
