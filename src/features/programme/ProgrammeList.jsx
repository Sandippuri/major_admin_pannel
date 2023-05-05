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
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
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
  const programmeData = data?.value;
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
            className="text-primary hover:text-green-500"
            onClick={() => {
              setProgrammeId(row.ID);
              setEditProgrammeModalOpen(true);
            }}
          >
            <MdOutlineModeEditOutline size={24} />
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setProgrammeId(row.ID);
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
          {!!data && <Tables data={programmeData} columns={columns} />}
        </div>
      </div>
      <AddProgrammeModal
        isOpen={addProgrammeModalOpen}
        closeModal={() => setAddProgrammeModalOpen(false)}
      />
      <EditProgrammeModal
        isOpen={editProgrammeModalOpen}
        closeModal={() => setEditProgrammeModalOpen(false)}
        programmeId={programmeId}
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
