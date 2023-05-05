import React, { useState } from "react";
import { useGetAllTeachersQuery } from "../../redux-toolkit/apiSlices/teacher";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/table/tables";
import AddTeacherModal from "./components/addTeacherModal";
import DeleteModal from "./components/deleteModal";
import EditTeacherModal from "./components/editTeacherModal";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useDeleteTeacherMutation } from "../../redux-toolkit/apiSlices/teacher";
import { toast } from "react-toastify";

const TeacherList = () => {
  const [teacherID, setTeacherID] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editTeacherModalOpen, setEditTeacherModalOpen] = useState(false);
  const [addTeacherModalOpen, setAddTeacherModalOpen] = useState(false);
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllTeachersQuery();
  const [deleteTeacher] = useDeleteTeacherMutation();
  const navigate = useNavigate();
  console.log(data);

  const columns = [
    { name: "S.No", selector: (row) => row.id, sortable: true },
    { name: "Post", selector: (row) => row.attributes.post, sortable: true },
    // { name: "Title", selector: (row) => row.attributes.title, sortable: true },
    {
      name: "First Name",
      selector: (row) => row.attributes.full_name,
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="text-primary hover:text-green-500 "
            onClick={() => {
              setTeacherID(row.id);
              setEditTeacherModalOpen(true);
            }}
          >
            <MdOutlineModeEditOutline size={24} />
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setTeacherID(row.id);
              setDeleteModalOpen(true);
            }}
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
          <h2 className="text-xl font-bold">Teacher Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddTeacherModalOpen(true)}
          >
            + Add Teacher
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
          {!!data && <Tables data={data?.data} columns={columns} />}
        </div>
      </div>
      <AddTeacherModal
        isOpen={addTeacherModalOpen}
        closeModal={() => setAddTeacherModalOpen(false)}
      />
      <EditTeacherModal
        isOpen={editTeacherModalOpen}
        closeModal={() => setEditTeacherModalOpen(false)}
        teacherID={teacherID}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteTeacher(teacherID);
            console.log(response);
            if (response?.error?.originalStatus === 400) {
              toast.error(response?.error?.data);
            } else {
              toast.success("Teacher deleted successfully");
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

export default TeacherList;
