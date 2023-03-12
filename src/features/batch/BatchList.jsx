import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllBatchesQuery,
  useDeleteBatchMutation,
} from "../../redux-toolkit/apiSlices/batch";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./components/deleteModal";
import EditBatchModal from "./components/editBatchModal";
import AddBatchModal from "./components/addBatchModal";
import Card from "../../components/ui/card";
import { toast } from "react-toastify";

const BatchList = () => {
  // const dispatch = useDispatch();
  const [batchId, setBatchId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editBatchModalOpen, setEditBatchModalOpen] = useState(false);
  const [addBatchModalOpen, setAddBatchModalOpen] = useState(false);
  const { data, isLoading } = useGetAllBatchesQuery();
  const [deleteBatch] = useDeleteBatchMutation();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const batchData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Batch", selector: (row) => row.year, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="bg-primary hover:bg-green-500 p-1 rounded-sm text-white"
            onClick={() => {
              setBatchId(row.id);
              setEditBatchModalOpen(true);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              setBatchId(row.id);
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
  ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
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
            <h1 className="text-4xl text-center text-black">Loading...</h1>
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
