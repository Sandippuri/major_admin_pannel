import React, { useState } from "react";
import {
  useGetAllDepartmentsQuery,
  useDeleteDepartmentMutation,
} from "../../redux-toolkit/apiSlices/department";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/table/tables";
import AddDepartmentModal from "./components/addDepartmentModal";
import EditDepartmentModal from "./components/editDepartmentModal";
import DeleteModal from "./components/deleteModal";
import { toast } from "react-toastify";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";

const DepartmentList = () => {
  const [departmentId, setDepartmentId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addDepartmentModalOpen, setAddDepartmentModalOpen] = useState(false);
  const [editDepartmentModalOpen, setEditDepartmentModalOpen] = useState(false);
  const [deleteDepartment] = useDeleteDepartmentMutation();
  const { data, isLoading } = useGetAllDepartmentsQuery();
  const navigate = useNavigate();
  const departmentData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.ID, sortable: true },
    { name: "Department name", selector: (row) => row.name, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="text-primary hover:text-green-500 "
            onClick={() => {
              setDepartmentId(row.ID);
              setEditDepartmentModalOpen(true);
            }}
          >
            <MdOutlineModeEditOutline size={24} />
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setDepartmentId(row.ID);
              setDeleteModalOpen(true);
            }}
            // onClick={() => deleteDepartment(row.ID)}
            className="text-primary hover:text-red-500 "
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
          <h2 className="text-xl font-bold">Department Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddDepartmentModalOpen(true)}
          >
            + Add Department
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
          {!!data && <Tables data={departmentData} columns={columns} />}
        </div>
      </div>
      <AddDepartmentModal
        isOpen={addDepartmentModalOpen}
        closeModal={() => setAddDepartmentModalOpen(false)}
      />
      <EditDepartmentModal
        isOpen={editDepartmentModalOpen}
        closeModal={() => setEditDepartmentModalOpen(false)}
        departmentId={departmentId}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteDepartment(departmentId);
            console.log(response);
            if (response?.error?.status === 400) {
              toast.error(response?.error?.data?.error);
            } else {
              toast.success("Department deleted successfully");
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

export default DepartmentList;
