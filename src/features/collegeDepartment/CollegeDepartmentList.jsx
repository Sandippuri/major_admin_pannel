import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCollegesQuery } from "../../redux-toolkit/apiSlices/college";
import { useGetAllCollegeDepartmentsQuery } from "../../redux-toolkit/apiSlices/collegeDepartment";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import AddCollegeModal from "./components/addCollegeDepartmentModal";
import Card from "../../components/ui/card";

const CollegeDepartmentList = () => {
  const [addCollegeDepartmentModalOpen, setAddCollegeDepartmentModalOpen] =
    useState(false);
  const { data: collegeData, isLoading } = useGetAllCollegesQuery();
  // const { data: collegeDepartmentData, isLoading } =useGetAllCollegeDepartmentsQuery();
  console.log(collegeData);
  const navigate = useNavigate();

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
            {collegeData?.value.map((college) => (
              <Card
                key={college.ID}
                className="flex flex-col gap-2"
                onClick={() => navigate(`/college_department/${college.ID}`)}
              >
                <h1 className="text-xl font-bold">{college?.name}</h1>
                <div className="flex flex-col">
                  {college.campusDepartments.length === 0 ? (
                    <p className="text-sm text-red-500">No departments added</p>
                  ) : (
                    <p className="text-sm text-blue-500">Departments</p>
                  )}

                  {college?.campusDepartments?.map((campusDepartment) => {
                    return <h3>{campusDepartment?.department?.name}</h3>;
                  })}
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
