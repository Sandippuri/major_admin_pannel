import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCollegeDepartmentsQuery } from "../../redux-toolkit/apiSlices/collegeDepartment";
import { useGetAllCollegeProgrammesQuery } from "../../redux-toolkit/apiSlices/collegeProgramme";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import AddCollegeModal from "./components/addCollegeDepartmentModal";
import Card from "../../components/ui/card";

const CollegeDepartmentList = () => {
  const [addCollegeDepartmentModalOpen, setAddCollegeDepartmentModalOpen] =
    useState(false);
  const { data: collegeDepartmentData, isLoading } =
    useGetAllCollegeDepartmentsQuery();
  console.log(collegeDepartmentData);
  // const columns = [
  //   { name: "S No.", selector: (row) => row.ID, sortable: true },
  //   {
  //     name: "Department",
  //     selector: (row) => row.department.name,
  //     sortable: true,
  //   },
  //   { name: "College", selector: (row) => row.campus.name, sortable: true },
  //   // { name: "Description", selector: (row) => row.description, sortable: true },
  // ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
        <div className="flex justify-between px-4 py-2">
          <h2 className="text-xl font-bold">College Department Details </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddCollegeDepartmentModalOpen(true)}
          >
            + Add college department
          </button>
        </div>
        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          <div className="grid grid-cols-2 gap-4">
            {collegeDepartmentData?.value.map((collegeDepartment) => (
              <Card key={collegeDepartment.ID} className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">
                  {collegeDepartment.campus.name}
                </h1>
                <div className="flex flex-col">
                  <p className="text-sm text-blue-500">Departments</p>
                  <h3>{collegeDepartment.department.name}</h3>
                </div>
              </Card>
            ))}
            {/* <Card className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Pulchowk Engineering Campus</h1>
              <div className="flex flex-col">
                <p className="text-sm text-blue-500">Departments</p>
                <h3>Department of Civil Engineering</h3>
              </div>
            </Card> */}
          </div>
        </div>
      </div>
      <AddCollegeModal
        isOpen={addCollegeDepartmentModalOpen}
        closeModal={() => setAddCollegeDepartmentModalOpen(false)}
      />
    </>
  );
};

export default CollegeDepartmentList;
