import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCollegeProgrammesQuery } from "../../redux-toolkit/apiSlices/collegeProgramme";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import AddCollegeProgrammeModal from "./components/addCollegeProgrammeModal";
import Card from "../../components/ui/card";

const CollegeProgrammeList = () => {
  // const dispatch = useDispatch();
  const [addCollegeProgrammeModalOpen, setAddCollegeProgrammeModalOpen] =
    useState(false);
  const { data, isLoading } = useGetAllCollegeProgrammesQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const campusData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.ID, sortable: true },
    // { name: "Description", selector: (row) => row.description, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
        <div className="flex justify-between px-4 py-2">
          <h2 className="text-xl font-bold">College Programme Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddCollegeProgrammeModalOpen(true)}
          >
            + Add college programme
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
      <AddCollegeProgrammeModal
        isOpen={addCollegeProgrammeModalOpen}
        closeModal={() => setAddCollegeProgrammeModalOpen(false)}
      />
    </>
  );
};

export default CollegeProgrammeList;
