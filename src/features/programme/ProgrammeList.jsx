import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllProgrammesQuery,
  useDeleteProgrammeMutation,
} from "../../redux-toolkit/apiSlices/programme";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./components/deleteModal";
import AddProgrammeModal from "./components/addProgrammeModal";
import EditProgrammeModal from "./components/editProgrammeModal";
import Card from "../../components/ui/card";
import { toast } from "react-toastify";

const ProgrammeList = () => {
  // const dispatch = useDispatch();
  const [programmeId, setProgrammeId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editProgrammeModalOpen, setEditProgrammeModalOpen] = useState(false);
  const [addProgrammeModalOpen, setAddProgrammeModalOpen] = useState(false);
  const { data, isLoading } = useGetAllProgrammesQuery();
  const [deleteProgramme] = useDeleteProgrammeMutation();
  const navigate = useNavigate();
  // const data = useSelector()
  // console.log(data);
  const campusData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.ID, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Full Name", selector: (row) => row.full_name, sortable: true },
    {
      name: "Department",
      selector: (row) => row.department.name,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="bg-primary hover:bg-green-500 p-1 rounded-sm text-white"
            onClick={() => {
              setProgrammeId(row.ID);
              setEditProgrammeModalOpen(true);
            }}
          >
            Edit
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setProgrammeId(row.ID);
              setDeleteModalOpen(true);
            }}
            // onClick={() => deleteDepartment(row.ID)}
            className="bg-primary hover:bg-red-500 p-1 rounded-sm text-white"
          >
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    // { name: "Description", selector: (row) => row.description, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
        <div className="flex justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Programme Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddProgrammeModalOpen(true)}
          >
            + Add Programme
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
          {!!data && <Tables data={campusData} columns={columns} />}
        </div>
      </div>
      <AddProgrammeModal
        isOpen={addProgrammeModalOpen}
        closeModal={() => setAddProgrammeModalOpen(false)}
      />
      <EditProgrammeModal
        isOpen={editProgrammeModalOpen}
        closeModal={() => setEditProgrammeModalOpen(false)}
        departmentId={programmeId}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteProgramme(programmeId);
            console.log(response);
            if (response?.error?.originalStatus === 400) {
              toast.error(response?.error?.data);
            } else {
              toast.success("Programme deleted successfully");
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

export default ProgrammeList;
