import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCollegesQuery } from "../../redux-toolkit/apiSlices/college";
import { useGetAllCollegeProgrammesQuery } from "../../redux-toolkit/apiSlices/collegeProgramme";
import Tables from "../../components/table/tables";
import { useNavigate } from "react-router-dom";
import AddCollegeProgrammeModal from "./components/addCollegeProgrammeModal";
import Card from "../../components/ui/card";

const CollegeProgrammeList = () => {
  // const dispatch = useDispatch();
  const [addCollegeProgrammeModalOpen, setAddCollegeProgrammeModalOpen] =
    useState(false);
  const { data: collegeData, isLoading } = useGetAllCollegesQuery();
  const { data } = useGetAllCollegeProgrammesQuery();

  console.log(collegeData);
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
        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          <div className="grid grid-cols-2 gap-4">
            {collegeData?.value.map((college) => (
              <Card key={college.ID} className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">{college?.name}</h1>
                <div className="flex flex-col">
                  {college.campusDepartments.length === 0 ? (
                    <p className="text-sm text-red-500">No Programmes added</p>
                  ) : (
                    <p className="text-sm text-blue-500">Programmes</p>
                  )}

                  {college?.campusDepartments?.map((campusDepartment) => {
                    return <h3> {campusDepartment?.department?.name}</h3>;
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
      <AddCollegeProgrammeModal
        isOpen={addCollegeProgrammeModalOpen}
        closeModal={() => setAddCollegeProgrammeModalOpen(false)}
      />
    </>
  );
};

export default CollegeProgrammeList;
