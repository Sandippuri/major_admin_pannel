import React, { useState } from "react";
import {
  useGetAllBatchesQuery,
  useDeleteBatchMutation,
} from "../../redux-toolkit/apiSlices/batch";
import Tables from "../../components/table/tables";
import DeleteModal from "./components/deleteModal";
import EditBatchModal from "./components/editBatchModal";
import AddBatchModal from "./components/addBatchModal";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils/auth";

const BatchList = () => {
  const [batchId, setBatchId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editBatchModalOpen, setEditBatchModalOpen] = useState(false);
  const [addBatchModalOpen, setAddBatchModalOpen] = useState(false);
  const { data, isLoading } = useGetAllBatchesQuery();
  const [deleteBatch] = useDeleteBatchMutation();
  const batchData = data?.value;
  const token = getAuthToken();
  console.log(token);

  const columns = [
    { name: "S No.", selector: (row) => row.ID, sortable: true },
    { name: "Batch", selector: (row) => row.year, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="text-primary hover:text-green-500"
            onClick={() => {
              setBatchId(row.ID);
              setEditBatchModalOpen(true);
            }}
          >
            <MdOutlineModeEditOutline size={24} />
          </button>
          <button
            onClick={() => {
              setBatchId(row.ID);
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
      <div className="flex flex-col   mx-5 my-5">
        <div className="flex justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Batch Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddBatchModalOpen(true)}
          >
            + Add Batch
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
          {!!data && <Tables data={batchData} columns={columns} />}
        </div>
      </div>
      <AddBatchModal
        isOpen={addBatchModalOpen}
        closeModal={() => setAddBatchModalOpen(false)}
      />
      <EditBatchModal
        isOpen={editBatchModalOpen}
        closeModal={() => setEditBatchModalOpen(false)}
        batchId={batchId}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteBatch(batchId);
            console.log(response);
            if (response?.error?.status === 400) {
              toast.error(response?.error?.data?.error);
            } else {
              toast.success("Batch deleted successfully");
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

export default BatchList;
