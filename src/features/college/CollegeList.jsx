import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllCollegesQuery,
  useDeleteCollegeMutation,
} from "../../redux-toolkit/apiSlices/college";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./components/deleteModal";
import AddCollegeModal from "./components/addCollegeModal";
import EditCollegeModal from "./components/editCollegeModal";
import Card from "../../components/ui/card";
import { toast } from "react-toastify";

const CollegeList = () => {
  const [collegeId, setCollegeId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addCollegeModalOpen, setAddCollegeModalOpen] = useState(false);
  const [editCollegeModalOpen, setEditCollegeModalOpen] = useState(false);
  const [deleteCollege] = useDeleteCollegeMutation();
  const { data, isLoading } = useGetAllCollegesQuery();
  const campusData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.ID, sortable: true },
    { name: "College name", selector: (row) => row.name, sortable: true },
    { name: "Location", selector: (row) => row.location, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="bg-primary hover:bg-green-500 p-1 rounded-sm text-white"
            onClick={() => {
              setCollegeId(row.ID);
              setEditCollegeModalOpen(true);
            }}
          >
            Edit
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setCollegeId(row.ID);
              setDeleteModalOpen(true);
            }}
            // onClick={() => deleteCollege(row.ID)}
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
          <h2 className="text-xl font-bold">College Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddCollegeModalOpen(true)}
          >
            + Add college
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
          {!!data && (
            <Tables
              data={campusData}
              columns={columns}
              // buttonComponent={
              //   <button
              //     className="btn btn-primary w-full"
              //     onClick={() => setAddCollegeModalOpen(true)}
              //   >
              //     + Add college
              //   </button>
              // }
            />
          )}
        </div>
      </div>
      <AddCollegeModal
        isOpen={addCollegeModalOpen}
        closeModal={() => setAddCollegeModalOpen(false)}
      />
      <EditCollegeModal
        isOpen={editCollegeModalOpen}
        closeModal={() => setEditCollegeModalOpen(false)}
        collegeId={collegeId}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteCollege(collegeId);
            console.log(response);
            if (response?.error?.status === 400) {
              toast.error(response?.error?.data?.error);
            } else {
              toast.success("College deleted successfully");
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

export default CollegeList;
