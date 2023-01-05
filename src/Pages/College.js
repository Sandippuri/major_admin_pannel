import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCollegesQuery } from "../RTK/slices/college";
import Tables from '../components/ui/tables';
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/card";
import DashboadLayout from "../components/Layour/DashboadLayout";

const College = () => {
  // const dispatch = useDispatch();
  const { data, isLoading } = useGetAllCollegesQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: row => row.id, sortable: true },
    { name: "College name", selector: row => row.name, sortable: true },
    { name: "Location", selector: row => row.address,  sortable: true},
    { name: "Description", selector: row => row.description,  sortable: true}
  ];

  return (
    <DashboadLayout
      childrens={
        <div className="flex flex-col w-full mx-5 my-5">
          <div className="flex w-full justify-between">
            <h2 className="text-xl font-bold">College Details </h2>
            <button
              className="bg-gray-900 text-white rounded-md px-4 py-2"
              onClick={() => navigate("/addCollege")}
            >
              + Add college
            </button>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 my-3">
            <Card title={"Constituent Colleges"} count={4} />
            <Card title={"Affiliated Colleges"} count={17} />
          </div>
          <div>
            {isLoading && (
              <h1 className="text-4xl text-center text-black">Loading...</h1>
            )}
            {!!data && (
             <Tables data={data} columns={columns}/>
            )}
          </div>
        </div>
      }
    />
  );
};

export default College;
