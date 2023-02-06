import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCollegesQuery } from "../../redux-toolkit/apiSlices/college";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import AddCollegeModal from "./components/addCollegeModal";
import Card from "../../components/ui/card";

const CollegeList = () => {
  // const dispatch = useDispatch();
  const [addCollegeModalOpen, setAddCollegeModalOpen] = useState(false);
  const { data, isLoading } = useGetAllCollegesQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "College name", selector: (row) => row.name, sortable: true },
    { name: "Location", selector: (row) => row.address, sortable: true },
    { name: "Description", selector: (row) => row.description, sortable: true },
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
          {!!data && <Tables data={data} columns={columns} />}
        </div>
      </div>
      <AddCollegeModal
        isOpen={addCollegeModalOpen}
        closeModal={() => setAddCollegeModalOpen(false)}
      />
    </>
  );
};

export default CollegeList;
