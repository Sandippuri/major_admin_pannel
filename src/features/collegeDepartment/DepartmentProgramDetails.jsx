import React, { useState } from "react";
import { useGetSingleCollegeDepartmentQuery } from "../../redux-toolkit/apiSlices/collegeDepartment";
import { useDeleteCollegeProgrammeMutation } from "../../redux-toolkit/apiSlices/collegeProgramme";
import Card from "../../components/ui/card";
import { MdOutlineDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import DeleteModal from "./components/deleteModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const DepartmentProgramDetails = () => {
  const navigate = useNavigate();
  const [campusProgrammeId, setCampusProgrammeId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { departmentProgrammeId } = useParams();
  console.log(departmentProgrammeId);
  const { data: collegeDepartmentData, isLoading } =
    useGetSingleCollegeDepartmentQuery(departmentProgrammeId);

  const [deleteCollegeProgramme] = useDeleteCollegeProgrammeMutation();
  // const collegeDepartmentValue = collegeDepartmentData?.value;
  console.log(collegeDepartmentData);
  //   console.log(collegeDepartmentValue);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Department Programmes Details</h1>
      </div>
      <div>
        <h1 className="text-md font-semibold text-blue-500">
          {collegeDepartmentData?.value?.campus?.name}
        </h1>
        <h1 className="text-2xl font-semibold mb-2">
          {collegeDepartmentData?.value?.department?.name}
        </h1>
        {collegeDepartmentData?.value?.campusProgrammes?.length === 0 ? (
          <p>No programmes found</p>
        ) : (
          collegeDepartmentData?.value?.campusProgrammes?.map(
            (campusProgram) => {
              return (
                <Card
                  key={campusProgram?.ID}
                  className="flex justify-between w-1/2 my-2 px-4 py-2"
                >
                  <div className="flex">
                    <h1 className="font-bold">
                      {campusProgram?.programme?.name}
                    </h1>
                    {" - "}
                    <h1>{campusProgram?.programme?.full_name}</h1>
                  </div>
                  <button
                    className="text-primary hover:text-red-500"
                    onClick={() => {
                      setCampusProgrammeId(campusProgram?.ID);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <MdOutlineDelete size={24} />
                  </button>
                </Card>
              );
            }
          )
        )}
      </div>
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteCollegeProgramme(campusProgrammeId);
            console.log(response);
            if (response?.error?.originalStatus === 400) {
              toast.error(response?.error?.data);
            } else {
              toast.success("College Programme deleted successfully");
              setDeleteModalOpen(false);
              navigate(0);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </div>
  );
};

export default DepartmentProgramDetails;
